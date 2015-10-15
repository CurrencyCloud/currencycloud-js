'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;

describe('balances', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.balances.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a balance', function(done) {
      currencyCloud.balances.get({
        currency: 'GBP'
      })
      .then(function(gotten) {
        expect(gotten).to.not.be.empty;
        done();
      })
      .catch(done);
    });
  });
});