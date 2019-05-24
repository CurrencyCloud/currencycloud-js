/**
 * @module report
 */

'use strict';

var client = require('../client');

module.exports ={
    /**
     * Creates conversion report
     * @param {Object} params                Object, which contains parameters of the report
     */

    create_conversion_report: function (params){
        params = params || {};
        var url = '/v2/reports/conversions/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    create_payment_report: function (params){
        params = params || {};
        var url = '/v2/reports/payments/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    find_report_request: function (params) {
        params = params || {};
        var url = '/v2/reports/report_requests/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    find_report_via_id: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/reports/report_requests/' + params.id;

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
