'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('payments');
var setup = prepost.setup;
var teardown = prepost.teardown;

var getPrerequisites = function () {
  var res = {};

  var promise = currencyCloud.conversions.create(new mock.conversions.conversion1())
    .then(function (conversion) {
      res.conversionId = conversion.id;

      return currencyCloud.beneficiaries.create(new mock.beneficiaries.beneficiary1())
        .then(function (beneficiary) {
          res.beneficiaryId = beneficiary.id;

          return res;
        });
    });

  return promise;
};

describe('payments', function () {
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
        currencyCloud.payments.create({
          beneficiaryId: 'present',
          amount: 'present',
          reason: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.payments.create({
          currency: 'present',
          amount: 'present',
          reason: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.payments.create({
          currency: 'present',
          beneficiaryId: 'present',
          reason: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.payments.create({
          currency: 'present',
          beneficiaryId: 'present',
          amount: 'present',
          reference: 'present'
        });
      }).to.throw();
      expect(function () {
        currencyCloud.payments.create({
          currency: 'present',
          beneficiaryId: 'present',
          amount: 'present',
          reason: 'present'
        });
      }).to.throw();
    });

    it('successfully creates a payment', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment = new mock.payments.payment1();
          payment.conversionId = res.conversionId;
          payment.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment)
            .then(function (created) {
              expect(mock.payments.schema.validate(created)).is.true;
              done();
            });
        })
        .catch(done);
    });
  });

  describe('get', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.payments.get(/*no params*/);
      }).to.throw();
    });

    it('successfully gets a payment', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment = new mock.payments.payment1();
          payment.conversionId = res.conversionId;
          payment.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment)
            .then(function (created) {
              return currencyCloud.payments.get({
                id: created.id
              })
                .then(function (gotten) {
                  expect(gotten).to.eql(created);
                  done();
                });
            });
        })
        .catch(done);
    });
  });

  describe('update', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.payments.update(/*no params*/);
      }).to.throw();
    });

    it('successfully updates a payment', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment1 = new mock.payments.payment1();
          payment1.conversionId = res.conversionId;
          payment1.beneficiaryId = res.beneficiaryId;

          var payment2 = new mock.payments.payment2();
          payment2.conversionId = res.conversionId;
          payment2.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment1)
            .then(function (created) {
              payment2.id = created.id;

              return currencyCloud.payments.update(payment2)
                .then(function (updated) {
                  return currencyCloud.payments.get({
                    id: created.id
                  })
                    .then(function (gotten) {
                      expect(gotten).to.eql(updated);
                      done();
                    });
                });
            });
        })
        .catch(done);
    });
  });

  describe('find', function () {
    it('successfully finds a payment', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment = new mock.payments.payment1();
          payment.conversionId = res.conversionId;
          payment.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment)
            .then(function (created) {
              return currencyCloud.payments.find({
                conversionId: res.conversionId,
                beneficiaryId: res.beneficiaryId
              })
                .then(function (found) {
                  expect(found).to.have.property('payments').that.deep.includes(created);
                  expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                  done();
                });
            });
        })
        .catch(done);
    });
  });

  describe('delete', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.payments.delete(/*no params*/);
      }).to.throw();
    });

    it('successfully deletes a payment', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment1 = new mock.payments.payment1();
          payment1.conversionId = res.conversionId;
          payment1.beneficiaryId = res.beneficiaryId;

          var payment2 = new mock.payments.payment2();
          payment2.conversionId = res.conversionId;
          payment2.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment1)
            .then(function () {
              return currencyCloud.payments.create(payment2);
            })
            .then(function (created) {
              return currencyCloud.payments.delete({
                id: created.id
              });
            })
            .then(function (deleted) {
              expect(mock.payments.schema.validate(deleted)).is.true;

              return currencyCloud.payments.get({
                id: deleted.id
              })
                .then(function () {
                  done(new Error('should have failed.'));
                })
                .catch(function (err) {
                  expect(err.response.statusCode).equals(404);
                  done();
                });
            });
        })
        .catch(done);
    });
  });

  describe('getPaymentSubmission', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.payments.retrieveSubmission(/*no params*/);
      }).to.throw();
    });

    it('successfully gets a payment submission', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment = new mock.payments.payment1();
          payment.conversionId = res.conversionId;
          payment.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment)
            .then(function (created) {
              return currencyCloud.payments.retrieveSubmission({
                id: created.id
              })
                .then(function (gotten) {
                  expect(gotten).to.have.property('mt103').that.is.not.null;
                  expect(gotten).to.have.property('status').that.is.not.null;
                  expect(gotten).to.have.property('submissionRef').that.is.not.null;
                  done();
                });
            });
        })
        .catch(done);
    });
  });

  describe('authorise', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.payments.authorise(/*no params*/);
      }).to.throw();
    });

    it('returns an error "You cannot authorise this Payment as it was created by you" if payment creator attempts to authorise their own payment', function (done) {
      getPrerequisites()
        .then(function (res) {
          var payment = new mock.payments.payment1();
          payment.conversionId = res.conversionId;
          payment.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment)
            .then(function (created) {
              return currencyCloud.payments.authorise({
                payment_ids: [created.id]
              })
                .then(function (gotten) {
                  expect(gotten.authorisations[0]).to.have.property('error').that.is.not.null;
                  expect(gotten.authorisations[0].error).to.be.a('string', 'You cannot authorise this Payment as it was created by you.');
                  done();
                });
            });
        })
        .catch(done);
    });

    it('successfully authorises payments', function (done) {
      var data = {};
      getPrerequisites()
        .then(function (res) {
          var payment1 = new mock.payments.payment1();
          payment1.conversionId = res.conversionId;
          payment1.beneficiaryId = res.beneficiaryId;

          var payment2 = new mock.payments.payment2();
          payment2.conversionId = res.conversionId;
          payment2.beneficiaryId = res.beneficiaryId;

          return currencyCloud.payments.create(payment1)
            .then(function (created1) {
              data.created = [];
              data.created[0] = created1;
              return created1;
            })
            .then(function () {
              return currencyCloud.payments.create(payment2);
            })
            .then(function (created2) {
              data.created[1] = created2;
              return created2;
            })
            .then(function () {
              return currencyCloud.authentication.login(mock.authentication.paymentAuthorisationCredentials);
            })
              .then(function () {
                return currencyCloud.payments.authorise({
                  payment_ids: [data.created[0].id, data.created[1].id]
                })
                  .then(function (gotten) {
                  expect(gotten.authorisations[0].error).not.to.equal('You cannot authorise this Payment as it was created by you.');
                  expect(gotten.authorisations[0]).to.have.property('paymentId').that.is.not.null;
                  expect(gotten.authorisations[0]).to.have.property('error').that.is.null;
                  expect(gotten.authorisations[0].paymentStatus).to.be.a('string', 'authorised');
                  expect(gotten.authorisations[0].paymentId).to.equal(data.created[0].id);

                  expect(gotten.authorisations[1].error).not.to.equal('You cannot authorise this Payment as it was created by you.');
                  expect(gotten.authorisations[1]).to.have.property('paymentId').that.is.not.null;
                  expect(gotten.authorisations[1]).to.have.property('error').that.is.null;
                  expect(gotten.authorisations[1].paymentStatus).to.be.a('string', 'authorised');
                  expect(gotten.authorisations[1].paymentId).to.equal(data.created[1].id);

                  done();
                });
            });
        })
        .catch(done);
    });
  });

});
