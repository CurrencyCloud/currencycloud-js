'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;

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
  });
  
  describe('find', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.rates.find(/*no params*/);
      }).to.throw();
    });
  });
});