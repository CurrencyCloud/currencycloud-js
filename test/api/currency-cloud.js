'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var contactsMock = mock.contacts();
var prepost = require('../prepost');
var recorder = prepost.recorder('currency-cloud');
var setup = prepost.setup;
var teardown = prepost.teardown;

var getPrerequisites = function() {
  var promise = currencyCloud.accounts.getCurrent()
  .then(function(account) {
    var contact = new contactsMock.contact1();
    contact.accountId = account.id;        
    
    return currencyCloud.contacts.create(contact)
    .then(function(res) {
      return res.id;
    });
  });

  return promise;
};
    
describe('onBehalfOf', function() {
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
    getPrerequisites()
    .then(function(contactId) {
      return currencyCloud.onBehalfOf(contactId, function() { 
        return currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
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
    getPrerequisites()
    .then(function(contactId) {
      return currencyCloud.onBehalfOf(contactId, function() { 
        return currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
        .then(function(beneficiary) {
          expect(beneficiary.creatorContactId).equals(contactId);
        });
      })
      .then(function() {
        return currencyCloud.contacts.getCurrent()
        .then(function(current) {
          return currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
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