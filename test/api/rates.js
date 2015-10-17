'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').rates;

describe('rates', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.rates.get({
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.rates.get({
          buyCurrency: 'present',
          fixedSide: 'present',
          amount: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.rates.get({
          buyCurrency: 'present',
          sellCurrency: 'present',
          amount: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.rates.get({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present'
        });
      }).to.throw();
    });
    
    it('successfully gets a rate', function(done) {
      currencyCloud.rates.get(mock.conversion1)
      .then(function(gotten) {
        expect(mock.schema.validate(gotten)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('find', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.rates.find(/*no params*/);
      }).to.throw();
    });
  });
});