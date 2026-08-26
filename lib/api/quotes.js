/**
 * @module quotes
 */

'use strict';

module.exports = function (client) {

return {
    /**
     * Creates a new held rate quote.
     * @param {Object} params                        Object, which contains parameters of the quote
     * @param {String} params.buyCurrency            Currency to buy, required
     * @param {String} params.sellCurrency           Currency to sell, required
     * @param {String} params.fixedSide              Fixed conversion side: buy or sell, required
     * @param {Number} params.amount                 Amount to convert, required
     * @param {String} params.holdPeriod             Length of time for which the quote should remain valid (e.g., 30s, 3m), required
     * @param {String} [params.conversionDate]       Earliest delivery date in UTC time zone, optional
     * @param {String} [params.conversionDatePreference] Conversion date preference, optional
     * @param {String} [params.onBehalfOf]           Contact UUID for sub-account, optional
     * @return {Promise}                             Promise; if fulfilled returns object, which contains created quote; if rejected returns APIerror.
     */
    create: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('buyCurrency')) {
            throw new Error('buyCurrency is required');
        }
        if (!params.hasOwnProperty('sellCurrency')) {
            throw new Error('sellCurrency is required');
        }
        if (!params.hasOwnProperty('fixedSide')) {
            throw new Error('fixedSide is required');
        }
        if (!params.hasOwnProperty('amount')) {
            throw new Error('amount is required');
        }
        if (!params.hasOwnProperty('holdPeriod')) {
            throw new Error('holdPeriod is required');
        }

        var url = '/v2/quotes/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    }
};
};
