/**
 * @module accounts
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Creates a new account.
   * @param {Object} params                 Object, which contains parameters of the new account
   * @param {String} params.accountName     Name of the account, required
   * @param {String} params.legalEntityType Type of the account's legal entity, required
   * @param {String} params.street          Registered first line of an account address, required
   * @param {String} params.city            Registered city of an account, required
   * @param {String} params.postalCode      Registered postal code of an account, required
   * @param {String} params.country         Registered country code of an account. A two-letter country code as defined in ISO 3166-1, required
   * @return {Promise}                      Promise; if fulfilled returns object, which contains newly created account; if rejected returns APIerror.
   */
  create: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('accountName')) {
      throw new Error('accountName is required');
    }
    if (!params.hasOwnProperty('legalEntityType')) {
      throw new Error('legalEntityType is required');
    }
    if (!params.hasOwnProperty('street')) {
      throw new Error('street is required');
    }
    if (!params.hasOwnProperty('city')) {
      throw new Error('city is required');
    }
    if (!params.hasOwnProperty('postalCode')) {
      throw new Error('postalCode is required');
    }
    if (!params.hasOwnProperty('country')) {
      throw new Error('country is required');
    }

    var url = '/v2/accounts/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of an account.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested account, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested account; if rejected returns APIerror.
   */
  get: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/accounts/' + params.id;

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
   * Updates an existing account.
   * @param {Object} params    Object, which contains parameters of the updated account
   * @param {String} params.id Id of the updated account, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains updated account; if rejected returns APIerror.
   */
  update: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/accounts/' + params.id;

    var qs = Object.assign({}, params);
    delete qs.id;

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: qs
    });

    return promise;
  },

  /**
   * Finds accounts matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought accounts
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found accounts, as well as pagination information; if rejected returns APIerror.
   */
  find: function (params) {
    var url = '/v2/accounts/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of the active account.
   * @return {Promise} Promise; if fulfilled returns object, which contains active account; if rejected returns APIerror.
   */
  getCurrent: function () {
    var url = '/v2/accounts/current';

    var promise = client.request({
      url: url,
      method: 'GET'
    });

    return promise;
  },

  /**
   * Gets payment charges settings for given account.
   * @param {String} params.accountId   Account Id or house account available in current visibility scope, required
   * @return {Promise}                  Promise; if fulfilled returns object contains payment charges settings; if rejected returns APIerror.
   */
  getPaymentChargesSettings: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('accountId')) {
      throw new Error('accountId is required');
    }
    var url = '/v2/accounts/' + params.accountId + '/payment_charges_settings';

    var promise = client.request({
      url: url,
      method: 'GET'
    });

    return promise;
  },

  /**
   * Updates an existing account.
   * @param {Object} params                   Object, which contains parameters of the updated account
   * @param {String} params.accountId         Account Id or house account available in current visibility scope, required
   * @param {String} params.chargeSettingsId  Account Payment Charges Setting Id, required
   * @return {Promise}                        Promise; if fulfilled returns object, which contains updated account; if rejected returns APIerror.
   */
  updatePaymentChargesSettings: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('accountId')) {
      throw new Error('accountId is required');
    }
    if (!params.hasOwnProperty('chargeSettingsId')) {
      throw new Error('chargeSettingsId is required');
    }

    var url = '/v2/accounts/' + params.accountId + '/payment_charges_settings/' + params.chargeSettingsId;

    var qs = Object.assign({}, params);
    delete qs.accountId;
    delete qs.chargeSettingsId;

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: qs
    });

    return promise;
  }
};