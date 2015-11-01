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

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
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
  }
};