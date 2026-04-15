/**
 * @module collections
 */

'use strict';

var client = require('../client');

module.exports = {
    /**
     * Accept or reject an inbound transaction before funds are credited to the beneficiary's account.
     * @param {Object} params Object, which contains parameters
     * @param {String} params.transactionId The related_entity_id from the Cash Manager notification, required
     * @param {Boolean} params.accepted Should the transaction be accepted - true or false, required
     * @param {String} params.reason Reason for acceptance or rejection, required
     * @return {Promise} Promise; if fulfilled returns object with transaction details; if rejected returns APIerror.
     */
    completeCollectionsScreening: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('transactionId')) {
            throw new Error('transactionId is required');
        }
        if (!params.hasOwnProperty('accepted')) {
            throw new Error('accepted is required');
        }
        if (!params.hasOwnProperty('reason')) {
            throw new Error('reason is required');
        }

        var url = '/v2/collections_screening/' + params.transactionId + '/complete';

        var qs = Object.assign({}, params);
        delete qs.transactionId;

        var promise = client.request({
            url: url,
            method: 'PUT',
            qs: qs
        });

        return promise;
    }
};
