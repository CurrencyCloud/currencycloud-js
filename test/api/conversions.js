'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('conversions');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('conversions', function () {
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
        currencyCloud.conversions.create({
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          amount: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          reason: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          termAgreement: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.create({
          buyCurrency: 'present',
          sellCurrency: 'present',
          fixedSide: 'present',
          amount: 'present',
          reason: 'present'
        });
      }).to.throw();
    });

    it('successfully creates a conversion', function (done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
        .then(function (created) {
          expect(mock.conversions.schema.validate(created)).is.true;
          done();
        })
        .catch(done);
    });
  });

  describe('get', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.conversions.get(/*no params*/);
      }).to.throw();
    });

    it('successfully gets a conversion', function (done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
        .then(function (created) {
          return currencyCloud.conversions.get({
            id: created.id
          })
            .then(function (gotten) {
              expect(gotten).to.eql(created);
              done();
            });
        })
        .catch(done);
    });
  });

  describe('find', function () {
    it('successfully finds a conversion', function (done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
        .then(function (created) {
          return currencyCloud.conversions.find({
            conversionIds: [created.id]
          })
            .then(function (found) {
              expect(found).to.have.property('conversions').to.not.be.empty;
              expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
              done();
            });
        })
        .catch(done);
    });
  });

  describe('cancel', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.conversions.cancel(/*no params*/);
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.cancel({
          onBehalfOf: 'present'
        });
        expect(function () {
          currencyCloud.conversions.cancel({
            notes: 'present'
          });
        }).to.throw();
      });
    });

    it('successfully cancels a conversion', function (done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
        .then(function (created) {
          return currencyCloud.conversions.cancel({
            id: created.id
          })
            .then(function (gotten) {
              expect(gotten.conversionId).to.eql(created.id);
              done();
            });
        })
        .catch(done);
    });
  });

  describe('date_change', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.conversions.date_change(/*no params*/);
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.date_change({
          id: 'present'
        });
        expect(function () {
          currencyCloud.conversions.date_change({
            new_settlement_date: 'present'
          });
        }).to.throw();
      });
    });

    it('successfully changes a conversion settlement date', function (done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
        .then(function (created) {
          return currencyCloud.conversions.date_change({
            id: created.id,
            new_settlement_date: "2017-11-10T12:18:56+00:00"
          })
            .then(function (gotten) {
              expect(gotten.newSettlementDate).to.eql("2017-11-10T12:18:56+00:00");
              done();
            });
        })
        .catch(done);
    });
  });

  describe('split', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.conversions.split(/*no params*/);
      }).to.throw();
      expect(function () {
        currencyCloud.conversions.split({
          id: 'present'
        });
        expect(function () {
          currencyCloud.conversions.split({
            amount: 'present'
          });
        }).to.throw();
      });
    });

    it('successfully splits a conversion', function (done) {
      currencyCloud.conversions.create(new mock.conversions.conversion1())
        .then(function (created) {
          return currencyCloud.conversions.split({
            id: created.id,
            amount: 300
          })
            .then(function (gotten) {
              expect(gotten.parentConversion.id).to.eql(created.id);
              done();
            });
        })
        .catch(done);
    });
  });

});
