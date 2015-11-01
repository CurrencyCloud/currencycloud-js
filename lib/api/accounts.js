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
   * @return {Promise}                      Promise; if fulfilled returns object, which contains newly created account; if rejected returns APIerror.
   */
  create: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('accountName')) {
      throw new Error('accountName is required');
    }
    if(!params.hasOwnProperty('legalEntityType')) {
      throw new Error('legalEntityType is required');
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
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/accounts/' + params.id;

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

  /**
   * Updates an existing account.
   * @param {Object} params    Object, which contains parameters of the updated account
   * @param {String} params.id Id of the updated account, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains updated account; if rejected returns APIerror.
   */
  update: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/accounts/' + params.id;

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Finds accounts matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought accounts
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found accounts, as well as pagination information; if rejected returns APIerror.
   */
  find: function(params) {
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
  getCurrent: function() {
    var url = '/v2/accounts/current';

    var promise = client.request({
      url: url,
      method: 'GET'
    });

    return promise;
  }
};