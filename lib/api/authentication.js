'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     * Generates an authentication token for the API user which needs to be used in all subsequent calls.
     *
     * @param {String} mode    environment mode; possible values listed in settings section of {@link package.json}  
     * @param {String} loginId login identifier
     * @param {String} apiKey  corresponding API key
     * @return
     */
    login: function (mode, loginId, apiKey) {
      if(typeof mode === 'undefined') {
        throw new Error('mode is required');
      }
      if(typeof loginId === 'undefined') {
        throw new Error('loginId is required');
      }
      if(typeof apiKey === 'undefined') {
        throw new Error('apiKey is required');
      }
      
      var url = '/v2/authenticate/api';
      
      var promise = client.authenticate({
        mode: mode,
        loginId: loginId,
        apiKey: apiKey,
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
      
      var promise = client.request({
        url: url,
        method: 'POST'
      });
      
      return promise;
    }
  };
};