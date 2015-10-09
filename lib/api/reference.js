'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @param
     * @return     
     */
    getBeneficiaryRequiredDetails: function(optional) {
      var url = '/v2/reference/beneficiary_required_details';
      
      var qs;
      if(optional) {
        qs = {
          currency: optional.currency,
          bank_account_country: optional.bankAccountCountry,
          beneficiary_country: optional.beneficiaryCountry       
        };
      }
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: qs
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
    getConversionDates: function(conversionPair, optional) {
      if(typeof conversionPair === 'undefined') {
        throw new Error('conversionPair is required');
      }
      
      var url = '/v2/reference/conversion_dates';
      
      var qs = {
        conversion_pair: conversionPair
      };
      if(optional) {
        qs.start_date = optional.startDate;
      }
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: qs
      });
      
      return promise;
    },

    /**
     *
     * @param
     * @param
     * @return     
     */
    getPaymentDates: function(currency, optional) {
      if(typeof currency === 'undefined') {
        throw new Error('currency is required');
      }
      
      var url = '/v2/reference/payment_dates';
      
      var qs = {
        currency: currency
      };
      if(optional) {
        qs.start_date = optional.startDate;
      }
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: qs
      });
      
      return promise;
    },

    /**
     *
     * @param
     * @return     
     */
    getSettlementAccounts: function(optional) {
      var url = '/v2/reference/settlement_accounts';
      
      var qs;
      if(optional) {
        qs = {
          currency: optional.currency
        };
      }
      
      var promise = client.request({
        url: url,
        method: 'GET',
        qs: qs
      });
      
      return promise;
    }
  };
};