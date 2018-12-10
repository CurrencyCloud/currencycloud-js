'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('reports');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('reports', function () {
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

    describe('create_conversion_report', function () {
        it('successfully creates conversion report', function (done) {
            currencyCloud.reports.create_conversion_report(new mock.reports.report1())
                .then(function (created) {
                    expect(mock.reports.schema.validate(created)).is.true;
                    done();
                })
                .catch(done);
        });
    });

    describe('create_payment_report', function () {
        it('successfully create payment report', function (done) {
            currencyCloud.reports.create_payment_report(new mock.reports.report2())
                .then(function (created) {
                    expect(mock.reports.schema.validate(created)).is.true;
                    done();
                })
                .catch(done);
        });
    });
    describe('find_report_requests', function () {
        it('successfully finds a report', function (done) {
            currencyCloud.reports.find_report_request({
                perPage: '1'
            })
                .then(function (found) {
                    expect(found).to.have.property('reportRequests').to.not.be.empty;
                    expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                    done();
                })
                .catch(done);
        });
    });

    describe('find_via_id', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.reports.find_report_via_id(/*no params*/);
            }).to.throw();
        });

        it('successfully finds a report_request', function (done) {
            currencyCloud.reports.create_conversion_report(new mock.reports.report1())
                .then(function (created) {
                    return currencyCloud.reports.find_report_via_id({
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
});
