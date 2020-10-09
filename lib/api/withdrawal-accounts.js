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
    }
};