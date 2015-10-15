'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;

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
    
    it('successfully authenticates and retrieves nonempty authentication token', function(done) {
      setup.login()
      .then(function(token) {
        expect(token).to.not.be.empty;
        done();
      })
      .catch(done)
      .finally(teardown.logout);
    });

    it('persists authentication token and so can make a subsequent API call', function() {
//      setup.login()
//        .then(request)
//        .then(done)
////        .catch(function(err) {
////          done(new Error('authentication or subsequent API call failed unexpectedly. Details: ' + JSON.stringify(err)));
////        })
//        .finally(teardown.logout);
    });
    
    it('fails to make subsequent API call if token is invalid', function() {

    });

    it('fails if login_id is invalid', function() {
//      badlogin()
//        .then(function() {
//          done(new Error('authentication should have failed.'));
//        })
//        .catch(function(err) {
//          expect(err).to.not.be.empty;
//          done();
//      });
    });
  });

  describe('logout', function() {
    it('successfully logs out', function() {

    });
  });
});