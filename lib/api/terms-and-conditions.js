/**
 * @module terms-and-conditions
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Accept terms and conditions for a sub account
   * @param {Object} params
   * @param {String} params.type Document type, required
   * @param {String} params.version Document version, required
   * @param {String} params.referenceType Reference type, required
   * @param {String} params.referenceId Reference ID, required
   * @param {String} params.firstName The first name of the user accepting the document, required
   * @param {String} params.lastName The last name of the user accepting the document, required
   * @param {String} params.email The email of the user accepting the document, required
   * @return {Promise}
   */
  accept: function (params){
    params = params || {};
    if(!params.hasOwnProperty('type')){
      throw new Error('type is required');
    }
    if(!params.hasOwnProperty('referenceType')){
      throw new Error('referenceType is required');
    }
    if(!params.hasOwnProperty('referenceId')){
      throw new Error('referenceId is required');
    }
    if(!params.hasOwnProperty('version')){
      throw new Error('version is required');
    }
    if(!params.hasOwnProperty('firstName')){
      throw new Error('firstName is required');
    }
    if(!params.hasOwnProperty('lastName')){
      throw new Error('lastName is required');
    }
    if(!params.hasOwnProperty('email')){
      throw new Error('email is required');
    }

    var url = '/v2/terms_and_conditions/accept';

    var promise = client.request({
        url: url,
        method: 'POST',
        qs: params
    });

    return promise;
  }
};