'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('beneficiaries');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('beneficiaries', function() {
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
  
  describe('validate', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.beneficiaries.validate({
          bankCountry: 'present',
          currency: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.beneficiaries.validate({
          currency: 'present',
          beneficiaryCountry: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.beneficiaries.validate({
          bankCountry: 'present',
          beneficiaryCountry: 'present'
        });
      }).to.throw();
    });

    it('successfully validates a beneficiary', function(done) {
      currencyCloud.beneficiaries.validate({
        bankCountry: 'GB',
        currency: 'GBP',
        beneficiaryCountry: 'GB',
        accountNumber: '13071472',
        routingCodeType1: 'sort_code',
        routingCodeValue1: '200605'
      })
      .then(function(res) {
        expect(res).is.not.empty;
        done();
      })
      .catch(done);
    });
  });
  
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
      currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
      .then(function(created) {
        expect(mock.beneficiaries.schema.validate(created)).is.true;
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
      currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
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
  
  describe('update', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.beneficiaries.update(/*no params*/);
      }).to.throw();
    });

    it('successfully updates a beneficiary', function(done) {
      currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
      .then(function(created) {
        var beneficiary = new mock.beneficiaries.beneficiary2();
        beneficiary.id = created.id;
        
        return currencyCloud.beneficiaries.update(beneficiary)
        .then(function(updated) {
          return currencyCloud.beneficiaries.get({
            id: created.id
          })
          .then(function(gotten) {
            expect(gotten).to.eql(updated);
            done();
          });
        });
      })
      .catch(done);      
    });
  });
  
  describe('find', function() {
    it('successfully finds a beneficiary', function(done) {
      currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
      .then(function(created) {
        return currencyCloud.beneficiaries.find({
          name: created.name,
          order: 'created_at',
          orderAscDesc: 'desc',
          perPage: 5
        })
        .then(function(found) {
          expect(found).to.have.property('beneficiaries').that.deep.includes(created);
          expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
          done();
        });
      })
      .catch(done);
    });
  });
  
  describe('delete', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.beneficiaries.delete(/*no params*/);
      }).to.throw();
    });

    it('successfully deletes a beneficiary', function(done) {
      currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
      .then(function(created) {
        return currencyCloud.beneficiaries.delete({
          id: created.id
        })
        .then(function(deleted) {
          expect(mock.beneficiaries.schema.validate(deleted)).is.true;

          return currencyCloud.beneficiaries.get({
            id: deleted.id
          })
          .then(function() {
            done(new Error('should have failed.'));
          })
          .catch(function(err) {
            expect(err.response.statusCode).equals(404);
            done();
          });
        });
      })
      .catch(done);      
    });
  });
});