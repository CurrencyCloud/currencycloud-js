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
    get: function(id, optional) {
      if(typeof id === 'undefined') {
        throw new Error('id is required');
      }
      
      var url = '/v2/transactions/' + id;
      
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
     * @return     
     */
    find: function(optional) {
      var url = '/v2/transactions/find';
      
      var qs;
      if(optional) {
        qs = {
          currency: optional.currency,
          amount: optional.amount,
          amount_from: optional.amountFrom,
          amount_to: optional.amountTo,
          action: optional.action,
          related_entity_type: optional.relatedEntityType,
          related_entity_id: optional.relatedEntityId,
          related_entity_short_reference: optional.relatedEntityShortReference,
          status: optional.status,
          type: optional.type,
          reason: optional.reason,        
          settles_at_from: optional.settlesAtFrom,
          settles_at_to: optional.settlesAtTo,
          created_at_from: optional.createdAtFrom,
          created_at_to: optional.createdAtTo,
          updated_at_from: optional.updatedAtFrom,
          updated_at_to: optional.updatedAtTo,
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
    }
  };
};