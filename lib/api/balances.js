/**
 * @module balances
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Gets the balance for a currency and the date that the balance was last updated.
   * @param {Object} params          Parameters object
   * @param {String} params.currency Currency to get balance for, required
   * @return {Promise}               Promise; if fulfilled returns object, which contains requested balance; if rejected returns APIerror.
   */
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }

    var url = '/v2/balances/' + params.currency;
    
    var qs = Object.assign({}, params);
    delete qs.currency;
    
    var promise = client.request({
      url: url,
      method: 'GET',
      qs: qs
    });

    return promise;
  },

  /**
   * Finds balances matching the search criteria.
   * @param {Object} params Object, which contains parameters of the sought balances
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found balances, as well as pagination information; if rejected returns APIerror.
   */
  find: function(params) {
    var url = '/v2/balances/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Tops up the margin balances with the given amount for the given currency.
   * @param {Object} params                       Object, which contains parameters of the margin balance top up
   * @param {String} params.currency              Currency of the top up, required
   * @param {String} params.amount                Amount to top up, required
   * @return {Promise}                            Promise; if fulfilled returns object, which contains information about the top up; if rejected returns APIerror.
   */
  topUpMargin: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }
    if(!params.hasOwnProperty('amount')) {
      throw new Error('amount is required');
    }

    var url = '/v2/balances/top_up_margin';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  }
};