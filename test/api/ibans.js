'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('ibans');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('ibans', function () {
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

  describe('create', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.ibans.create(/*no params*/);
      }).to.throw();
    });

    it('successfully creates an IBAN', function (done) {
      currencyCloud.ibans.create(new mock.ibans.iban1())
        .then(function (created) {
          expect(mock.ibans.schema.validate(created)).is.true;
          done();
        })
        .catch(done);
    });
  });

  describe('find', function () {
    it('successfully finds an IBAN', function (done) {
      currencyCloud.ibans.find()
        .then(function (found) {
          expect(found).to.have.property('ibans');
          done();
        })
        .catch(done);
    });
  });

  describe('findInSubAccount', function () {
    it('successfully finds an IBAN in sub-account', function (done) {
      currencyCloud.ibans.findInSubAccount()
        .then(function (found) {
          expect(found).to.have.property('ibans');
          done();
        })
        .catch(done);
    });
  });

  describe('getInSubAccount', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.ibans.get(/*no params*/);
      }).to.throw();
    });
  });
});