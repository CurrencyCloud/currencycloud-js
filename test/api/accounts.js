'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').accounts;

describe('accounts', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.accounts.create({
          accountName: 'present'  
        });
      }).to.throw();
      expect(function() {
        currencyCloud.accounts.create({
          legalEntityType: 'present'
        });
      }).to.throw();
    });

    it('successfully creates an account', function(done) {
      currencyCloud.accounts.create(mock.account1)
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
        currencyCloud.accounts.get(/*no params*/);
      }).to.throw();
    });

    it('successfully gets an account', function(done) {
      currencyCloud.accounts.create(mock.account1)
      .then(function(created) {
        return currencyCloud.accounts.get({
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
        currencyCloud.accounts.update(/*no params*/);
      }).to.throw();
    });

    it('successfully updates an account', function(done) {
      currencyCloud.accounts.create(mock.account1)
      .then(function(created) {
        mock.account2.id = created.id; //refactor plain clone
        return currencyCloud.accounts.update(mock.account2)
        .then(function(updated) {
          return currencyCloud.accounts.get({
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
    it('successfully finds an account', function(done) {
      currencyCloud.accounts.create(mock.account1)
      .then(function() {
        return currencyCloud.accounts.find(mock.account1)
        .then(function(found) {
          expect(found).to.have.property('accounts').and.to.not.be.empty;
          expect(found).to.have.property('pagination');
          
          done();
        });
      })
      .catch(done);      
    });
  });
  
  describe('getCurrent', function() {
    it('successfully gets current account', function(done) {
      currencyCloud.accounts.getCurrent()
      .then(function(current) {
        expect(mock.schema.validate(current)).is.true;
        done();
      })
      .catch(done);
    });
  });
});