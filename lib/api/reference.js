/**
 * @module reference
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Gets required beneficiary details and their basic validation formats.
   * @param {Object} params Parameters object
   * @return {Promise}      Promise; if fulfilled returns object, which contains required fields of a beneficiary object and their format; if rejected returns APIerror.
   */
  getBeneficiaryRequiredDetails: function (params) {
    var url = '/v2/reference/beneficiary_required_details';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets dates for which the given currency pair can not be traded.
   * @param {Object} params                Parameters object
   * @param {String} params.conversionPair Currency conversion pair, required
   * @return {Promise}                     Promise; if fulfilled returns object, which contains invalid conversion dates as well as first and default date; if rejected returns APIerror.
   */
  getConversionDates: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('conversionPair')) {
      throw new Error('conversionPair is required');
    }

    var url = '/v2/reference/conversion_dates';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets a list of all the currencies that are tradeable.
   * @return {Promise} Promise; if fulfilled returns object, which contains array of currencies; if rejected returns APIerror.
   */
  getAvailableCurrencies: function () {
    var url = '/v2/reference/currencies';

    var promise = client.request({
      url: url,
      method: 'GET'
    });

    return promise;
  },

  /**
   * Gets dates for which the given currency can not be paid.
   * @param {Object} params          Parameters object
   * @param {String} params.currency Currency, required
   * @return {Promise}               Promise; if fulfilled returns object, which contains invalid payment dates as well as first date; if rejected returns APIerror.
   */
  getPaymentDates: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }

    var url = '/v2/reference/payment_dates';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets settlement account information, detailing where funds need to be sent to.
   * @param {Object} params Parameters object
   * @return {Promise}      Promise; if fulfilled returns array of settlement accounts; if rejected returns APIerror.
   */
  getSettlementAccounts: function (params) {
    var url = '/v2/reference/settlement_accounts';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets dates for which the given currency pair can not be traded.
   * @param {Object} params                Parameters object
   * @param {String} params.payerCountry   Currency conversion pair, required
   * @return {Promise}                     Promise; if fulfilled returns object, which contains invalid conversion dates as well as first and default date; if rejected returns APIerror.
   */
  getPayerRequiredDetails: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('payerCountry')) {
      throw new Error('payerCountry is required');
    }

    var url = '/v2/reference/payer_required_details';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets valid purpose codes for a given currency.
   * @param {Object} params                Parameters object
   * @param {String} params.currency       Currency for the payment to be created, required
   * @return {Promise}                     Promise; if fulfilled returns object, which contains valid purpose codes; if rejected returns APIerror.
   */
  getPaymentPurposeCodes: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }

    var url = '/v2/reference/payment_purpose_codes';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of the bank for a given identifier.
   * @param {Object} params                Parameters object
   * @param {String} params.identifierType Type of the identifier, required
   * @param {String} params.identifierValue Value of the identifier, required
   * @return {Promise}                     Promise; if fulfilled returns object, which contains valid purpose codes; if rejected returns APIerror.
   */
  getBankDetails: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('identifierType')) {
      throw new Error('identifierType is required');
    }
    if (!params.hasOwnProperty('identifierValue')) {
      throw new Error('identifierValue is required');
    }

    var url = '/v2/reference/bank_details';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  }
};
