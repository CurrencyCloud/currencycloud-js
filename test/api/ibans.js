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

  describe('find', function () {
    it('successfully finds an IBAN', function (done) {
      currencyCloud.ibans.find()
        .then(function (found) {
          expect(found.ibans[0]).that.satisfy(mock.ibans.schema.validate);
          done();
        })
        .catch(done);
    });
  });
});