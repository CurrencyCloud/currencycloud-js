'use strict';

var client = require('../../lib/client');
var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks').authentication;
var recorder = require('../prepost').recorder('authentication');
    
describe.only('authentication', function() {
  before(recorder.read);
  after(recorder.write);
  
  describe('login', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.authentication.login({
          environment: 'present',
          loginId: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.authentication.login({
          environment: 'present',
          apiKey: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.authentication.login({
          loginId: 'present',
          apiKey: 'present'
        });
      }).to.throw();
    });
    
    it('fails if environment parameter is invalid', function() {
      expect(function() {
        currencyCloud.authentication.login({
          environment: 'wrong',
          loginId: 'present',
          apiKey: 'present'
        });
      }).to.throw();
    });
    
    it('fails to make an API call before logging in', function() {
      expect(function() {
        currencyCloud.accounts.getCurrent();
      }).to.throw();
    });
    
    it('successfully logs in', function(done) {
      currencyCloud.authentication.login(mock.credentials)
      .then(currencyCloud.authentication.logout)
      .then(function() {
        done();
      })
      .catch(done);
    });

    it('persists authentication token and so can make a subsequent API call', function(done) {
      currencyCloud.authentication.login(mock.credentials)
      .then(currencyCloud.accounts.getCurrent)
      .then(currencyCloud.authentication.logout)      
      .then(function() {
        done();
      })
      .catch(done);
    });
    
    it('silently re-authenticates if token has expired', function(done) {
      var expired = '3907f05da86533710efc589d58f51f45';
      
      client._token.set(expired);
      
      currencyCloud.authentication.login(mock.credentials)
      .then(currencyCloud.accounts.getCurrent)
      .then(function() {
        expect(client._token.get()).not.equals(expired);
        
        currencyCloud.authentication.logout()
        .then(function() {
          done();
        });
      })
      .catch(done);
    });
  });

  describe('logout', function() {
    it('fails to make an API call once logged out', function(done) {
      currencyCloud.authentication.login(mock.credentials)
      .then(currencyCloud.authentication.logout)
      .then(function() {
        expect(function() {
          currencyCloud.accounts.getCurrent();
        }).to.throw();
        done();
      })
      .catch(done);      
    });
    
    it('successfully logs out', function(done) {
      currencyCloud.authentication.login(mock.credentials)
      .then(currencyCloud.authentication.logout)
      .then(function() {
        expect(client._config.get()).to.be.null;
        expect(client._token.get()).to.be.null;
        done();
      })
      .catch(done);
    });
  });
});