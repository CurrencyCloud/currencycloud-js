'use strict';

var client = require('../client')();

module.exports = function () {
  return {
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
      
      var url = '/v2/transactions/' + params.id;
      
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
      var url = '/v2/transactions/find';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    }
  };
};