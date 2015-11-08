/**
 * @module conversions
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Creates a new conversion.
   * @param {Object} params                Object, which contains parameters of the conversion
   * @param {String} params.buyCurrency    Currency to buy, required
   * @param {String} params.sellCurrency   Currency to sell, required
   * @param {String} params.fixedSide      Fixed conversion side: buy or sell, required
   * @param {Number} params.amount         Amount to convert, required
   * @param {String} params.reason         Reason for conversion, required   
   * @param {Boolean} params.termAgreement Agreement flag, required      
   * @return {Promise}                     Promise; if fulfilled returns object, which contains created conversion; if rejected returns APIerror.
   */
  create: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('buyCurrency')) {
      throw new Error('buyCurrency is required');
    }
    if(!params.hasOwnProperty('sellCurrency')) {
      throw new Error('sellCurrency is required');
    }
    if(!params.hasOwnProperty('fixedSide')) {
      throw new Error('fixedSide is required');
    }
    if(!params.hasOwnProperty('amount')) {
      throw new Error('amount is required');
    }
    if(!params.hasOwnProperty('reason')) {
      throw new Error('reason is required');
    }
    if(!params.hasOwnProperty('termAgreement')) {
      throw new Error('termAgreement is required');
    }

    var url = '/v2/conversions/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   * Gets details of a conversion.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested conversion, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested conversion; if rejected returns APIerror.
   */
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/conversions/' + params.id;
    
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
   * Finds conversions matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought conversions
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found conversions, as well as pagination information; if rejected returns APIerror.
   */
  find: function(params) {
    var url = '/v2/conversions/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  }
};