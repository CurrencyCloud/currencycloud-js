'use strict';

module.exports = function () {
  return {
    /**
     * Merges two objects, overwrites obj1 properties with those of obj2.
     *
     * @param  {Object} obj1 
     * @param  {Object} obj2 
     * @return {Object} new object which is result of merge    
     */
    merge: function (obj1, obj2) {
      var res = {};
      
      for(var key in obj1) {
        if(obj1.hasOwnProperty(key)) {
          res[key] = obj1[key];            
        }
      }
      
      for(var key in obj2) {
        if(obj2.hasOwnProperty(key)) {
          res[key] = obj2[key];            
        }
      }
      
      return res;
    }
  };
};
