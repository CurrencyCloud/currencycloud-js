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
                                paymentIds: [created.id]
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
                                paymentIds: [data.created[0].id, data.created[1].id]
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

    describe('getPaymentConfirmation', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.payments.retrieveSubmission(/*no params*/);
            }).to.throw();
        });

        it('successfully gets a payment confirmation', function (done) {
            currencyCloud.payments.getConfirmation({
                id: 'ffbe0bcb-1cc0-43b8-b931-c40691cf09d9'
            })
                .then(function (gotten) {
                    expect(gotten).to.have.property('id').that.is.not.null;
                    expect(gotten).to.have.property('paymentId').to.eql('ffbe0bcb-1cc0-43b8-b931-c40691cf09d9');
                    expect(gotten).to.have.property('accountId').that.is.not.null;
                    expect(gotten).to.have.property('shortReference').that.is.not.null;
                    expect(gotten).to.have.property('status').that.is.not.null;
                    done();
                })
                .catch(done);
        });
    });

    describe('getPaymentDeliveryDate', function () {
    it('fails if required parameters are missing', function () {
      expect(function () {
        currencyCloud.payments.getPaymentDeliveryDate(/*no params*/);
      }).to.throw();
    });

    it('successfully gets a payment delivery date', function (done) {
      currencyCloud.payments.getPaymentDeliveryDate({
        paymentDate: mock.payments.delivery1().paymentDate,
        paymentType: mock.payments.delivery1().paymentType,
        currency: mock.payments.delivery1().currency,
        bankCountry: mock.payments.delivery1().bankCountry
      })
        .then(function (gotten) {
          expect(gotten).to.eql(mock.payments.delivery1());
          done();
        })
        .catch(done);
    });
  });

    describe('getQuotePaymentFee', function () {
        it('successfully gets Quote for payment fee', function (done) {
            currencyCloud.payments.getQuotePaymentFee({
                paymentCurrency:"USD",
                paymentDestinationCountry:"US",
                paymentType:"regular"
            })
                .then(function (res) {
                    expect(res).is.not.empty;
                    expect(res).to.have.property('accountId').that.eql("0534aaf2-2egg-0134-2f36-10b11cd33cfb");
                    expect(res).to.have.property('feeAmount').that.eql("10.00");
                    expect(res).to.have.property('feeCurrency').that.eql("EUR");
                    expect(res).to.have.property('paymentCurrency').that.eql("USD");
                    expect(res).to.have.property('paymentDestinationCountry').that.eql("US");
                    expect(res).to.have.property('paymentType').that.eql("regular");
                    expect(res).to.have.property('chargeType').that.is.null;
                    done();
                })
                .catch(done);
        });
    });

    describe("getPaymentFees", function () {
        it("successfully gets payment fees", function () {
            currencyCloud.payments.getPaymentFees()
            .then(function (res) {
                expect(res).to.not.be.empty;

                expect(res).to.have.property("pagination").that.is.not.empty;
                expect(res.pagination).to.have.property("totalEntries").that.equals(2);
                expect(res.pagination).to.have.property("totalPages").that.equals(1);
                expect(res.pagination).to.have.property("currentPage").that.equals(1);
                expect(res.pagination).to.have.property("perPage").that.equals(25);
                expect(res.pagination).to.have.property("previousPage").that.equals(-1);
                expect(res.pagination).to.have.property("nextPage").that.equals(-1);
                expect(res.pagination).to.have.property("order").that.equals("created_at");
                expect(res.pagination).to.have.property("orderAscDesc").that.equals("asc");

                expect(res).to.have.property("paymentFees").that.is.not.empty;
                expect(res.paymentFees[0]).to.have.property("id").that.equals("e7e1b6e5-c596-4ad1-b8d4-a7035185143a");
                expect(res.paymentFees[0]).to.have.property("name").that.equals("Fee Table CAD  5 - 10 - 15");
                expect(res.paymentFees[0]).to.have.property("currency").that.equals("CAD");
                expect(res.paymentFees[0]).to.have.property("regularAmount").that.equals("5.00");
                expect(res.paymentFees[0]).to.have.property("prioritySharedAmount").that.equals("10.00");
                expect(res.paymentFees[0]).to.have.property("priorityOursAmount").that.equals("15.00");
                expect(res.paymentFees[0]).to.have.property("ownerAccountId").that.is.empty;

                expect(res.paymentFees[1]).to.have.property("id").that.equals("029e1771-8de7-4ab0-9c19-c14b325c0c9e");
                expect(res.paymentFees[1]).to.have.property("name").that.equals("Fee Table USD  2 - 4 - 12");
                expect(res.paymentFees[1]).to.have.property("currency").that.equals("USD");
                expect(res.paymentFees[1]).to.have.property("regularAmount").that.equals("2.00");
                expect(res.paymentFees[1]).to.have.property("prioritySharedAmount").that.equals("4.00");
                expect(res.paymentFees[1]).to.have.property("priorityOursAmount").that.equals("12.00");
                expect(res.paymentFees[1]).to.have.property("ownerAccountId").that.is.empty;
            });
        });
    });

    describe("unassignPaymentFee", function () {
        it("successfully unassigns a payment fee", function () {
            currencyCloud.payments.unassignPaymentFee({
                accountId: "accountId123"
            }).then(function (res) {
                expect(res).to.not.be.empty;
           
                expect(res).to.have.property("accountId").that.equals("245a1ebd-d8a6-416d-bcc1-9de381d22f90");
            });
        });

        it("throws an error if the accountId is not provided", function() {
            expect(function () {
                currencyCloud.payments.unassignPaymentFee();
            }).to.throw("accountId is required");
        });
    });

    describe("assignPaymentFee", function () {
        it("successfully assigns a payment fee to an account", function () {
            currencyCloud.payments.assignPaymentFee({
                paymentFeeId: "hello",
                accountId: "accountId123"
            })
            .then(function (res) {
                expect(res).to.not.be.empty;

                expect(res).to.have.property("id").that.equals("7c17b546-0435-45f0-9c17-3a4e0f2d3e84");
                expect(res).to.have.property("accountId").that.equals("245a1ebd-d8a6-416d-bcc1-9de381d22f90");
            });
        });

        it ("throws an error when the paymentFeeId is missing", function () {
            expect(function () {
                currencyCloud.payments.assignPaymentFee({
                    accountId: "accountId123"
                });
            }).to.throw("paymentFeeId is required");
        });

        it ("throws an error when the accountId is missing", function () {
            expect(function () {
                currencyCloud.payments.assignPaymentFee({
                    paymentFeeId: "hello"
                });
            }).to.throw("accountId is required");
        });
    });

    describe("assignedPaymentFee", function () {
        it("successfully gets the assigned payment fee", function () {
            currencyCloud.payments.assignedPaymentFee({
                accountId: "4e8ca601-80c0-0133-26ca-0022194273c7"
            }).then(function (res) {
                expect(res).to.not.be.empty;

                expect(res).to.have.property("id").that.equals("2bd34951-becc-4b52-b7d1-3f954609d173");
                expect(res).to.have.property("name").that.equals("Fee table name");
                expect(res).to.have.property("currency").that.equals("EUR");
                expect(res).to.have.property("regularAmount").that.equals("4.00");
                expect(res).to.have.property("prioritySharedAmount").that.equals("5.00");
                expect(res).to.have.property("priorityOursAmount").that.equals("6.00");
                expect(res).to.have.property("ownerAccountId").that.equals("4e8ca601-80c0-0133-26ca-0022194273c7");
            });
        });
    });
});