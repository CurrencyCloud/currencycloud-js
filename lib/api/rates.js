'use strict';

var client = require('../client');

module.exports = {
  /**
   *
   * @param     
   */
  get: function(params) {
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

    var url = '/v2/rates/detailed';

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
   */
  find: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('currencyPair')) {
      throw new Error('currencyPair is required');
    }

    var url = '/v2/rates/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;   
  }
};