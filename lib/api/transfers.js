/**
 * @module transfers
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Creates a transfer of funds from an account balance to another account of the same currency
   * @param {Object} params Object, which contains the Transfer parameters
   * @param {String} params.source_account_id Paying account UUID, required
   * @param {String} params.destination_account_id Receiving account UUID, required
   * @param {String} params.currency ISO 4217 currency in which the payment is being made, required
   * @param {String} params.amount the amount to be paid, required
   * @return {Promise} Promise; if fulfilled returns object, which contains created transfer; if rejected returns APIerror.
   */
  create: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('sourceAccountId')) {
      throw new Error('sourceAccountId is required');
    }
    if (!params.hasOwnProperty('destinationAccountId')) {
      throw new Error('destinationAccountId is required');
    }
    if (!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }
    if (!params.hasOwnProperty('amount')) {
      throw new Error('amount is required');
    }

    var url = '/v2/transfers/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Returns an array of Transfer objects for the given search criteria
   * @param {Object} params Object, which contains the Transfer parameters
   * @return {Promise} Promise; if fulfilled returns object, which contains an array of transfers, as well as pagination information; if rejected returns APIerror.
   */
  find: function (params) {
    var url = '/v2/transfers/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Retrive the details of a specific Transfer based on the UUID
   * @param {Object} params Object, which contains the Transfer parameters
   * @param {String} params.id Id of the requested Transfer, required
   * @return {Promise} Promise; if fulfilled returns object, which contains requested Transfer; if rejected returns APIerror.
   */
  get: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/transfers/' + params.id;

    var qs = Object.assign({}, params);
    delete qs.id;

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: qs
    });

    return promise;
  },

  /**
   * Cancel a specific Transfer based on the UUID
   * @param {Object} params Object, which contains the Transfer parameters
   * @param {String} params.id Id of the Transfer to be cancelled, required
   * @return {Promise} Promise; if fulfilled returns object, which contains cancelled Transfer; if rejected returns APIerror.
   */
  cancel: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/transfers/' + params.id + '/cancel';

    var qs = Object.assign({}, params);
    delete qs.id;

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: qs
    });

    return promise;
  }

};