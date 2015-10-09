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
    create: function(optional) {
      var url = '/v2/settlements/create';
      
      var qs;
      if(optional) {
        qs = {
          type: optional.type,
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
    get: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/settlements/' + id;
      
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
    find: function(optional) {
      var url = '/v2/settlements/find';

      var qs;
      if(optional) {
        qs = {
          short_reference: optional.shortReference,
          status: optional.status,
          created_at_from: optional.createdAtFrom,
          created_at_to: optional.createdAtTo,
          updated_at_from: optional.updatedAtFrom,
          updated_at_to: optional.updatedAtTo,
          released_at_from: optional.releasedAtFrom,
          released_at_to: optional.releasedAtTo,
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
      
      var url = '/v2/settlements/' + id + '/delete';
      
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
    },
    
    /**
     *
     * @param
     * @param
     * @return     
     */
    addConversion: function(id, conversionId, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      if(typeof conversionId === 'undefined') {
        throw new Error('conversionId is required');
      }
      
      var url = '/v2/settlements/' + id + '/add_conversion';
      
      var qs = {
        conversion_id: optional.conversionId
      };
      if(optional) {
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
    removeConversion: function(id, conversionId, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      if(typeof conversionId === 'undefined') {
        throw new Error('conversionId is required');
      }
      
      var url = '/v2/settlements/' + id + '/remove_conversion';
      
      var qs = {
        conversion_id: optional.conversionId
      };
      if(optional) {
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
    release: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/settlements/' + id + '/release';
      
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
    },
    
    /**
     *
     * @param
     * @param
     * @return     
     */
    unrelease: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/settlements/' + id + '/unrelease';
      
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