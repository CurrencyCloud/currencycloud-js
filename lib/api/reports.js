/**
 * @module report
 */

'use strict';

var client = require('../client');

module.exports ={
    /**
     * Creates conversion report
     * @deprecated                           Use createConversionReport instead, this Snake Case method will be removed.
     * @param {Object} params                Object, which contains parameters of the report
     */
    create_conversion_report: function (params) {
        return this.createConversionReport(params);
    },

    /**
     * Creates conversion report
     * @param {Object} params                Object, which contains parameters of the report
     */
    createConversionReport: function (params) {
        params = params || {};
        var url = '/v2/reports/conversions/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    /**
     * Creates payment report
     * @deprecated                           Use createPaymentReport instead, this Snake Case method will be removed.
     * @param {Object} params                Object, which contains parameters of the report
     */
    create_payment_report: function (params) {
        return this.createPaymentReport(params);
    },

    /**
     * Creates payment report
     * @param {Object} params                Object, which contains parameters of the report
     */
    createPaymentReport: function (params) {
        params = params || {};
        var url = '/v2/reports/payments/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    /**
     * Find report
     * @deprecated                           Use findReportRequest instead, this Snake Case method will be removed.
     * @param {Object} params                Object, which contains parameters of the report
     */
    find_report_request: function (params) {
        return this.findReportRequest(params);
    },

    /**
     * Find report
     * @param {Object} params                Object, which contains parameters of the report
     */
    findReportRequest: function (params) {
        params = params || {};
        var url = '/v2/reports/report_requests/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    /**
     * Find report by ID
     * @deprecated                           Use findReportViaId instead, this Snake Case method will be removed.
     * @param {Object} params                Object, which contains parameters of the report
     */
    find_report_via_id: function (params) {
        return this.findReportViaId(params);
    },

    /**
     * Find report by ID
     * @param {Object} params                Object, which contains parameters of the report
     */
    findReportViaId: function (params) {
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
