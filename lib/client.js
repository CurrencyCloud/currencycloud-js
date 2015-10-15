'use strict';

var rp = require('request-promise');
var camelize = require('camelize');
var snakeize = require('snakeize');
var settings = require('../package').settings;

var config, token;

var APIerror = function(statusCode, error) {
  var err = new Error();
  
  err.cause = {
    statusCode: statusCode,
    error: error
  };
  err.name = 'API Error';
  err.message = error.errorCode;console.log(JSON.stringify(error)); //todo

  return err;
};

module.exports = function () {
  return {
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
      })
      .catch(function(res) {
        throw new APIerror(res.statusCode, camelize(JSON.parse(res.error)));
      });

      return promise;
    },
    
    request: function(params) {
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
      })
      .catch(function(res) {
        throw new APIerror(res.statusCode, camelize(JSON.parse(res.error)));
      });
      
      return promise;
    }
  };
};