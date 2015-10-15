'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param     
     * @return     
     */
    validate: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('bankCountry')) {
        throw new Error('bankCountry is required');
      }
      if(!params.hasOwnProperty('currency')) {
        throw new Error('currency is required');
      }
      if(!params.hasOwnProperty('beneficiaryCountry')) {
        throw new Error('beneficiaryCountry is required');
      }
      
      var url = '/v2/beneficiaries/validate';
      
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
      if(!params.hasOwnProperty('bankAccountHolderName')) {
        throw new Error('bankAccountHolderName is required');
      }
      if(!params.hasOwnProperty('bankCountry')) {
        throw new Error('bankCountry is required');
      }
      if(!params.hasOwnProperty('currency')) {
        throw new Error('currency is required');
      }
      if(!params.hasOwnProperty('name')) {
        throw new Error('name is required');
      }
      
      // snakeize number in param names
      if(params.hasOwnProperty('routingCodeType1')) {
        params.routingCodeType_1 = params.routingCodeType1;
        delete params.routingCodeType1;
      }
      if(params.hasOwnProperty('routingCodeValue1')) {
        params.routingCodeValue_1 = params.routingCodeValue1;
        delete params.routingCodeValue1;
      }
      if(params.hasOwnProperty('routingCodeType2')) {
        params.routingCodeType_2 = params.routingCodeType2;
        delete params.routingCodeType2;
      }
      if(params.hasOwnProperty('routingCodeValue2')) {
        params.routingCodeValue_2 = params.routingCodeValue2;
        delete params.routingCodeValue2;
      }
      
      var url = '/v2/beneficiaries/create';
      
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
      
      var url = '/v2/beneficiaries/' + params.id;
      
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
      
      var url = '/v2/beneficiaries/' + params.id;
      
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
      var url = '/v2/beneficiaries/find';
      
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
      
      var url = '/v2/beneficiaries/' + params.id + '/delete';
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: params
      });
      
      return promise;
    }
  };
};