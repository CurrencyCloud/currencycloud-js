/**
 * @module client
 */

'use strict';

var error = require('./error');
var utils = require('./utils');
var settings = require('../package').settings;
var version = require('../package').version;
var axios = require('axios');
var qs = require('qs');

var config, token, onbehalfof;

var requestToken = function () {
  var promise = axios.post(config.baseUrl + config.authUrl, {
    login_id: config.loginId,
    api_key: config.apiKey
  }, {
    headers: {
      'User-Agent': 'CurrencyCloudSDK/2.0 NodeJS/' + version,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
      .then(function (res) {
        token = res.data.auth_token;

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

  authenticate: function (params) {
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

    var promise = requestToken()
        .catch(function (res) {
          throw new error(res);
        });

    return promise;
  },

  request: function (params) {
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

      var headers = {
        'X-Auth-Token': token,
        'User-Agent': 'CurrencyCloudSDK/2.0 NodeJS/' + version
      };
      // Conditionally add Content-Type header for PUT or POST methods
      if (params.method === 'POST' || params.method === 'PUT') {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }

      var promise = axios({
        headers: headers,
        url: config.baseUrl + params.url,
        method: params.method,
        data: params.method === 'GET' ? null : utils.snakeize(params.qs),
        params: params.method === 'GET' ? utils.snakeize(params.qs) : null,
        paramsSerializer: function (params) {
          return qs.stringify(params, { arrayFormat: 'brackets' });
        }
      })
          .then(function (response) {
            return utils.camelize(response.data);
          });

      return promise;
    };

    var promise = request(params)
        .catch(function (res) {
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
        });

    return promise;
  },

  close: function (params) {
    var promise = axios.post(config.baseUrl + params.url, null, {
      headers: {
        'X-Auth-Token': token,
        'User-Agent': 'CurrencyCloudSDK/2.0 NodeJS/' + version
        }
      })
        .then(function () {
          config = null;
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
