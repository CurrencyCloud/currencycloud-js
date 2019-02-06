/**
 * @module ibans
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Finds the details of the IBANs
   * @param {Object} params Object, which contains parameters of the sought IBANs
   * @return {Promise} Promise; if fulfilled returns object, which contains an array of IBANs, as well as pagination information; if rejected returns APIerror.
   */
  find: function (params) {
    var url = '/v2/ibans/find';

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  }
};