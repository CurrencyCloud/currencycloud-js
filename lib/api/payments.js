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
      if(!params.hasOwnProperty('currency')) {
        throw new Error('currency is required');
      }
      if(!params.hasOwnProperty('beneficiaryId')) {
        throw new Error('beneficiaryId is required');
      }
      if(!params.hasOwnProperty('amount')) {
        throw new Error('amount is required');
      }
      if(!params.hasOwnProperty('reason')) {
        throw new Error('reason is required');
      }
      if(!params.hasOwnProperty('reference')) {
        throw new Error('reference is required');
      }
      
      var url = '/v2/payments/create';
      
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
      
      var url = '/v2/payments/' + params.id;
      
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
      
      var url = '/v2/payments/' + params.id;
      
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
      var url = '/v2/payments/find';
      
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
    delete: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      
      var url = '/v2/payments/' + params.id + '/delete';
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: params
      });
      
      return promise;
    }
  };
};