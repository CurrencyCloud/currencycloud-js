'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud');
var prepost = require('../prepost');
var setup = prepost.setup;
var teardown = prepost.teardown;
var mock = require('../mocks').settlements;

describe('settlements', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('successfully creates a settlement', function(done) {
      currencyCloud.settlements.create(mock.settlement1)
      .then(function(created) {
        expect(mock.schema.validate(created)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a settlement', function(done) {
      currencyCloud.settlements.create(mock.settlement1)
      .then(function(created) {
        return currencyCloud.settlements.get({
          id: created.id
        })
        .then(function(gotten) {
          expect(gotten).to.eql(created);
          done();
        });
      })
      .catch(done);
    });
  });
  
  describe('delete', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.delete(/*no params*/);
      }).to.throw();
    });
  });
  
  describe('addConversion', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.addConversion({
          id: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.settlements.addConversion({
          conversionId: 'present'
        });
      }).to.throw();
    });
  });
  
  describe('removeConversion', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.removeConversion({
          id: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.settlements.removeConversion({
          conversionId: 'present'
        });
      }).to.throw();
    });
  });

  describe('release', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.release(/*no params*/);
      }).to.throw();
    });
  });
  
  describe('unrelease', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.unrelease(/*no params*/);
      }).to.throw();
    });
  });
});