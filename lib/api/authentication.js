/**
 * @module authentication
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Generates an authentication token for the API user.
   * @param {Object} params             Authentication parameters object
   * @param {String} params.environment Environment to run against, one of those listed in 'settings' section of package.json, required
   * @param {String} params.loginId     Login id of the API user, required
   * @param {String} params.apiKey      API key of the API user, required   
   * @param {Bool} lazy                 Store authentication config without requesting a token
   * @return {Promise}                  Promise; if fulfilled returns authentication token; if rejected returns APIerror.
   */
  login: function (params, lazy) {
    params = params || {};
    if(!params.hasOwnProperty('environment')) {
      throw new Error('environment is required');
    }
    if(!params.hasOwnProperty('loginId')) {
      throw new Error('loginId is required');
    }
    if(!params.hasOwnProperty('apiKey')) {
      throw new Error('apiKey is required');
    }

    var url = '/v2/authenticate/api';

    var promise = client.authenticate({
      environment: params.environment,
      loginId: params.loginId,
      apiKey: params.apiKey,
      authUrl: url
    }, lazy);

    return promise;
  },

  /**
   * Closes current session.
   * @return {Promise} Promise; if fulfilled returns empty object; if rejected returns APIerror.
   */
  logout: function() {
    var url = '/v2/authenticate/close_session';

    var promise = client.close({
      url: url
    });

    return promise;
  }
};