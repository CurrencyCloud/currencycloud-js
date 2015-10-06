'use strict';

var client = require('../client')();
var utils = require('../utils')();

module.exports = function () {
  return {
    /**
     *
     * @param
     */
    find: function(currencyPair, optional) {
      var url = '/v2/rates/find';
      
      var qs = {
        currency_pair: currencyPair
      };
      qs = utils.merge(qs, optional);
      
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
     * @param
     * @param
     * @param
     * @param     
     */
    get: function(buyCurrency, sellCurrency, fixedSide, amount, optional) {
      var url = '/v2/rates/detailed';
      
      var qs = {
          buy_currency: buyCurrency,
          sell_currency: sellCurrency,
          fixed_side: fixedSide,
          amount: amount
      };
      qs = utils.merge(qs, optional);
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: qs
      });
      
      return promise;
    }
  }
}