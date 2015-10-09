'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @param
     * @param
     * @param
     * @param     
     */
    get: function(buyCurrency, sellCurrency, fixedSide, amount, optional) {
      if(typeof buyCurrency === 'undefined') {
        throw new Error('buyCurrency is required');
      }
      if(typeof sellCurrency === 'undefined') {
        throw new Error('sellCurrency is required');
      }
      if(typeof fixedSide === 'undefined') {
        throw new Error('fixedSide is required');
      }
      if(typeof amount === 'undefined') {
        throw new Error('amount is required');
      }
      
      var url = '/v2/rates/detailed';
      
      var qs = {
        buy_currency: buyCurrency,
        sell_currency: sellCurrency,
        fixed_side: fixedSide,
        amount: amount
      };
      if(optional) {
        qs.conversion_date = optional.conversionDate;
        qs.on_behalf_of = optional.onBehalfOf;
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
     */
    find: function(currencyPair, optional) {
      if(typeof currencyPair === 'undefined') {
        throw new Error('currencyPair is required');
      }
      
      var url = '/v2/rates/find';
      
      var qs = {
        currency_pair: currencyPair
      };
      if(optional) {
        qs.ignore_invalid_pairs = optional.ignoreInvalidPairs;
        qs.on_behalf_of = optional.onBehalfOf;
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