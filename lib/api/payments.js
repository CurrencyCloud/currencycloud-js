/**
 * @module payments
 */

'use strict';

var client = require('../client');

module.exports = {
    /**
     * Creates a new payment.
     * @param {Object} params               Object, which contains parameters of the new payment
     * @param {String} params.currency      Payment currency, required
     * @param {String} params.beneficiaryId Id of the payment beneficiary, required
     * @param {Number} params.amount        Payment amount, required
     * @param {String} params.reason        Payment reason, required
     * @param {String} params.reference     Payment reference, required
     * @return {Promise}                    Promise; if fulfilled returns object, which contains newly created payment; if rejected returns APIerror.
     */
    create: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('currency')) {
            throw new Error('currency is required');
        }
        if (!params.hasOwnProperty('beneficiaryId')) {
            throw new Error('beneficiaryId is required');
        }
        if (!params.hasOwnProperty('amount')) {
            throw new Error('amount is required');
        }
        if (!params.hasOwnProperty('reason')) {
            throw new Error('reason is required');
        }
        if (!params.hasOwnProperty('reference')) {
            throw new Error('reference is required');
        }

        var url = '/v2/payments/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    /**
     * Gets details of a payment.
     * @param {Object} params    Parameters object
     * @param {String} params.id Id of the requested payment, required
     * @return {Promise}         Promise; if fulfilled returns object, which contains requested payment; if rejected returns APIerror.
     */
    get: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/payments/' + params.id;

        var qs = Object.assign({}, params);
        delete qs.id;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: qs
        });

        return promise;
    },

    /**
     * Updates an existing payment.
     * @param {Object} params    Object, which contains parameters of the updated payment
     * @param {String} params.id Id of the updated payment, required
     * @return {Promise}         Promise; if fulfilled returns object, which contains updated payment; if rejected returns APIerror.
     */
    update: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/payments/' + params.id;

        var qs = Object.assign({}, params);
        delete qs.id;

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: qs
        });

        return promise;
    },

    /**
     * Finds payments matching the search criteria for the active user.
     * @param {Object} params Object, which contains parameters of the sought payments
     * @return {Promise}      Promise; if fulfilled returns object, which contains array of found payments, as well as pagination information; if rejected returns APIerror.
     */
    find: function (params) {
        var url = '/v2/payments/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    /**
     * Deletes an existing payment.
     * @param {Object} params    Parameters object
     * @param {String} params.id Id of the deleted payment, required
     * @return {Promise}         Promise; if fulfilled returns object, which contains deleted payment; if rejected returns APIerror.
     */
    delete: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/payments/' + params.id + '/delete';

        var qs = Object.assign({}, params);
        delete qs.id;

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: qs
        });

        return promise;
    },

    /**
     * Returns MT103 message for payment.
     * @param {Object} params    Parameters object
     * @param {String} params.id Id of the payment, required
     * @return {Promise}         Promise; if fulfilled returns object, which contains deleted payment; if rejected returns APIerror.
     */
    retrieveSubmission: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/payments/' + params.id + '/submission';

        var qs = Object.assign({}, params);
        delete qs.id;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: qs
        });

        return promise;
    },

    /**
     * Creates payment authorisations.
     * @param {Object} params               Object, which contains parameters of the new payment
     * @param {String} params.paymentIds   Payment Ids, required and array of payment_id(s)
     * @return {Promise}                    Promise; if fulfilled returns object, which contains newly authorised payment(s); if rejected returns APIerror.
     */
    authorise: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('paymentIds')) {
            throw new Error('paymentIds is required');
        }

        var url = '/v2/payments/authorise';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    /**
     * Gets confirmation Id for a payment.
     * @param {Object} params    Parameters object
     * @param {String} params.id Id of the requested payment, required
     * @return {Promise}         Promise; if fulfilled returns object, which contains requested payment; if rejected returns APIerror.
     */
    getConfirmation: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/payments/' + params.id + '/confirmation' ;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    /**
     * Gets payment delivery date.
     * @param {Object} params    Parameters object
     * @param {String} params.paymentDate   Payment release date in ISO 8601 format, eg. "2017-12-31", required
     * @param {String} params.paymentType   One of two typess: "priority", made using the SWIFT network; or "regular", made using the local bank network
     * @param {String} params.currency      3-letter ISO code of the payment's currency, required
     * @param {String} params.bankCountry   2-letter ISO code of the country where the payment is sent, required
     * @return {Promise}                    Promise; if fulfilled returns object, which contains requested payment; if rejected returns APIerror.
     */
    getPaymentDeliveryDate: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('paymentDate')) {
            throw new Error('paymentDate is required');
        }
        if (!params.hasOwnProperty('paymentType')) {
            throw new Error('paymentType is required');
        }
        if (!params.hasOwnProperty('currency')) {
            throw new Error('currency is required');
        }
        if (!params.hasOwnProperty('bankCountry')) {
            throw new Error('bankCountry is required');
        }

        var url = '/v2/payments/payment_delivery_date' ;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    /**
     * Gets quote for a payment fee.
     * @param {Object} params    Parameters object
     * @param {String} params.paymentType   One of two typess: "priority", made using the SWIFT network; or "regular", made using the local bank network
     * @param {String} params.paymentCurrency      3-letter ISO code of the payment's currency, required
     * @param {String} params.paymentDestinationCountry   2-letter ISO code of the country where the payment is sent, required
     * @return {Promise}                    Promise; if fulfilled returns object, which contains requested payment; if rejected returns APIerror.
     */
    getQuotePaymentFee: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('paymentType')) {
            throw new Error('paymentType is required');
        }
        if (!params.hasOwnProperty('paymentCurrency')) {
            throw new Error('paymentCurrency is required');
        }
        if (!params.hasOwnProperty('paymentDestinationCountry')) {
            throw new Error('paymentDestinationCountry is required');
        }

        var url = '/v2/payments/quote_payment_fee' ;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    getPaymentFees: function (params) {
        params = params || {};

        const url = '/v2/payments/payment_fees';

        return client.request({
            url: url,
            method: 'GET',
            qs: params
        });
    },

    unassignPaymentFee: function (params) {
        params = params || {};

        if (!params.hasOwnProperty("accountId")) {
            throw new Error("accountId is required");
        }

        const url = "/v2/payments/unassign_payment_fee";

        return client.request({
            url: url,
            method: 'POST',
            qs: params
        });
    },

    assignPaymentFee: function (params) {
        params = params || {};

        if (!params.hasOwnProperty("paymentFeeId")) {
            throw new Error("paymentFeeId is required");
        }

        if (!params.hasOwnProperty("accountId")) {
            throw new Error("accountId is required");
        }

        const url = "/v2/payments/assign_payment_fee";

        return client.request({
            url: url,
            method: 'POST',
            qs: params
        });
    },

    assignedPaymentFee: function (params) {
        params = params || {};

        if (!params.hasOwnProperty("accountId")) {
            throw new Error("accountId is required");
        }

        const url = "/v2/payments/assigned_payment_fee";

        return client.request({
            url: url,
            method: 'GET',
            qs: params
        });
    }
};
