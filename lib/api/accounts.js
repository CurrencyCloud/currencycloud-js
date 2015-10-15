'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @return     
     */
    create: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('accountName')) {
        throw new Error('accountName is required');
      }
      if(!params.hasOwnProperty('legalEntityType')) {
        throw new Error('legalEntityType is required');
      }
      
      var url = '/v2/accounts/create';
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: params
      });
      
      return promise;
    },
    
    /**
     *
     * @param
     * @return     
     */
    get: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      
      var url = '/v2/accounts/' + params.id;
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    },
    
    /**
     *
     * @param
     * @return     
     */
    update: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      
      var url = '/v2/accounts/' + params.id;
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: params
      });
      
      return promise;
    },
    
    /**
     *
     * @param
     * @return     
     */
    find: function(params) {
      var url = '/v2/accounts/find';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    },

    /**
     *
     * @return     
     */
    getCurrent: function() {
      var url = '/v2/accounts/current';
      
      var promise = client.request({
        url: url,
        method: 'GET'
      });
      
      return promise;
    }
  };
};