/**
 * @module rates
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Gets a full quote for the requested currency based on the spread table of the active contact.
   * @param {Object} params              Parameters object
   * @param {String} params.buyCurrency  Currency to buy, required
   * @param {String} params.sellCurrency Currency to sell, required
   * @param {String} params.fixedSide    Fixed conversion side: buy or sell, required
   * @param {Number} params.amount       Amount to convert, required
   * @return {Promise}                   Promise; if fulfilled returns object, which contains requested contact; if rejected returns APIerror.
   */
  get: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('buyCurrency')) {
      throw new Error('buyCurrency is required');
    }
    if (!params.hasOwnProperty('sellCurrency')) {
      throw new Error('sellCurrency is required');
    }
    if (!params.hasOwnProperty('fixedSide')) {
      throw new Error('fixedSide is required');
    }
    if (!params.hasOwnProperty('amount')) {
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
   * Gets core rate information for multiple currency pairs.
   * @param {Object} params              Parameters object
   * @param {String} params.currencyPair Currency pair, required
   * @return {Promise}                   Promise; if fulfilled returns object, which contains bid and offer rates for currency pairs; if rejected returns APIerror.
   */
  find: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('currencyPair')) {
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