'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @return     
     */
    getBeneficiaryRequiredDetails: function(params) {
      var url = '/v2/reference/beneficiary_required_details';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    },

    /**
     *
     * @return     
     */
    getAvailableCurrencies: function() {
      var url = '/v2/reference/currencies';
      
      var promise = client.request({
        url: url,
        method: 'GET'
      });
      
      return promise;
    },

    /**
     *
     * @param
     * @param
     * @return     
     */
    getConversionDates: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('conversionPair')) {
        throw new Error('conversionPair is required');
      }
      
      var url = '/v2/reference/conversion_dates';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    },

    /**
     *
     * @param
     * @return     
     */
    getPaymentDates: function(params) {
      params = params || {};
      if(!params.hasOwnProperty('currency')) {
        throw new Error('currency is required');
      }
      
      var url = '/v2/reference/payment_dates';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    },

    /**
     *
     * @param
     * @return     
     */
    getSettlementAccounts: function(params) {
      var url = '/v2/reference/settlement_accounts';
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: params
      });
      
      return promise;
    }
  };
};