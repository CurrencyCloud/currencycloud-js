'use strict';

var rp = require('request-promise');
var settings = require('../package').settings;
var config, token;

module.exports = function () {
  return {
    authenticate: function(params) {
      config = {
        baseUrl: settings.mode[params.mode],
        loginId: params.loginId,
        apiKey: params.apiKey,
        authUrl: params.authUrl        
      };
      
      var promise = rp.post({
        uri: config.baseUrl + config.authUrl,
        qs: {
          login_id: config.loginId,
          api_key: config.apiKey
        }
      })
      .then(function(body) {
        token = JSON.parse(body).auth_token;
      })
      .catch(function(reason) {
        //todo
      });

      return promise;
    },
    
    request: function(params) {
      var promise = rp({
        headers: {
          "X-Auth-Token": token
        },
        uri: config.baseUrl + params.url,
        method: params.method,
        qs: params.qs
      });
      
      return promise;
    }
  }
}