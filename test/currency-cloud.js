'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../lib/currency-cloud');
var prepost = require('./prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('./mocks');
    
describe('onBehalfOf', function() {
  before(setup.login);
  after(teardown.logout);
  
  it('fails if required parameters are missing', function() {
    expect(function() {
      currencyCloud.onBehalfOf(/*no params*/);
    }).to.throw();
    expect(function() {
      currencyCloud.onBehalfOf('id');
    }).to.throw();
  });

  it('fails if id parameter is invalid', function() {
    expect(function() {
      currencyCloud.onBehalfOf('wrong');
    }).to.throw();
  });

  it('fails if already been called and not yet completed', function(done) {
    currencyCloud.contacts.create(mock.contacts.contact1)
    .then(function(contact) {
      return currencyCloud.onBehalfOf(contact.id, function() { 
        return currencyCloud.beneficiaries.create(mock.beneficiaries.beneficiary1)
        .then(function() {
          expect(function() {
            currencyCloud.onBehalfOf('53477161-91de-012f-e284-1e0030c7f352', function() {});
          }).to.throw();
          done();
        });
      });
    })
    .catch(done);
  });

  it('executes API calls on behalf of specified id; once completed, resets the id', function(done) {
    currencyCloud.contacts.create(mock.contacts.contact1)
    .then(function(contact) {
      return currencyCloud.onBehalfOf(contact.id, function() { 
        return currencyCloud.beneficiaries.create(mock.beneficiaries.beneficiary1)
        .then(function(beneficiary) {
          expect(beneficiary.creatorContactId).equals(contact.id);
        });
      })
      .then(function() {
        return currencyCloud.accounts.getCurrent()
        .then(function(current) {
          return currencyCloud.beneficiaries.create(mock.beneficiaries.beneficiary1)
          .then(function(beneficiary) {
            expect(beneficiary.creatorContactId).equals(current.id);
            done();
          });
        });
      });
    })
    .catch(done);
  });
});