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
    create: function(currency, beneficiaryId, amount, reason, reference, optional) {
      if(typeof currency === 'undefined') {
        throw new Error('currency is required');
      }
      if(typeof beneficiaryId === 'undefined') {
        throw new Error('beneficiaryId is required');
      }
      if(typeof amount === 'undefined') {
        throw new Error('amount is required');
      }
      if(typeof reason === 'undefined') {
        throw new Error('reason is required');
      }
      if(typeof reference === 'undefined') {
        throw new Error('reference is required');
      }
      
      var url = '/v2/payments/create';
      
      var qs = {
        currency: currency,
        beneficiary_id: beneficiaryId,
        amount: amount,
        reason: reason,
        reference: reference
      };
      if(optional) {
        qs.payment_date = optional.paymentDate;
        qs.payment_type = optional.paymentType;
        qs.conversion_id = optional.conversionId;
        qs.payer_entity_type = optional.payerEntityType;
        qs.payer_company_name = optional.payerCompanyName;
        qs.payer_first_name = optional.payerFirstName;
        qs.payer_last_name = optional.payerLastName;
        qs.payer_city = optional.payerCity;
        qs.payer_address = optional.payerAddress;
        qs.payer_postcode = optional.payerPostcode;
        qs.payer_state_or_province = optional.payerStateOrProvince;
        qs.payer_country = optional.payerCountry;
        qs.payer_date_of_birth = optional.payerDateOfBirth;
        qs.payer_identification_type = optional.payerIdentificationType;
        qs.payer_identification_value = optional.payerIdentificationValue;
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
      
      var url = '/v2/payments/' + id;
      
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
    update: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/payments/' + id;
      
      var qs;
      if(optional) {
        qs = {
          currency: optional.currency,
          beneficiary_id: optional.beneficiaryId,
          amount: optional.amount,
          payment_date: optional.paymentDate,
          reason: optional.reason,
          payment_type: optional.paymentType,
          reference: optional.reference,
          conversion_id: optional.conversionId,
          payer_entity_type: optional.payerEntityType,
          payer_company_name: optional.payerCompanyName,
          payer_first_name: optional.payerFirstName,
          payer_last_name: optional.payerLastName,
          payer_city: optional.payerCity,
          payer_address: optional.payerAddress,
          payer_postcode: optional.payerPostcode,
          payer_state_or_province: optional.payerStateOrProvince,
          payer_country: optional.payerCountry,
          payer_date_of_birth: optional.payerDateOfBirth,
          payer_identification_type: optional.payerIdentificationType,
          payer_identification_value: optional.payerIdentificationValue,
          on_behalf_of: optional.onBehalfOf
        };
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
     * @param
     * @return     
     */
    find: function(optional) {
      var url = '/v2/payments/find';
      
      var qs;
      if(optional) {
        qs = {
          short_reference: optional.shortReference,
          currency: optional.currency,
          beneficiary_id: optional.beneficiaryId,
          amount: optional.amount,
          amount_from: optional.amountFrom,
          amount_to: optional.amountTo,
          status: optional.status,
          reason: optional.reason,
          payment_date_from: optional.paymentDateFrom,
          payment_date_to: optional.paymentDateTo,
          transferred_at_from: optional.transferredAtFrom,
          transferred_at_to: optional.transferredAtTo,
          created_at_from: optional.createdAtFrom,
          created_at_to: optional.createdAtTo,
          updated_at_from: optional.updatedAtFrom,
          updated_at_to: optional.updatedAtTo,
          conversion_id: optional.conversionId,
          page: optional.page,
          per_page: optional.perPage,
          order: optional.order,
          order_asc_desc: optional.orderAscDesc,        
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
     * @return     
     */
    delete: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/payments/' + id + '/delete';
      
      var qs;
      if(optional) {
        qs = {
          on_behalf_of: optional.onBehalfOf
        };
      }
      
      var promise = client.request({
        url: url,
        method: 'POST',
        qs: qs
      });
      
      return promise;
    }
  };
};