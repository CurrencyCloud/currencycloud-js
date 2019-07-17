'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('reference');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('reference', function () {
  before(function (done) {
    recorder.read();
    setup.login()
      .then(function () {
        done();
      });
  });

  after(function (done) {
    teardown.logout()
      .then(function () {
        recorder.write(done);
      });
  });

  describe('getBeneficiaryRequiredDetails', function () {
    it('successfully gets beneficiary required details', function (done) {
      currencyCloud.reference.getBeneficiaryRequiredDetails({
        currency: 'GBP',
        bankAccountCountry: 'GB',
        beneficiaryCountry: 'GB'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          done();
        })
        .catch(done);
    });
  });

  describe('getConversionDates', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.reference.getConversionDates(/*no params*/);
      }).to.throw();
    });

    it('successfully gets conversion dates', function (done) {
      currencyCloud.reference.getConversionDates({
        conversionPair: 'USDGBP'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          done();
        })
        .catch(done);
    });
  });

  describe('getAvailableCurrencies', function () {
    it('successfully gets available currencies', function (done) {
      currencyCloud.reference.getAvailableCurrencies()
        .then(function (res) {
          expect(res).is.not.empty;
          done();
        })
        .catch(done);
    });
  });

  describe('getPaymentDates', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.reference.getPaymentDates(/*no params*/);
      }).to.throw();
    });

    it('successfully gets payment dates', function (done) {
      currencyCloud.reference.getPaymentDates({
        currency: 'USD'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          done();
        })
        .catch(done);
    });
  });

  describe('getSettlementAccounts', function () {
    it('successfully gets settlement accounts', function (done) {
      currencyCloud.reference.getSettlementAccounts({
        currency: 'EUR'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          done();
        })
        .catch(done);
    });
  });

  describe('getPayerRequiredDetails', function () {
    it('successfully gets payer required details', function (done) {
      currencyCloud.reference.getPayerRequiredDetails({
        payerCountry: 'GB'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          expect(res).to.have.property('details').that.is.not.null;
          done();
        })
        .catch(done);
    });
  });

  describe('getPaymentPurposeCodes', function () {
    it('successfully gets payment purpose codes', function (done) {
      currencyCloud.reference.getPaymentPurposeCodes({
        currency: 'CNY'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          expect(res).to.have.property('purposeCodes').that.is.not.null;
          done();
        })
        .catch(done);
    });
  });

  describe('getBankDetails', function () {
    it('successfully getsbank details', function (done) {
      currencyCloud.reference.getBankDetails({
        identifierType: 'iban',
        identifierValue: 'GB19TCCL00997901654515'
      })
        .then(function (res) {
          expect(res).is.not.empty;
          expect(res).to.have.property('accountNumber').that.eql("GB19TCCL00997901654515");
          expect(res).to.have.property('bankAddress').that.eql("12 STEWARD STREET  THE STEWARD BUILDING FLOOR 0");
          expect(res).to.have.property('bankBranch').that.eql("");
          expect(res).to.have.property('bankCity').that.eql("LONDON");
          expect(res).to.have.property('bankCountry').that.eql("UNITED KINGDOM");
          expect(res).to.have.property('bankCountry_ISO').that.eql("GB");
          expect(res).to.have.property('bankName').that.eql("THE CURRENCY CLOUD LIMITED");
          expect(res).to.have.property('bankPostCode').that.eql("E1 6FQ");
          expect(res).to.have.property('bankState').that.eql("LONDON");
          expect(res).to.have.property('bicSwift').that.eql("TCCLGB22XXX");
          expect(res).to.have.property('currency').that.is.null;
          expect(res).to.have.property('identifierType').that.eql("iban");
          expect(res).to.have.property('identifierValue').that.eql("GB19TCCL00997901654515");
          done();
        })
          .catch(done);
    });
  });
});
