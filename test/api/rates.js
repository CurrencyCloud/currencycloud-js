'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks').rates;
var prepost = require('../prepost');
var recorder = prepost.recorder('rates');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('rates', function () {
  before(function (done) {
    recorder.read();
    setup.login()
      .then(function () {
        done();
      });
  });

  after(function (done) {
    teardown.logout()
      .then(function () {
        recorder.write(done);
      });
  });

  describe('get', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.rates.get({
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.rates.get({
          buyCurrency: 'present',
          fixedSide: 'present',
          amount: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.rates.get({
          buyCurrency: 'present',
          sellCurrency: 'present',
          amount: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.rates.get({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present'
        });
      }).to.throw();
    });

    it('successfully gets a rate', function (done) {
      currencyCloud.rates.get({
        buyCurrency: 'EUR',
        sellCurrency: 'GBP',
        fixedSide: 'buy',
        amount: 6700
      })
        .then(function (gotten) {
          expect(mock.schema.validate(gotten)).is.true;
          done();
        })
        .catch(done);
    });
  });

  describe('find', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.rates.find(/*no params*/);
      }).to.throw();
    });

    it('successfully finds a rate', function (done) {
      currencyCloud.rates.find({
        currencyPair: 'USDGBP'
      })
        .then(function (found) {
          expect(found).to.have.property('rates');
          done();
        })
        .catch(done);
    });
  });
});