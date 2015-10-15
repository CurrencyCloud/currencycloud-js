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
      var url = '/v2/settlements/create';
      
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
      
      var url = '/v2/settlements/' + params.id;
      
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
      var url = '/v2/settlements/find';

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
      
      var url = '/v2/settlements/' + params.id + '/delete';
      
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
    addConversion: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      if(!params.hasOwnProperty('conversionId')) {
        throw new Error('conversionId is required');
      }
      
      var url = '/v2/settlements/' + params.id + '/add_conversion';
      
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
    removeConversion: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      if(!params.hasOwnProperty('conversionId')) {
        throw new Error('conversionId is required');
      }
      
      var url = '/v2/settlements/' + params.id + '/remove_conversion';
      
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
    release: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      
      var url = '/v2/settlements/' + params.id + '/release';
      
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
    unrelease: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('id')) {
        throw new Error('id is required');
      }
      
      var url = '/v2/settlements/' + params.id + '/unrelease';
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: params
      });
      
      return promise;
    }
  };
};