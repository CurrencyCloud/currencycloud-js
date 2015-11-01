'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('conversions');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('conversions', function() {
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
  
  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.conversions.create({
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          termAgreement: 'present'
        });
      }).to.throw();        
      expect(function() {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present'
        });
      }).to.throw();
    });
    
    it('successfully creates a conversion', function(done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
      .then(function(created) {
        expect(mock.conversions.schema.validate(created)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.conversions.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a conversion', function(done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
      .then(function(created) {
        return currencyCloud.conversions.get({
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
  
  describe('find', function() {
    it('successfully finds a conversion', function(done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
      .then(function(created) {
        return currencyCloud.conversions.find({
          conversionIds: [created.id]
        })
        .then(function(found) {
          expect(found).to.have.property('conversions').that.contain(created);
          expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
          done();
        });
      })
      .catch(done);
    });
  });
});