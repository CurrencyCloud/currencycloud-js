'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     *
     * @param
     * @param
     * @param
     * @param     
     * @return     
     */
    validate: function(bankCountry, currency, beneficiaryCountry, optional) {
      if(typeof bankCountry === 'undefined') {
        throw new Error('bankCountry is required');
      }
      if(typeof currency === 'undefined') {
        throw new Error('currency is required');
      }
      if(typeof beneficiaryCountry === 'undefined') {
        throw new Error('beneficiaryCountry is required');
      }
      
      var url = '/v2/beneficiaries/validate';
      
      var qs = {
        bank_country: bankCountry,
        currency: currency,
        beneficiary_country: beneficiaryCountry
      };
      if(optional) {
        qs.account_number = optional.accountNumber;
        qs.routing_code_type_1 = optional.routingCodeType1;
        qs.routing_code_value_1 = optional.routingCodeValue1;
        qs.routing_code_type_2 = optional.routingCodeType2;
        qs.routing_code_value_2 = optional.routingCodeValue2;
        qs.bic_swift = optional.bicSwift;
        qs.iban = optional.iban;
        qs.bank_address = optional.bankAddress;
        qs.bank_name = optional.bankName;
        qs.bank_account_type = optional.bankAccountType;
        qs.beneficiary_entity_type = optional.beneficiaryEntityType;
        qs.beneficiary_company_name = optional.beneficiaryCompanyName;
        qs.beneficiary_first_name = optional.beneficiaryFirstName;
        qs.beneficiary_last_name = optional.beneficiaryLastName;
        qs.beneficiary_city = optional.beneficiaryCity;
        qs.beneficiary_postcode = optional.beneficiaryPostcode;
        qs.beneficiary_state_or_province = optional.beneficiaryStateOrProvince;
        qs.beneficiary_date_of_birth = optional.beneficiaryDateOfBirth;
        qs.beneficiary_identification_type = optional.beneficiaryIdentificationType;
        qs.beneficiary_identification_value = optional.beneficiaryIdentificationValue;
        qs.payment_types = optional.paymentTypes;
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
     * @param
     * @param     
     * @return     
     */
    create: function(bankAccountHolderName, bankCountry, currency, name, optional) {
      if(typeof bankAccountHolderName === 'undefined') {
        throw new Error('bankAccountHolderName is required');
      }
      if(typeof bankCountry === 'undefined') {
        throw new Error('bankCountry is required');
      }
      if(typeof currency === 'undefined') {
        throw new Error('currency is required');
      }
      if(typeof name === 'undefined') {
        throw new Error('name is required');
      }
      
      var url = '/v2/beneficiaries/create';
      
      var qs = {
        bank_account_holder_name: bankAccountHolderName,
        bank_country: bankCountry,
        currency: currency,
        name: name
      };
      if(optional) {
        qs.email = optional.email;
        qs.beneficiary_address = optional.beneficiaryAddress;
        qs.beneficiary_country = optional.beneficiaryCountry;
        qs.account_number = optional.accountNumber;
        qs.routing_code_type_1 = optional.routingCodeType1;
        qs.routing_code_value_1 = optional.routingCodeValue1;
        qs.routing_code_type_2 = optional.routingCodeType2;
        qs.routing_code_value_2 = optional.routingCodeValue2;
        qs.bic_swift = optional.bicSwift;
        qs.iban = optional.iban;
        qs.default_beneficiary = optional.defaultBeneficiary;
        qs.bank_address = optional.bankAddress;
        qs.bank_name = optional.bankName;
        qs.bank_account_type = optional.bankAccountType;
        qs.beneficiary_entity_type = optional.beneficiaryEntityType;
        qs.beneficiary_company_name = optional.beneficiaryCompanyName;
        qs.beneficiary_first_name = optional.beneficiaryFirstName;
        qs.beneficiary_last_name = optional.beneficiaryLastName;
        qs.beneficiary_city = optional.beneficiaryCity;
        qs.beneficiary_postcode = optional.beneficiaryPostcode;
        qs.beneficiary_state_or_province = optional.beneficiaryStateOrProvince;
        qs.beneficiary_date_of_birth = optional.beneficiaryDateOfBirth;
        qs.beneficiary_identification_type = optional.beneficiaryIdentificationType;
        qs.beneficiary_identification_value = optional.beneficiaryIdentificationValue;
        qs.payment_types = optional.paymentTypes;
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
      
      var url = '/v2/beneficiaries/' + id;
      
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
     * @return     
     */
    update: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/beneficiaries/' + id;
      
      var qs;
      if(optional) {
        qs = {
          bank_account_holder_name: optional.bankAccountHolderName,
          email: optional.email,
          beneficiary_address: optional.beneficiaryAddress,
          beneficiary_country: optional.beneficiaryCountry,
          bank_country: optional.bankCountry,
          currency: optional.currency,
          account_number: optional.accountNumber,
          routing_code_type_1: optional.routingCodeType1,
          routing_code_value_1: optional.routingCodeValue1,
          routing_code_type_2: optional.routingCodeType2,
          routing_code_value_2: optional.routingCodeValue2,
          bic_swift: optional.bicSwift,
          iban: optional.iban,
          default_beneficiary: optional.defaultBeneficiary,
          bank_address: optional.bankAddress,
          bank_name: optional.bankName,
          bank_account_type: optional.bankAccountType,
          name: optional.name,
          beneficiary_entity_type: optional.beneficiaryEntityType,
          beneficiary_company_name: optional.beneficiaryCompanyName,
          beneficiary_first_name: optional.beneficiaryFirstName,
          beneficiary_last_name: optional.beneficiaryLastName,
          beneficiary_city: optional.beneficiaryCity,
          beneficiary_postcode: optional.beneficiaryPostcode,
          beneficiary_state_or_province: optional.beneficiaryStateOrProvince,
          beneficiary_date_of_birth: optional.beneficiaryDateOfBirth,
          beneficiary_identification_type: optional.beneficiaryIdentificationType,
          beneficiary_identification_value: optional.beneficiaryIdentificationValue,
          payment_types: optional.paymentTypes,
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
     * @return     
     */
    find: function(optional) {
      var url = '/v2/beneficiaries/find';
      
      var qs;
      if(optional) {
        qs = {
          bank_account_holder_name: optional.bankAccountHolderName,
          beneficiary_country: optional.beneficiaryCountry,
          bank_country: optional.bankCountry,
          currency: optional.currency,
          account_number: optional.accountNumber,
          routing_code_type: optional.routingCodeType,
          routing_code_value: optional.routingCodeValue,
          bic_swift: optional.bicSwift,
          iban: optional.iban,
          default_beneficiary: optional.defaultBeneficiary,
          bank_name: optional.bankName,
          bank_account_type: optional.bankAccountType,
          name: optional.name,
          beneficiary_entity_type: optional.beneficiaryEntityType,
          beneficiary_company_name: optional.beneficiaryCompanyName,
          beneficiary_first_name: optional.beneficiaryFirstName,
          beneficiary_last_name: optional.beneficiaryLastName,
          beneficiary_city: optional.beneficiaryCity,
          beneficiary_postcode: optional.beneficiaryPostcode,
          beneficiary_state_or_province: optional.beneficiaryStateOrProvince,
          beneficiary_date_of_birth: optional.beneficiaryDateOfBirth,
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
      
      var url = '/v2/beneficiaries/' + id + '/delete';
      
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