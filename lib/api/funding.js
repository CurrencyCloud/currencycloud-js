/**
 * @module funding
 */

'use strict';

var client = require('../client');

module.exports = {



    /**
     * Returns details of the FundingAccounts for the specified filters
     * @param {Object} params Object, which contains the filters to apply to the find
     * @param {String} params.currency Currency of the funding accounts, required
     * @return {Promise} Promise; if fulfilled returns object, which contains an array of FundingAccounts,
     * as well as pagination information; if rejected returns APIerror.
     */
    findFundingAccounts: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('currency')) {
            throw new Error('currency is required');
        }

        var url = '/v2/funding_accounts/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    }
};