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
      if(!params.hasOwnProperty('buyCurrency')) {
        throw new Error('buyCurrency is required');
      }
      if(!params.hasOwnProperty('sellCurrency')) {
        throw new Error('sellCurrency is required');
      }
      if(!params.hasOwnProperty('fixedSide')) {
        throw new Error('fixedSide is required');
      }
      if(!params.hasOwnProperty('amount')) {
        throw new Error('amount is required');
      }
      if(!params.hasOwnProperty('reason')) {
        throw new Error('reason is required');
      }
      if(!params.hasOwnProperty('termAgreement')) {
        throw new Error('termAgreement is required');
      }
      
      var url = '/v2/conversions/create';
      
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
      
      var url = '/v2/conversions/' + params.id;
      
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
    find: function(params) {
      var url = '/v2/conversions/find';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    }
  };
};