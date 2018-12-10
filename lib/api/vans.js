/**
 * @module vans
 */

'use strict';

var client = require('../client');

module.exports = {
    get: function (params) {
        var url = '/v2/virtual_accounts';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    find: function (params) {
        var url = '/v2/virtual_accounts/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    }
};