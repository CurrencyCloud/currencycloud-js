'use strict';

var rp = require('request-promise');
var camelize = require('camelize');
var snakeize = require('snakeize');
var settings = require('../package').settings;

var config, token, onbehalfof;

var APIerror = function(err) {
  try {
    var errorObj = camelize(JSON.parse(err.error));
    
    var error = new Error();
    
    error.name = 'APIerror';
    error.message = errorObj.errorCode;
    error.cause = {
      statusCode: err.statusCode,
      error: errorObj
    };

    return error;
  }
  catch(e) {
    if(err instanceof Error) {
      return err;
    }
    else {
      return new Error(err);
    }
  }
};

var requestToken = function() {
  var promise = rp.post({
    uri: config.baseUrl + config.authUrl,
    qs: {
      login_id: config.loginId,
      api_key: config.apiKey
    }
  })
  .then(function(res) {
    token = JSON.parse(res).auth_token;
  });

  return promise;
};

module.exports = {
  _config: {
    get: function() {
      return config;
    }
  },
  
  _token: {
    set: function(value) {
      token = value;
    },
    get: function() {
      return token;
    }
  },
  
  authenticate: function(params) {
    var baseUrl = settings.environment[params.environment];
    if(!baseUrl) {
      throw new Error('invalid environment');
    }

    config = {
      baseUrl: baseUrl,
      loginId: params.loginId,
      apiKey: params.apiKey,
      authUrl: params.authUrl        
    };
    
    var promise = requestToken()
    .catch(function(err) {
      throw new APIerror(err);
    });

    return promise;
  },
  
  request: function(params) {
    var reauthenticate = function(attempts) {
      var promise = requestToken()
      .catch(function(err) {
        if(attempts > 1) {
          return reauthenticate(attempts - 1);
        }
        else {
          throw err;
        }
      });
      
      return promise;
    };

    var request = function(params) {
      if(onbehalfof) {
        params.qs = params.qs || {};
        params.qs.onBehalfOf = onbehalfof;
      }

      var promise = rp({
        headers: {
          'X-Auth-Token': token
        },
        uri: config.baseUrl + params.url,
        method: params.method,
        qs: snakeize(params.qs)
      })
      .then(function(res) {
        return camelize(JSON.parse(res));
      });

      return promise;
    };
  
    var promise = request(params)
    .catch(function(err) {
      if(err.statusCode === 401 && token) {
        return reauthenticate(3)
        .then(function() {
          return request(params);
        })
        .catch(function(err) {
          throw new APIerror(err);
        });
      }
      else {
        throw new APIerror(err);
      }
    });
    
    return promise;
  },
  
  close: function(params) {
    var promise = rp.post({
      headers: {
        'X-Auth-Token': token
      },
      uri: config.baseUrl + params.url,
    })
    .then(function() {
      config = null;
      token = null;
    });

    return promise;
  },
  
  onBehalfOf: function(id, callback) {
    if(onbehalfof) {
      throw new Error('onBehalfOf has already been called and not yet completed');
    }
    var UUIDregex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$');
    if(!UUIDregex.test(id)) {
      throw new Error('id is not valid UUID');
    }
    
    onbehalfof = id;
    
    return callback()
    .then(function() {
      onbehalfof = null;
    });
  }
};