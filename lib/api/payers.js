/**
 * @module payers
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Gets details of a payer.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested payer, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested payer; if rejected returns APIerror.
   */
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/payers/' + params.id;
    
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