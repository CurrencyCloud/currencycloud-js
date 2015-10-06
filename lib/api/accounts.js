'use strict';

var client = require('../client')();
var utils = require('../utils')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @param
     * @param     
     */
    create: function(accountName, legalEntityType, optional) {
      var url = '/v2/accounts/create';
      
      var qs = {
          account_name: accountName,
          legal_entity_type: legalEntityType
      };
      qs = utils.merge(qs, optional);
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: qs
      });
      
      return promise;
    },
    
    /**
     *
     * @param
     */
    get: function(id, optional) {
      var url = '/v2/accounts/' + id;
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: optional
      });
      
      return promise;
    },
    
    /**
     *
     * @param
     * @param     
     */
    update: function(id, optional) {
      var url = '/v2/accounts/' + id;
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: optional
      });
      
      return promise;
    }
  }
}