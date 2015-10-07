/* global expect: true */

'use strict';

var utils = require('../lib/utils')();
var expect = require('chai').expect;

describe('utils.merge', function(){
  var obj1 = {
    prop1: 'value1',
    prop2: 2,
    prop3: true,
    prop4: {
      prop41: 'value41'
    }
  };
  var obj2 = {
    prop5: 'value5',
    prop6: {
      prop61: 6.1
    }
  };
  var obj3 = {
    prop1: 'value31',
    prop4: {},
    prop7: 7
  };
  
  it('merges two objects with distinct keys', function() {
    var res = {
      prop1: 'value1',
      prop2: 2,
      prop3: true,
      prop4: {
        prop41: 'value41'
      },
      prop5: 'value5',
      prop6: {
        prop61: 6.1
      }
    };
    expect(utils.merge(obj1, obj2)).to.eql(res);
  });
  
  it('merges with undefined or null', function() {
    expect(utils.merge(obj1, undefined)).to.eql(obj1); 
    expect(utils.merge(obj1, null)).to.eql(obj1); 
  });
  
  it('overwrites properties of the first object with properties of the second object if they have same names', function() {
    var res = {
      prop1: 'value31',
      prop2: 2,
      prop3: true,
      prop4: {},
      prop7: 7,
    };
    expect(utils.merge(obj1, obj3)).to.eql(res);    
  });
});