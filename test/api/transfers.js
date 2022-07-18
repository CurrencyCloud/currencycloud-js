'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('transfers');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('transfers', function () {
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
        currencyCloud.transfers.create(/*no params*/);
      }).to.throw();
    });

    it('successfully creates a transfer', function (done) {
      currencyCloud.transfers.create(new mock.transfers.transfer1())
        .then(function (created) {
          expect(mock.transfers.schema.validate(created)).is.true;
          done();
        })
        .catch(done);
    });
  });

  describe('find', function () {
    it('successfully finds transfers', function (done) {
      currencyCloud.transfers.find()
        .then(function (found) {
          expect(found).to.have.property('transfers');
          expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
          done();
        })
        .catch(done);
    });
  });

  describe('retrieve', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.transfers.get(/*no params*/);
      }).to.throw();
    });

    it('successfully retrieves a transfer', function (done) {
      currencyCloud.transfers.create(new mock.transfers.transfer1())
        .then(function (created) {
          return currencyCloud.transfers.get({
            id: created.id
          })
            .then(function (gotten) {
              expect(gotten).to.eql(created);
              done();
            });
        })
        .catch(done);
    });

    it('fails to retrieve if non-existing id', function (done) {
      currencyCloud.transfers.get({id: "deadbeef-dead-beef-dead-beefdeadbeef"})
        .then(function () {
          done(new Error('should have failed.'));
        })
        .catch(function (err) {
          expect(err.response.statusCode).equals(404);
          done();
        });
    });
  });

    describe('cancel', function () {
        it('successfully cancel transfer', function (done) {
            currencyCloud.transfers.cancel({id: "993d63bd-e151-11e6-a5af-080027a79e8f"})
                .then(function (found) {
                    expect(found).to.have.property('status');
                    expect(found.status).equals('cancelled');
                    done();
                })
                .catch(done);
        });
    });

});