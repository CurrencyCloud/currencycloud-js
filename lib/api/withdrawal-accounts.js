/**
 * @module withdrawal-accounts
 */

'use strict';

var client = require('../client');

module.exports = {
    /**
     * Returns List of all withdrawal accounts assigned to an account
     * @param {Object} params Object, which contains the optional UUID of a sub-account
     * @return {Promise} Promise; if fulfilled returns object, which contains an array of withdrawal accounts, as well as pagination information; if rejected returns APIerror.
     */
    find: function (params) {
        params = params || {};

        var url = '/v2/withdrawal_accounts/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    /**
     * Submits an ACH pull request from a specific withdrawal account
     * @param {Object} params    Parameters object
     * @param {String} params.withdrawalAccountId Id of the withdrawal account to pull funds from
     * @param {String} params.amount The amount of funds to pull in USD
     * @param {String} params.reference The reference required on the statement
     * @return {Promise} Promise; if fulfilled returns object containing information about the funds pulled. if rejected returns APIerror.
     */
    pullFunds: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('withdrawalAccountId')) {
            throw new Error('withdrawalAccountId is required');
        }
        if (!params.hasOwnProperty('amount')) {
            throw new Error('amount is required');
        }
        if (!params.hasOwnProperty('reference')) {
            throw new Error('reference is required');
        }

        var url = '/v2/withdrawal_accounts/' + params.withdrawalAccountId + '/pull_funds';

        var qs = Object.assign({}, params);
        delete qs.withdrawalAccountId;

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: qs
        });

        return promise;
    }
};