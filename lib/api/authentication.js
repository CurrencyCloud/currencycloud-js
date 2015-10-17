'use strict';

var client = require('../client');

module.exports = {
  /**
   * Generates an authentication token for the API user which needs to be used in all subsequent calls.
   *
   * @param {Object} params
   * @return
   */
  login: function (params) {
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
    });

    return promise;
  },

  /**
   * 
   * @return 
   */
  logout: function() {
    var url = '/v2/authenticate/close_session';

    var promise = client.close({
      url: url
    });

    return promise;
  }
};