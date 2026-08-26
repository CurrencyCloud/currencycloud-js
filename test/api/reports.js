'use strict';

var currencyCloud = require('../../lib/currency-cloud').createClient();
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('reports');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('reports', function () {
    before(function (done) {
        recorder.read();
        setup.login(currencyCloud)
            .then(function () {
                done();
            });
    });

    after(function (done) {
        teardown.logout(currencyCloud)
            .then(function () {
                recorder.write(done);
            });
    });

    describe('createConversionReport', function () {
        it('successfully creates conversion report', function (done) {
            currencyCloud.reports.createConversionReport(new mock.reports.report1())
                .then(function (created) {
                    expect(mock.reports.schema.validate(created)).is.true;
                    done();
                })
                .catch(done);
        });
    });

    describe('createPaymentReport', function () {
        it('successfully create payment report', function (done) {
            currencyCloud.reports.createPaymentReport(new mock.reports.report2())
                .then(function (created) {
                    expect(mock.reports.schema.validate(created)).is.true;
                    done();
                })
                .catch(done);
        });
    });

    describe('findReportRequests', function () {
        it('successfully finds a report', function (done) {
            currencyCloud.reports.findReportRequest({
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

    describe('findReportViaId', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.reports.findReportViaId(/*no params*/);
            }).to.throw();
        });

        it('successfully finds a report_request', function (done) {
            currencyCloud.reports.createConversionReport(new mock.reports.report1())
                .then(function (created) {
                    return currencyCloud.reports.findReportViaId({
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
