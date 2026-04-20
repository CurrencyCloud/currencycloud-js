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
    },

    /**
     * Gets the details of an approved funding transaction with the given ID.
     * @param {Object} params Object, which contains parameters
     * @param {String} params.id The Related Entity UUID (related_entity_id) for the transaction, required
     * @param {String} params.on_behalf_of A contact UUID for the sub-account you're acting on behalf of, optional
     * @return {Promise} Promise; if fulfilled returns object, which contains the FundingTransaction details; if rejected returns APIerror.
     */
    getFundingTransaction: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/funding_transactions/' + params.id;

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