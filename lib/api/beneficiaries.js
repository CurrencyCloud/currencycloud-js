/**
 * @module beneficiaries
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Validates beneficiary details without creating one.
   * @param {Object} params                    Object, which contains beneficiary details
   * @param {String} params.bankCountry        Country of the beneficiary's bank, required
   * @param {String} params.currency           Currency of the beneficiary, required
   * @param {String} params.beneficiaryCountry Country of the beneficiary, required
   * @return {Promise}                         Promise; if fulfilled returns object, which contains newly created beneficiary; if rejected returns APIerror.
   */
  validate: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('bankCountry')) {
      throw new Error('bankCountry is required');
    }
    if(!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }
    if(!params.hasOwnProperty('beneficiaryCountry')) {
      throw new Error('beneficiaryCountry is required');
    }

    var url = '/v2/beneficiaries/validate';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Account verification.
   * @param {Object} params                    Object, which contains account verification details
   * @return {Promise}                         Promise; if fulfilled returns object, which contains account verification; if rejected returns APIerror.
   */
  accountVerification: function(params) {
    var url = '/v2/beneficiaries/account_verification';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Creates a new beneficiary.
   * @param {Object} params                       Object, which contains parameters of the new beneficiary
   * @param {String} params.bankAccountHolderName Name of the beneficiary's bank account holder, required
   * @param {String} params.bankCountry           Country of the beneficiary's bank, required
   * @param {String} params.currency              Currency of the beneficiary, required
   * @param {String} params.name                  Name of the beneficiary, required
   * @return {Promise}                            Promise; if fulfilled returns object, which contains newly created beneficiary; if rejected returns APIerror.
   */
  create: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('bankAccountHolderName')) {
      throw new Error('bankAccountHolderName is required');
    }
    if(!params.hasOwnProperty('bankCountry')) {
      throw new Error('bankCountry is required');
    }
    if(!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }
    if(!params.hasOwnProperty('name')) {
      throw new Error('name is required');
    }

    var url = '/v2/beneficiaries/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of a beneficiary.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested beneficiary, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested beneficiary; if rejected returns APIerror.
   */
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/beneficiaries/' + params.id;
    
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
   * Updates an existing beneficiary.
   * @param {Object} params    Object, which contains parameters of the updated beneficiary
   * @param {String} params.id Id of the updated beneficiary, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains updated beneficiary; if rejected returns APIerror.
   */
  update: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }
    
    var url = '/v2/beneficiaries/' + params.id;
    
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
   * Finds beneficiaries matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought beneficiaries
   * @return {Promise}      Promise; if fulfilled returns array, which contains found beneficiaries; if rejected returns APIerror.
   */
  find: function(params) {
    var url = '/v2/beneficiaries/find';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Deletes an existing beneficiary.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the deleted beneficiary, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains deleted beneficiary; if rejected returns APIerror.
   */
  delete: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/beneficiaries/' + params.id + '/delete';
    
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