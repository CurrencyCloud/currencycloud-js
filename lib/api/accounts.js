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
    create: function(accountName, legalEntityType, optional) {
      if(typeof accountName === 'undefined') {
        throw new Error('accountName is required');
      }
      if(typeof legalEntityType === 'undefined') {
        throw new Error('legalEntityType is required');
      }
      
      var url = '/v2/accounts/create';
      
      var qs = {
        account_name: accountName,
        legal_entity_type: legalEntityType
      };
      if(optional) {
        qs.your_reference = optional.yourReference;
        qs.status = optional.status;
        qs.street = optional.street;
        qs.city = optional.city;
        qs.state_or_province = optional.stateOrProvince;
        qs.postal_code = optional.postalCode;
        qs.country = optional.country;
        qs.spread_table = optional.spreadTable;
        qs.identification_type = optional.identificationType;
        qs.identification_value = optional.identificationValue;
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
      
      var url = '/v2/accounts/' + id;
      
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
      
      var url = '/v2/accounts/' + id;
      
      var qs;
      if(optional) {
        qs = {
          account_name: optional.accountName,
          legal_entity_type: optional.legalEntityType,
          your_reference: optional.yourReference,
          status: optional.status,
          street: optional.street,
          city: optional.city,
          state_or_province: optional.stateOrProvince,
          postal_code: optional.postalCode,
          country: optional.country,
          spread_table: optional.spreadTable,
          identification_type: optional.identificationType,
          identification_value: optional.identificationValue
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
     * @return     
     */
    find: function(optional) {
      var url = '/v2/accounts/find';
      
      var qs;
      if(optional) {
        qs = {
          account_name: optional.accountName,
          brand: optional.brand,
          your_reference: optional.yourReference,
          status: optional.status,
          street: optional.street,
          city: optional.city,
          state_or_province: optional.stateOrProvince,
          postal_code: optional.postalCode,
          country: optional.country,
          spread_table: optional.spreadTable,
          page: optional.page,
          per_page: optional.per_page,
          order: optional.order,
          order_asc_desc: optional.orderAscDesc
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
    getCurrent: function() {
      var url = '/v2/accounts/current';
      
      var promise = client.request({
        url: url,
        method: 'GET'
      });
      
      return promise;
    }
  };
};