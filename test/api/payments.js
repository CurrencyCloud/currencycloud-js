'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').payments;

var createPrerequisites = function() {
  var res = {};
  
  var promise = currencyCloud.conversions.create(mock.conversions.conversion1)
  .then(function(conversion) {
    res.conversionId = conversion.id;

    return currencyCloud.beneficiaries.create(mock.beneficiaries.beneficiary1)
    .then(function(beneficiary) {
      res.beneficiaryId = beneficiary.id;
                                 
      return res;
    });
  });

  return promise;
};

describe('payments', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.payments.create({
          beneficiaryId: 'present',
          amount: 'present',
          reason: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.payments.create({
          currency: 'present',
          amount: 'present',
          reason: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.payments.create({
          currency: 'present',
          beneficiaryId: 'present',
          reason: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.payments.create({
          currency: 'present',
          beneficiaryId: 'present',
          amount: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.payments.create({
          currency: 'present',
          beneficiaryId: 'present',
          amount: 'present',
          reason: 'present'
        });
      }).to.throw();
    });
    
    it('successfully creates a payment', function(done) {
      createPrerequisites()
      .then(function(res) {
        var payment = mock.payments.payment1;
        payment.conversionId = res.conversionId;
        payment.beneficiaryId = res.beneficiaryId;        
        
        return currencyCloud.payments.create(payment)
        .then(function(created) {
          expect(mock.payments.schema.validate(created)).is.true;
          done();
        });
      })
      .catch(done);      
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.payments.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a payment', function(done) {
      createPrerequisites()
      .then(function(res) {
        var payment = mock.payments.payment1;
        payment.conversionId = res.conversionId;
        payment.beneficiaryId = res.beneficiaryId;        
        
        return currencyCloud.payments.create(payment)
        .then(function(created) {
          return currencyCloud.payments.get({
            id: created.id
          })
          .then(function(gotten) {
            expect(gotten).to.eql(created);
            done();
          });
        });
      })
      .catch(done);      
    });
  });
  
  describe('update', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.payments.update(/*no params*/);
      }).to.throw();
    });
  });

  describe('delete', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.payments.delete(/*no params*/);
      }).to.throw();
    });
  });
});