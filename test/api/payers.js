'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('payers');
var setup = prepost.setup;
var teardown = prepost.teardown;

var getPrerequisites = function() {
  var payment = new mock.payments.payment1();
  
  var promise = currencyCloud.conversions.create(new mock.conversions.conversion1())
  .then(function(conversion) {
    payment.conversionId = conversion.id;

    return currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
    .then(function(beneficiary) {
      payment.beneficiaryId = beneficiary.id;
      
      return currencyCloud.payments.create(payment);
    });
  });

  return promise;
};

describe('payers', function() {
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
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.payers.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a payer', function(done) {
      getPrerequisites()
      .then(function(res) {
        return currencyCloud.payers.get({
          id: res.payerId
        })
        .then(function(gotten) {
          expect(mock.payers.schema.validate(gotten)).is.true;
          done();
        });
      })
      .catch(done);      
    });
  });
});