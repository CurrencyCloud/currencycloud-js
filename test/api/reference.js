'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('reference', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('getConversionDates', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.reference.getConversionDates(/*no params*/);
      }).to.throw();
    });
  });
  
  describe('getPaymentDates', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.reference.getPaymentDates(/*no params*/);
      }).to.throw();
    });
  });
});