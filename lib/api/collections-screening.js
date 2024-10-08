/**
 * @module collections-screening
 */

'use strict';

var client = require('../client');

module.exports = {
    /**
     * Complete screening for the given transaction_id with Accept/Reject result
     * @param {Object} params Object, which contains parameters of the screening to be accepted or rejected. transaction_id, accepted and reason is required.
     * @return {Promise}      Promise; if fulfilled returns object, if rejected returns APIerror.
     */
    complete: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }
        if (!params.hasOwnProperty('accepted')) {
            throw new Error('accepted is required');
        }
        if (!params.hasOwnProperty('reason')) {
            throw new Error('reason is required');
        }

        var url = '/v2/collections_screening/' + params.id + '/complete';

        var qs = Object.assign({}, params);
        delete qs.id;

        var promise = client.request({
            url: url,
            method: 'PUT',
            qs: qs
        });

        return promise;
    }
};