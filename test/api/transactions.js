'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('transactions');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('transactions', function() {
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
        currencyCloud.transactions.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a transaction', function(done) {
      currencyCloud.transactions.get({
        id: ''
      })
      .then(function(gotten) {
        expect(mock.transactions.schema.validate(gotten)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('find', function() {
    it('successfully finds a transaction', function(done) {
      currencyCloud.transactions.find()
      .then(function(found) {console.log(found);
        expect(found).to.have.property('transactions');
        expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
        done();
      })
      .catch(done);
    });
  });
});