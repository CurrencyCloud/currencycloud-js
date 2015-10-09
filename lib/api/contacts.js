'use strict';

var client = require('../client')();

module.exports = function () {
  return {
    /**
     * 
     * @return 
     */
    createResetToken: function(optional) {
      var url = '/v2/contacts/reset_token/create';
      
      var qs;
      if(optional) {
        qs = {
          login_id: optional.loginId
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
    create: function(accountId, firstName, lastName, emailAddress, phoneNumber, optional) {
      if(typeof accountId === 'undefined') {
        throw new Error('accountId is required');
      }
      if(typeof firstName === 'undefined') {
        throw new Error('firstName is required');
      }
      if(typeof lastName === 'undefined') {
        throw new Error('lastName is required');
      }
      if(typeof emailAddress === 'undefined') {
        throw new Error('emailAddress is required');
      }
      if(typeof phoneNumber === 'undefined') {
        throw new Error('phoneNumber is required');
      }
      
      var url = '/v2/contacts/create';
      
      var qs = {
        account_id: accountId,
        first_name: firstName,
        last_name: lastName,
        email_address: emailAddress,
        phone_number: phoneNumber
      };
      if(optional) {
        qs.your_reference = optional.yourReference;
        qs.mobile_phone_number = optional.mobilePhoneNumber;
        qs.login_id = optional.loginId;
        qs.status = optional.status;
        qs.locale = optional.locale;
        qs.timezone = optional.timezone;
        qs.date_of_birth = optional.dateOfBirth;
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
    get: function(id) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/contacts/' + id;
      
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
     * @param
     * @return     
     */
    update: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/contacts/' + id;
      
      var qs;
      if(optional) {
        qs = {
          first_name: optional.firstName,
          last_name: optional.lastName,
          email_address: optional.emailAddress,
          your_reference: optional.yourReference,
          phone_number: optional.phoneNumber,
          mobile_phone_number: optional.mobilePhoneNumber,
          login_id: optional.loginId,
          status: optional.status,
          locale: optional.locale,
          timezone: optional.timezone,
          date_of_birth: optional.dateOfBirth
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
      var url = '/v2/contacts/find';

      var qs;
      if(optional) {
        qs = {
          account_name: optional.accountName,
          account_id: optional.accountId,
          first_name: optional.firstName,
          last_name: optional.lastName,
          email_address: optional.emailAddress,
          your_reference: optional.yourReference,
          phone_number: optional.phoneNumber,
          login_id: optional.loginId,
          status: optional.status,
          locale: optional.locale,
          timezone: optional.timezone,
          page: optional.page,
          per_page: optional.perPage,
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
      var url = '/v2/contacts/current';
      
      var promise = client.request({
        url: url,
        method: 'GET'
      });
      
      return promise;
    }
  };
};