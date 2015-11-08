/**
 * @module settlements
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Creates a new settlement.
   * @param {Object} params Object, which contains parameters of the new settlement
   * @return {Promise}      Promise; if fulfilled returns object, which contains newly created settlement; if rejected returns APIerror.
   */
  create: function(params) {
    var url = '/v2/settlements/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of a settlement.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested settlement, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested settlement; if rejected returns APIerror.
   */
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/settlements/' + params.id;
    
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
   * Finds settlements matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought settlements
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found settlements, as well as pagination information; if rejected returns APIerror.
   */
  find: function(params) {
    var url = '/v2/settlements/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  },

 /**
   * Deletes an existing settlement.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the deleted settlement, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains deleted settlement; if rejected returns APIerror.
   */
  delete: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/settlements/' + params.id + '/delete';
    
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
   * Adds conversion to an open settlement.
   * @param {Object} params              Parameters object
   * @param {String} params.id           Id of the settlement, required
   * @param {String} params.conversionId Id of the conversion, required   
   * @return {Promise}                   Promise; if fulfilled returns object, which contains updated settlement; if rejected returns APIerror.
   */
  addConversion: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }
    if(!params.hasOwnProperty('conversionId')) {
      throw new Error('conversionId is required');
    }

    var url = '/v2/settlements/' + params.id + '/add_conversion';
    
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
   * Removes conversion from an open settlement.
   * @param {Object} params              Parameters object
   * @param {String} params.id           Id of the settlement, required
   * @param {String} params.conversionId Id of the conversion, required   
   * @return {Promise}                   Promise; if fulfilled returns object, which contains updated settlement; if rejected returns APIerror.
   */
  removeConversion: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }
    if(!params.hasOwnProperty('conversionId')) {
      throw new Error('conversionId is required');
    }

    var url = '/v2/settlements/' + params.id + '/remove_conversion';
    
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
   * Moves the settlement to state 'released', meaning it is ready to be processed.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the settlement, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains updated settlement; if rejected returns APIerror.
   */
  release: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/settlements/' + params.id + '/release';
    
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
   * Moves the settlement to state 'open', allowing conversions to be added or removed.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the settlement, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains updated settlement; if rejected returns APIerror.
   */
  unrelease: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/settlements/' + params.id + '/unrelease';
    
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