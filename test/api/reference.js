'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('reference');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('reference', function() {
  before(function(done) {
    recorder.read();    
    setup.login()
    .then(function() {
      done();
    });
  });
  after(function(done) {
    teardown.logout()
    .then(function() {
      recorder.write(done);
    });
  });
  
  describe('getBeneficiaryRequiredDetails', function() {
    it('successfully gets beneficiary required details', function(done) {
      currencyCloud.reference.getBeneficiaryRequiredDetails({
        currency: 'GBP',
        bankAccountCountry: 'GB',
        beneficiaryCountry: 'GB'
      })
      .then(function(res) {
        expect(res).is.not.empty;
        done();
      })
      .catch(done);      
    });
  });

  describe('getConversionDates', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.reference.getConversionDates(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets conversion dates', function(done) {
      currencyCloud.reference.getConversionDates({
        conversionPair: 'USDGBP'
      })
      .then(function(res) {
        expect(res).is.not.empty;
        done();
      })
      .catch(done);      
    });
  });
  
  describe('getAvailableCurrencies', function() {
    it('successfully gets available currencies', function(done) {
      currencyCloud.reference.getAvailableCurrencies()
      .then(function(res) {
        expect(res).is.not.empty;
        done();
      })
      .catch(done);      
    });
  });
  
  describe('getPaymentDates', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.reference.getPaymentDates(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets payment dates', function(done) {
      currencyCloud.reference.getPaymentDates({
        currency: 'USD'
      })
      .then(function(res) {
        expect(res).is.not.empty;        
        done();
      })
      .catch(done);      
    });
  });
  
  describe('getSettlementAccounts', function() {
    it('successfully gets settlement accounts', function(done) {
      currencyCloud.reference.getSettlementAccounts({
        currency: 'EUR'
      })
      .then(function(res) {
        expect(res).is.not.empty;        
        done();
      })
      .catch(done);      
    });
  });
});