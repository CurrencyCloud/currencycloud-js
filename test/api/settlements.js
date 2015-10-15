'use strict';

var expect = require('chai').expect;
var currencyCloud = require('../../lib/currency-cloud')();
var shared = require('../shared')();
var setup = shared.setup;
var teardown = shared.teardown;
var mock = shared.mock.settlements;

describe('settlements', function() {
  before(setup.login);
  after(teardown.logout);
  
  describe('create', function() {
    it('successfully creates a settlement', function(done) {
      currencyCloud.settlements.create(mock.settlement1)
      .then(function(created) {
        expect(mock.schema.validate(created)).is.true;
        expect(created.id).is.not.empty;
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