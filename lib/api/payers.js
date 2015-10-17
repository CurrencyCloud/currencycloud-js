'use strict';

var client = require('../client');

module.exports = {
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

    var url = '/v2/payers/' + params.id;

    var promise = client.request({
      url: url,
      method: 'GET',
      qs: params
    });

    return promise;
  }
};