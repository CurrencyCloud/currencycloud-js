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
  
describe('currency-cloud', function() {
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

  describe('onBehalfOf', function() {
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

  describe('APIerror', function() {
    it('returns properly structured error', function(done) {
      var params = {
        currency: 'US',
        bankAccountCountry: 'US'
      };
      
      currencyCloud.reference.getBeneficiaryRequiredDetails(params)
      .then(function() {
        done(new Error('should have failed.'));
      })
      .catch(function(err) {
        expect(err.platform).is.not.empty;
        
        expect(err.request.parameters).eql(params);
        expect(err.request.verb).is.not.empty;
        expect(err.request.url).is.not.empty;
        
        expect(err.response.statusCode).equals(400);
        expect(err.response.date).is.not.empty;
        expect(err.response.requestId).is.not.empty;

        expect(err.errors).to.have.length.above(0);
        
        done();
      });
    });
  });
});