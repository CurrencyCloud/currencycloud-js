'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('quotes');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('quotes', function () {
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
                currencyCloud.quotes.create(/*no params*/);
            }).to.throw();
        });

        it('successfully creates a quote', function (done) {
            currencyCloud.quotes.create(new mock.quotes.quote1())
                .then(function (created) {
                    expect(mock.quotes.schema.validate(created)).is.true;
                    done();
                })
                .catch(done);
        });

        it('successfully creates a quote with conversion date preference', function (done) {
            currencyCloud.quotes.create(new mock.quotes.quote2())
                .then(function (created) {
                    expect(mock.quotes.schema.validate(created)).is.true;
                    expect(created).to.have.property('quoteId').that.is.not.empty;
                    expect(created).to.have.property('expiresAt').that.is.not.empty;
                    done();
                })
                .catch(done);
        });
    });
});
