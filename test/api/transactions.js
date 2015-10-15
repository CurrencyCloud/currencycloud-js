'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;

describe('transactions', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.transactions.get(/*no params*/);
      }).to.throw();
    });
  });
});