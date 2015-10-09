'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @param
     * @param
     * @return     
     */
    create: function(buyCurrency, sellCurrency, fixedSide, amount, reason, termAgreement, optional) {
      if(typeof buyCurrency === 'undefined') {
        throw new Error('buyCurrency is required');
      }
      if(typeof sellCurrency === 'undefined') {
        throw new Error('sellCurrency is required');
      }
      if(typeof fixedSide === 'undefined') {
        throw new Error('fixedSide is required');
      }
      if(typeof amount === 'undefined') {
        throw new Error('amount is required');
      }
      if(typeof reason === 'undefined') {
        throw new Error('reason is required');
      }
      if(typeof termAgreement === 'undefined') {
        throw new Error('termAgreement is required');
      }
      
      var url = '/v2/conversions/create';
      
      var qs = {
        buy_currency: buyCurrency,
        sell_currency: sellCurrency,
        fixed_side: fixedSide,
        amount: amount,
        reason: reason,
        term_agreement: termAgreement
      };
      if(optional) {
        qs.conversion_date = optional.conversionDate;
        qs.client_buy_amount = optional.clientBuyAmount;
        qs.client_sell_amount = optional.clientSellAmount;
        qs.on_behalf_of = optional.onBehalfOf;
      }
      
      var promise = client.request({
        url: url,
        method: 'POST',
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
    get: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/conversions/' + id;
      
      var qs;
      if(optional) {
        qs = {
          on_behalf_of: optional.onBehalfOf
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
     * @param
     * @param
     * @param
     * @return     
     */
    find: function(optional) {
      var url = '/v2/conversions/find';
      
      var qs;
      if(optional) {
        qs = {
          short_reference: optional.shortReference,
          status: optional.status,
          partner_status: optional.partnerStatus,
          buy_currency: optional.buyCurrency,
          sell_currency: optional.sellCurrency,
          conversion_ids: optional.conversionIds,
          created_at_from: optional.createdAtFrom,
          created_at_to: optional.createdAtTo,
          updated_at_from: optional.updatedAtFrom,
          updated_at_to: optional.updatedAtTo,
          currency_pair: optional.currencyPair,
          partner_buy_amount_from: optional.partnerBuyAmountFrom,
          partner_buy_amount_to: optional.partnerBuyAmountTo,
          partner_sell_amount_from: optional.partnerSellAmountFrom,
          partner_sell_amount_to: optional.partnerSellAmountTo,
          buy_amount_from: optional.buyAmountFrom,
          buy_amount_to: optional.buyAmountTo,
          sell_amount_from: optional.sellAmountFrom,
          sell_amount_to: optional.sellAmountTo,
          on_behalf_of: optional.onBehalfOf
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