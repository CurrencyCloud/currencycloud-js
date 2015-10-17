'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').balances;

describe('balances', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.balances.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a balance', function(done) {
      currencyCloud.balances.get({
        currency: 'GBP'
      })
      .then(function(gotten) {
        expect(mock.schema.validate(gotten)).is.true;
        done();
      })
      .catch(done);
    });
  });
});