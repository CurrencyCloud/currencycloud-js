'use strict';

var client = require('../client');

module.exports = {
  /**
   *
   * @param     
   * @return     
   */
  validate: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('bankCountry')) {
      throw new Error('bankCountry is required');
    }
    if(!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }
    if(!params.hasOwnProperty('beneficiaryCountry')) {
      throw new Error('beneficiaryCountry is required');
    }

    var url = '/v2/beneficiaries/validate';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   *
   * @param     
   * @return     
   */
  create: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('bankAccountHolderName')) {
      throw new Error('bankAccountHolderName is required');
    }
    if(!params.hasOwnProperty('bankCountry')) {
      throw new Error('bankCountry is required');
    }
    if(!params.hasOwnProperty('currency')) {
      throw new Error('currency is required');
    }
    if(!params.hasOwnProperty('name')) {
      throw new Error('name is required');
    }

    var url = '/v2/beneficiaries/create';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   *
   * @param
   * @return     
   */
  get: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/beneficiaries/' + params.id;
    
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
  update: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }
    
    var url = '/v2/beneficiaries/' + params.id;
    
    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  },

  /**
   *
   * @param
   * @return     
   */
  find: function(params) {
    var url = '/v2/beneficiaries/find';

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
  delete: function(params) {
    params = params || {};
    if(!params.hasOwnProperty('id')) {
      throw new Error('id is required');
    }

    var url = '/v2/beneficiaries/' + params.id + '/delete';

    var promise = client.request({
      url: url,
      method: 'POST',
      qs: params
    });

    return promise;
  }
};