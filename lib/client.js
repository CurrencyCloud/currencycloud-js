/**
 * @module client
 */

'use strict';

var rp = require('request-promise');
var error = require('./error');
var utils = require('./utils');
var settings = require('../package').settings;
var version = require('../package').version;

var config, tokenPromise, token, onbehalfof;

var requestToken = function () {
  var promise = rp.post({
    uri: config.baseUrl + config.authUrl,
    form: {
      login_id: config.loginId,
      api_key: config.apiKey
    },
    headers: {
      'User-Agent': 'CurrencyCloudSDK/2.0 NodeJS/' + version
    }
  })
    .then(function (res) {
      token = JSON.parse(res).auth_token;

      return token;
    });

  return promise;
};

module.exports = {
  _config: {
    get: function () {
      return config;
    }
  },

  _token: {
    set: function (value) {
      token = value;
    },
    get: function () {
      return token;
    }
  },

  authenticate: function (params, lazy) {
    var baseUrl = settings.environment[params.environment];
    if (!baseUrl) {
      throw new Error('invalid environment');
    }

    config = {
      baseUrl: baseUrl,
      loginId: params.loginId,
      apiKey: params.apiKey,
      authUrl: params.authUrl
    };

    if (lazy) {
      return Promise.resolve();
    }

    var promise = requestToken()
      .catch(function (res) {
        throw new error(res);
      });

    return promise;
  },

  request: function (params) {
    var checkToken = function () {
      if (token) {
        return Promise.resolve();
      }
      if (!tokenPromise) {
        tokenPromise = requestToken();
      }
      return tokenPromise;
    };

    var reauthenticate = function (attempts) {
      var promise = requestToken()
        .catch(function (res) {
          if (attempts > 1) {
            return reauthenticate(attempts - 1);
          }
          else {
            throw res;
          }
        });

      return promise;
    };

    var request = function (params) {
      if (onbehalfof) {
        params.qs = params.qs || {};
        params.qs.onBehalfOf = onbehalfof;
      }

      var promise = rp({
        headers: {
          'X-Auth-Token': token,
          'User-Agent': 'CurrencyCloudSDK/2.0 NodeJS/' + version
        },
        uri: config.baseUrl + params.url,
        method: params.method,
        qsStringifyOptions: {
          arrayFormat: 'brackets'
        },
        form: params.method === 'GET' ? null : utils.snakeize(params.qs),
        qs: params.method === 'GET' ? utils.snakeize(params.qs) : null
      })
        .then(function (res) {
          return utils.camelize(JSON.parse(res));
        });

      return promise;
    };

    var promise = checkToken().then(() =>
      request(params).catch(function (res) {
        if (res.statusCode === 401 && token) {
          return reauthenticate(3)
            .then(function () {
              return request(params);
            })
            .catch(function (res) {
              throw new error(res);
            });
        }
        else {
          throw new error(res);
        }
      })
    );

    return promise;
  },

  close: function (params) {
    var promise = rp.post({
      headers: {
        'X-Auth-Token': token,
        'User-Agent': 'CurrencyCloudSDK/2.0 NodeJS/' + version
      },
      uri: config.baseUrl + params.url,
    })
      .then(function () {
        config = null;
        tokenPromise = null;
        token = null;
      })
      .catch(function (res) {
        throw new error(res);
      });

    return promise;
  },

  /**
   * Executes operations on behalf of another contact.
   * @param {String} id       Id of the contact
   * @param {Promise} promise Promise, which is resolved on behalf of the given contact
   * @return {Promise}        Given promise, resolved.
   */
  onBehalfOf: function (id, promise) {
    if (onbehalfof) {
      throw new Error('onBehalfOf has already been called and not yet completed');
    }

    var UUIDregex = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/g);
    if (!UUIDregex.test(id)) {
      throw new Error('id is not valid UUID');
    }

    onbehalfof = id;

    return promise()
      .then(function () {
        onbehalfof = null;
      });
  }
};
