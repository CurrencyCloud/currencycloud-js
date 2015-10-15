'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;
var mock = shared.mock.contacts;

describe('contacts', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.contacts.create({
          firstName: 'present',
          lastName: 'present',
          emailAddress: 'present',
          phoneNumber: 'present'          
        });
      }).to.throw();
      expect(function() {
        currencyCloud.contacts.create({
          accountId: 'present',
          lastName: 'present',
          emailAddress: 'present',
          phoneNumber: 'present'          
        });
      }).to.throw();
      expect(function() {
        currencyCloud.contacts.create({
          accountId: 'present',
          firstName: 'present',
          emailAddress: 'present',
          phoneNumber: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.contacts.create({
          accountId: 'present',          
          firstName: 'present',
          lastName: 'present',
          phoneNumber: 'present'          
        });
      }).to.throw();        
      expect(function() {
        currencyCloud.contacts.create({
          accountId: 'present',          
          firstName: 'present',
          lastName: 'present',
          emailAddress: 'present'
        });
      }).to.throw();
    });

    it('successfully creates a contact', function(done) {
      currencyCloud.contacts.create(mock.contact1)
      .then(function(created) {
        expect(mock.schema.validate(created)).is.true;
        expect(created.id).is.not.empty;
        done();
      })
      .catch(done);
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.contacts.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a contact', function(done) {
      currencyCloud.contacts.create(mock.contact1)
      .then(function(created) {
        currencyCloud.contacts.get({
          id: created.id
        })
        .then(function(gotten) {
          expect(gotten).to.eql(created);
          done();
        })
        .catch(done);
      });
    });
  });
  
  describe('update', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.contacts.update(/*no params*/);
      }).to.throw();
    });
  });
});