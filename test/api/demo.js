"use strict";

var currencyCloud = require("../../lib/currency-cloud");
var expect = require("chai").expect;
var mock = require("../mocks");
var prepost = require("../prepost");
var recorder = prepost.recorder("demo");
var setup = prepost.setup;
var teardown = prepost.teardown;

describe("demo", function () {
  before(function (done) {
    recorder.read();
    setup.login().then(function () {
      done();
    });
  });

  after(function (done) {
    teardown.logout().then(function () {
      recorder.write(done);
    });
  });

  describe("emulateInboundFunds", function () {
    it("fails if required parameters are missing", function () {
      expect(function () {
        currencyCloud.demo.emulateInboundFunds(/*no params*/);
      }).to.throw();
    });

    it("successfully emulate inbound funds", function (done) {
      currencyCloud.demo
        .emulateInboundFunds(mock.emulates.emulate1())
        .then(function (created) {
          expect(mock.emulates.schema.validate(created)).is.true;
          done();
        })
        .catch(done);
    });
  });
});
