'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var contactsMock = mock.contacts();
var prepost = require('../prepost');
var recorder = prepost.recorder('contacts');
var setup = prepost.setup;
var teardown = prepost.teardown;

var getPrerequisites = function() {
  var promise = currencyCloud.accounts.getCurrent()
  .then(function(account) {
    return account.id;
  });

  return promise;
};

describe('contacts', function() {
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
      getPrerequisites()
      .then(function(accountId) {
        var contact = new contactsMock.contact1();
        contact.accountId = accountId;

        return currencyCloud.contacts.create(contact)
        .then(function(created) {
          expect(contactsMock.schema.validate(created)).is.true;
          done();
        });
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
      getPrerequisites()
      .then(function(accountId) {
        var contact = new contactsMock.contact1();
        contact.accountId = accountId;

        return currencyCloud.contacts.create(contact)
        .then(function(created) {
          return currencyCloud.contacts.get({
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
        currencyCloud.contacts.update(/*no params*/);
      }).to.throw();
    });

    it('successfully updates a contact', function(done) {
      getPrerequisites()
      .then(function(accountId) {
        var contact1 = new contactsMock.contact1();
        contact1.accountId = accountId;

        return currencyCloud.contacts.create(contact1)
        .then(function(created) {
          var contact2 = new contactsMock.contact2();
          contact2.id = created.id;

          return currencyCloud.contacts.update(contact2)
          .then(function(updated) {
            return currencyCloud.contacts.get({
              id: created.id
            })
            .then(function(gotten) {
              expect(gotten).to.eql(updated);
              done();
            });
          });
        });
      })
      .catch(done);
    });
  });
  
  describe('find', function() {
    it('successfully finds a contact', function(done) {
      currencyCloud.contacts.getCurrent()
      .then(function(current) {
        return currencyCloud.contacts.find({
          loginId: current.loginId,
          order: 'created_at',
          orderAscDesc: 'desc',
          perPage: 5
        })
        .then(function(found) {
          expect(found).to.have.property('contacts').to.not.be.empty;
          expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
          done();
        });
      })
      .catch(done);
    });
  });
  
  describe('getCurrent', function() {
    it('successfully gets current contact', function(done) {
      currencyCloud.contacts.getCurrent()
      .then(function(current) {
        expect(contactsMock.schema.validate(current)).is.true;
        done();
      })
      .catch(done);
    });
  });
});