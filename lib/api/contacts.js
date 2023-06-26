/**
 * @module contacts
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Creates a new contact.
   * @param {Object} params              Object, which contains parameters of the new contact
   * @param {String} params.accountId    Id of the corresponding account, required
   * @param {String} params.firstName    First name of the contact, required
   * @param {String} params.lastName     Last name of the contact, required
   * @param {String} params.emailAddress Email address of the contact, required
   * @param {String} params.phoneNumber  Phone number of the contact, required
   * @return {Promise}                   Promise; if fulfilled returns object, which contains newly created contact; if rejected returns APIerror.
   */
  create: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('accountId')) {
      throw new Error('accountId is required');
    }
    if (!params.hasOwnProperty('firstName')) {
      throw new Error('firstName is required');
    }
    if (!params.hasOwnProperty('lastName')) {
      throw new Error('lastName is required');
    }
    if (!params.hasOwnProperty('emailAddress')) {
      throw new Error('emailAddress is required');
    }
    if (!params.hasOwnProperty('phoneNumber')) {
      throw new Error('phoneNumber is required');
    }

    var url = '/v2/contacts/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of a contact.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested contact, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested contact; if rejected returns APIerror.
   */
  get: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/contacts/' + params.id;

    var promise = client.request({
      url: url,
      method: 'GET'
    });

    return promise;
  },

  /**
   * Updates an existing contact.
   * @param {Object} params    Object, which contains parameters of the updated contact
   * @param {String} params.id Id of the updated contact, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains updated contact; if rejected returns APIerror.
   */
  update: function (params) {
    params = params || {};
    if (!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/contacts/' + params.id;

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
   * Finds contacts matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought contacts
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found contacts, as well as pagination information; if rejected returns APIerror.
   */
  find: function (params) {
    var url = '/v2/contacts/find';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of the active contact.
   * @return {Promise} Promise; if fulfilled returns object, which contains active contact; if rejected returns APIerror.
   */
  getCurrent: function () {
    var url = '/v2/contacts/current';

    var promise = client.request({
      url: url,
      method: 'GET'
    });

    return promise;
  }
};