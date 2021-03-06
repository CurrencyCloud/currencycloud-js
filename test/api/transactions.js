'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('transactions');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('transactions', function () {
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
                currencyCloud.transactions.get(/*no params*/);
            }).to.throw();
        });

        it('successfully gets a transaction', function (done) {
            currencyCloud.conversions.create(new mock.conversions.conversion1())
                .then(function (created) {
                    return currencyCloud.transactions.find({
                        order: 'created_at',
                        orderAscDesc: 'desc',
                        perPage: 5
                    })
                        .then(function (found) {
                            return currencyCloud.transactions.get({
                                id: found.transactions[0].id
                            })
                                .then(function (gotten) {
                                    expect(mock.transactions.schema.validate(gotten)).is.true;
                                    expect(gotten).to.have.property('relatedEntityType', 'conversion');
                                    expect(gotten).to.have.property('relatedEntityId', created.id);
                                    done();
                                });
                        });
                })
                .catch(done);
        });
    });

    describe('find', function () {
        it('successfully finds a transaction', function (done) {
            currencyCloud.conversions.create(new mock.conversions.conversion1())
                .then(function (created) {
                    return currencyCloud.transactions.find({
                        order: 'created_at',
                        orderAscDesc: 'desc',
                        perPage: 5
                    })
                        .then(function (found) {
                            expect(found).to.have.property('transactions');
                            expect(found.transactions[0]).to.have.property('relatedEntityType', 'conversion');
                            expect(found.transactions[0]).to.have.property('relatedEntityId', created.id);
                            expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                            done();
                        });
                })
                .catch(done);
        });
    });

    describe('get sender', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.transactions.getSender(/*no params*/);
            }).to.throw();
        });
        it('successfully get sender details', function (done) {
            currencyCloud.transactions.getSender({
                id: 'e68301d3-5b04-4c1d-8f8b-13a9b8437040'
            })
                .then(function (gotten) {
                    expect(gotten).to.have.property('id').to.eql('e68301d3-5b04-4c1d-8f8b-13a9b8437040');
                    expect(gotten).to.have.property('amount').that.is.not.null;
                    expect(gotten).to.have.property('currency').that.is.not.null;
                    expect(gotten).to.have.property('valueDate').that.is.not.null;
                    expect(gotten).to.have.property('sender').that.is.not.null;
                    done();
                })
                .catch(done);
        });
    });
});