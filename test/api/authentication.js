'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('authentication', function() {
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
    
    it('successfully authenticates', function(done) {
      setup.login()
      .then(function() {
        done();
      })
      .catch(done)
      .finally(teardown.logout);
    });

    it('persists authentication token and so can make a subsequent API call', function(done) {
      setup.login()
      .then(currencyCloud.accounts.getCurrent)
      .then(function() {
        done();
      })
      .catch(done)
      .finally(teardown.logout);
    });
    
    it('silently re-authenticates if token has expired', function(done) {
      var client = require('../../lib/client');
      var expired = '3907f05da86533710efc589d58f51f45';
      
      client._token.set(expired);
      
      setup.login()
      .then(currencyCloud.accounts.getCurrent)
      .then(function() {
        expect(client._token.get()).not.equals(expired);
        done();
      })
      .catch(done)
      .finally(teardown.logout);
    });
  });

  describe('logout', function() {
    it('fails to make an API call once logged out', function(done) {
      setup.login()
      .then(currencyCloud.authentication.logout)
      .then(function() {
        expect(function() {
          currencyCloud.accounts.getCurrent();
        }).to.throw();
        done();
      });
    });
    
    it('successfully logs out', function(done) {
      setup.login()
      .then(currencyCloud.authentication.logout)
      .then(function() {
        done();
      })
      .catch(done);
    });
  });
});