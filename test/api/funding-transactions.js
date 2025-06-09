'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('funding-transactions');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('fundingTransactions', function () {
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

    describe('get funding transaction', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.fundingTransactions.getFundingTransaction(/*no params*/);
            }).to.throw();
        });
        it('successfully get funding transaction', function (done) {
            currencyCloud.fundingTransactions.getFundingTransaction({
                id: 'e68301d3-5b04-4c1d-8f8b-13a9b8437040'
            })
                .then(function (gotten) {
                    expect(gotten).to.have.property('id').to.eql('e68301d3-5b04-4c1d-8f8b-13a9b8437040');
                    expect(gotten).to.have.property('amount').that.is.not.null;
                    expect(gotten).to.have.property('currency').to.eql('USD');
                    expect(gotten).to.have.property('sender').that.is.not.null;
                    done();
                })
                .catch(done);
        });
    });
});