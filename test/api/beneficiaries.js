'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').beneficiaries;

describe('beneficiaries', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.beneficiaries.create({
          bankCountry: 'present',
          currency: 'present',
          name: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.beneficiaries.create({
          bankAccountHolderName: 'present',
          currency: 'present',
          name: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.beneficiaries.create({
          bankAccountHolderName: 'present',
          bankCountry: 'present',
          name: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.beneficiaries.create({
          bankAccountHolderName: 'present',
          bankCountry: 'present',
          currency: 'present'
        });
      }).to.throw();
    });

    it('successfully creates a beneficiary', function(done) {
      currencyCloud.beneficiaries.create(mock.beneficiary1)
      .then(function(created) {
        expect(mock.schema.validate(created)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.beneficiaries.get(/*no params*/);
      }).to.throw();
    });

    it('successfully gets a beneficiary', function(done) {
      currencyCloud.beneficiaries.create(mock.beneficiary1)
      .then(function(created) {
        return currencyCloud.beneficiaries.get({
          id: created.id
        })
        .then(function(gotten) {
          expect(gotten).to.eql(created);
          done();
        });
      })
      .catch(done);      
    });
  });
});