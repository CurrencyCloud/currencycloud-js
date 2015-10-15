'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     * 
     * @return 
     */
    createResetToken: function(params) {
      var url = '/v2/contacts/reset_token/create';
      
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
    create: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('accountId')) {
        throw new Error('accountId is required');
      }
      if(!params.hasOwnProperty('firstName')) {
        throw new Error('firstName is required');
      }
      if(!params.hasOwnProperty('lastName')) {
        throw new Error('lastName is required');
      }
      if(!params.hasOwnProperty('emailAddress')) {
        throw new Error('emailAddress is required');
      }
      if(!params.hasOwnProperty('phoneNumber')) {
        throw new Error('phoneNumber is required');
      }

      var url = '/v2/contacts/create';
      
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
      
      var url = '/v2/contacts/' + params.id;
      
      var promise = client.request({
        url: url,
        method: 'GET'
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
      
      var url = '/v2/contacts/' + params.id;
      
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
      var url = '/v2/contacts/find';

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
      var url = '/v2/contacts/current';
      
      var promise = client.request({
        url: url,
        method: 'GET'
      });
      
      return promise;
    }
  };
};