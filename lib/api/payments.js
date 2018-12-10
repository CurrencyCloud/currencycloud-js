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
     * @param {String} params.payment_ids   Payment ids, required and array of payment_id(s)
     * @return {Promise}                    Promise; if fulfilled returns object, which contains newly authorised payment(s); if rejected returns APIerror.
     */
    authorise: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('payment_ids')) {
            throw new Error('payment_ids is required');
        }

        var url = '/v2/payments/authorise';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

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
    }
};
