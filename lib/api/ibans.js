/**
 * @module ibans
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Creates a new IBAN
   * @param {Object} params Object, which contains the IBAN parameters
   * @param {String} params.currency ISO 4217 currency in which the balance is held, required
   * @return {Promise} Promise; if fulfilled returns object, which contains created iban; if rejected returns APIerror.
   */
  create: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }

    var url = '/v2/ibans/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Finds the details of the IBANs
   * @param {Object} params Object, which contains parameters of the sought IBANs
   * @return {Promise} Promise; if fulfilled returns object, which contains an array of IBANs, as well as pagination information; if rejected returns APIerror.
   */
  find: function (params) {
    var url = '/v2/ibans';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Finds the details of the IBANs of the sub-accounts linked to the logged in user
   * @param {Object} params Object, which contains parameters of the sought sub-account IBANs
   * @return {Promise} Promise; if fulfilled returns object, which contains an array of ibans, as well as pagination information; if rejected returns APIerror.
   */
  findInSubAccount: function (params) {
    var url = '/v2/ibans/subaccounts/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets the details of the IBAN assigned to a specific sub-account
   * @param {Object} params Parameters object
   * @param {String} params.id Id of the requested IBAN, required
   * @return {Promise} Promise; if fulfilled returns object, which contains requested IBAN; if rejected returns APIerror.
   */
  getInSubAccount: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/ibans/subaccounts/' + params.id;

    var qs = Object.assign({}, params);
    delete qs.id;

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: qs
    });

    return promise;
  }

};