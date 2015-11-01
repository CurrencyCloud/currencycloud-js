/**
 * @module client
 */

'use strict';

var rp = require('request-promise');
var settings = require('../package').settings;

var config, token, onbehalfof;

/**
 * Creates a new APIerror if request error object is passed as parameter, otherwise returns Error.
 * @param {Object} err API request error
 * @constructor
 */
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

var snakeize = function(obj) {
  if(!obj || typeof obj !== 'object') {
    return obj;  
  }
  
  if(Array.isArray(obj)) {
    return obj.map(snakeize);
  }
  
  var snake = {};
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      var snakeKey = key.replace(/([_]?[A-Z0-9]+)/g, function(match) {
        if(match.startsWith('_')) {
          return match.toLowerCase();
        }
        else {
          return '_' + match.toLowerCase();          
        }
      });
      snake[snakeKey] = snakeize(obj[key]);
    }
  }
  return snake;
};

var camelize = function(obj) {
  if(!obj || typeof obj !== 'object') {
    return obj;  
  }
  
  if(Array.isArray(obj)) {
    return obj.map(camelize);
  }
  
  var camel = {};
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      var camelKey = key.replace(/([_][a-z0-9])/g, function(match) {
        return match[1].toUpperCase();          
      });
      camel[camelKey] = camelize(obj[key]);
    }
  }
  return camel;
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
    
    return token;
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
        qsStringifyOptions: {
          arrayFormat: 'brackets'
        },
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
    })
    .catch(function(err) {
      throw new APIerror(err);
    });

    return promise;
  },
  
  /**
   * Executes operations on behalf of another contact.
   * @param {String} id       Id of the contact
   * @param {Promise} promise Promise, which is resolved on behalf of the given contact
   * @return {Promise}        Given promise, resolved.
   */
  onBehalfOf: function(id, promise) {
    if(onbehalfof) {
      throw new Error('onBehalfOf has already been called and not yet completed');
    }
    
    var UUIDregex = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/g);
    if(!UUIDregex.test(id)) {
      throw new Error('id is not valid UUID');
    }
    
    onbehalfof = id;
    
    return promise()
    .then(function() {
      onbehalfof = null;
    });
  }
};