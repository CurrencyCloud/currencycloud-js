'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').payers;

var createPrerequisites = function() {
  var payment = mock.payments.payment1;
  
  var promise = currencyCloud.conversions.create(mock.conversions.conversion1)
  .then(function(conversion) {
    payment.conversionId = conversion.id;

    return currencyCloud.beneficiaries.create(mock.beneficiaries.beneficiary1)
    .then(function(beneficiary) {
      payment.beneficiaryId = beneficiary.id;
      
      return currencyCloud.payments.create(payment);
    });
  });

  return promise;
};

describe('payers', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.payers.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a payer', function(done) {
      createPrerequisites()
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