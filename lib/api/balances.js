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
    get: function(currency, optional) {
      if(typeof currency === 'undefined') {
        throw new Error('currency is required');
      }
      
      var url = '/v2/balances/' + currency;
      
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
    },
    
    /**
     *
     * @param
     * @return     
     */
    find: function(optional) {
      var url = '/v2/balances/find';
      
      var qs;
      if(optional) {
        qs = {
          amount_from: optional.amountFrom,
          amount_to: optional.amountTo,
          as_at_date: optional.asAtDate,
          page: optional.page,
          per_page: optional.per_page,
          order: optional.order,
          order_asc_desc: optional.orderAscDesc,
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