'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('conversions-deprecated');
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

    describe('date_change @deprecated', function () {
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
                    var newDate = new Date(created.settlementDate);
                    newDate.setDate(newDate.getDate() + 3);
                    return currencyCloud.conversions.date_change({
                        id: created.id,
                        new_settlement_date: newDate.toISOString()
                    })
                        .then(function (gotten) {
                            expect(gotten).to.have.property('conversionId').to.not.be.empty;
                            expect(new Date(gotten.newSettlementDate).toISOString()).to.eql(newDate.toISOString());
                            done();
                        })
                        .catch(done);
                });
        });
    });

    describe('profit_and_loss @deprecated', function () {
        it('successfully retrieve profit and/or loss of conversions', function (done) {
            currencyCloud.conversions.profit_and_loss({
                perPage: '1'
            })
                .then(function (found) {
                    expect(found).to.have.property('conversionProfitAndLosses').to.not.be.empty;
                    expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                    done();
                })
                .catch(done);
        });
    });

    describe('date_change_quote @deprecated', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.conversions.date_change_quote(/*no params*/);
            }).to.throw();
            expect(function () {
                currencyCloud.conversions.date_change_quote({
                    id: 'present'
                });
                expect(function () {
                    currencyCloud.conversions.date_change_quote({
                        newSettlementDate: 'present'
                    });
                }).to.throw();
            });
        });

        it('successfully creates quote for changing the date', function (done) {
            currencyCloud.conversions.create(new mock.conversions.conversion1())
                .then(function (created) {
                    var newDate = new Date(created.settlementDate);
                    newDate.setDate(newDate.getDate() + 3);
                    return currencyCloud.conversions.date_change_quote({
                        id: created.id,
                        new_settlement_date: newDate.toISOString()
                    })
                        .then(function (gotten) {
                            expect(gotten).to.have.property('conversionId').to.not.be.empty;
                            expect(new Date(gotten.newSettlementDate).toISOString()).to.eql(newDate.toISOString());
                            done();
                        })
                        .catch(done);
                });
        });
    });

    describe('split_preview @deprecated', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.conversions.split_preview(/*no params*/);
            }).to.throw();
            expect(function () {
                currencyCloud.conversions.split_preview({
                    id: 'present'
                });
                expect(function () {
                    currencyCloud.conversions.split_preview({
                        amount: 'present'
                    });
                }).to.throw();
            });
        });


        it('successfully split preview', function (done) {
            currencyCloud.conversions.create(new mock.conversions.conversion1())
                .then(function (created) {
                    return currencyCloud.conversions.split_preview({
                        id: created.id,
                        amount: '2'
                    })
                        .then(function (gotten) {
                            expect(gotten).to.have.property('parentConversion').to.not.be.empty;
                            expect(gotten).to.have.property('childConversion').to.not.be.empty;
                            done();
                        })
                        .catch(done);
                });
        });
    });


    describe('split_history @deprecated', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.conversions.split_history(/*no params*/);
            }).to.throw();
        });

        it('successfully creates split history', function (done) {
            currencyCloud.conversions.split_history({
                id: 'c805aa35-9bd3-4afe-ade2-d341e551aa16',
            })
                .then(function (gotten) {
                    expect(gotten).to.have.property('childConversions').to.not.be.empty;
                    done();
                })
                .catch(done);
        });
    });

    describe('cancellation_quote @deprecated', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.conversions.cancellation_quote(/*no params*/);
            }).to.throw();
        });

        it('successfully quote conversion cancellation', function (done) {
            currencyCloud.conversions.cancellation_quote({
                id: 'c006ed4c-d33c-43f8-98cb-f9c34cb87b3a',
            })
                .then(function (gotten) {
                    expect(gotten).to.have.property('amount').to.not.be.empty;
                    expect(gotten).to.have.property('currency').to.not.be.empty;
                    done();
                })
                .catch(done);
        });
    });
});
