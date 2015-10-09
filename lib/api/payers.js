'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @param
     * @return     
     */
    get: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/payers/' + id;
      
      var qs;
      if(optional) {
        qs = {
          on_behalf_of: optional.onBehalfOf
        };
      }
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: qs
      });
      
      return promise;
    }
  };
};