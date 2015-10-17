'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks');

describe('transactions', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.transactions.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a transaction', function(done) {
      currencyCloud.conversions.create(mock.conversions.conversion1)
      .then(function(created) {
        return currencyCloud.transactions.get({
          id: created.id
        })
        .then(function(gotten) {
          expect(mock.transactions.schema.validate(gotten)).is.true;
          done();
        });
      })        
      .catch(done);
    });
  });
});