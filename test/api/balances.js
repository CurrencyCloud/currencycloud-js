'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('balances');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('balances', function() {
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
        expect(mock.balances.schema.validate(gotten)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('find', function() {
    it('successfully finds a balance', function(done) {
      currencyCloud.balances.find()
      .then(function(found) {
        expect(found).to.have.property('balances');
        expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
        done();
      })
      .catch(done);
    });
  });
});