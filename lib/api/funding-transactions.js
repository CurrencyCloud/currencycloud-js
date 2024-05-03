/**
 * @module funding-transactions
 */

'use strict';

var client = require('../client');

module.exports = {
  /**
   * Get the funding transaction for a given id
   * @param {Object} params Object, which contains parameters of the sought transaction. id is required.
   * @return {Promise}      Promise; if fulfilled returns object, if rejected returns APIerror.
   */
  getFundingTransaction: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/funding_transactions/' + params.id;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    }
};