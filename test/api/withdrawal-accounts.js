'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('withdrawal-accounts');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('withdrawalAccounts', function () {
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

    describe('find', function () {
        it('successfully finds withdrawal accounts', function (done) {
            currencyCloud.withdrawalAccounts.find(
                {account_id: "72970a7c-7921-431c-b95f-3438724ba16f"}
            )
                .then(function (gotten) {
                    expect(gotten).to.have.property('withdrawalAccounts').that.has.length(1);
                    expect(gotten.withdrawalAccounts[0]).that.satisfy(mock.withdrawalAccounts.schema.validate);
                    expect(gotten).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                    done();
                })
                .catch(done);
        });
    });

    describe('find2', function () {
        it('successfully finds 2 withdrawal accounts', function (done) {
            currencyCloud.withdrawalAccounts.find(/*no params*/)
                .then(function (gotten) {
                    expect(gotten).to.have.property('withdrawalAccounts').that.has.length(2);
                    expect(gotten.withdrawalAccounts[0]).that.satisfy(mock.withdrawalAccounts.schema.validate);
                    expect(gotten.withdrawalAccounts[1]).that.satisfy(mock.withdrawalAccounts.schema.validate);
                    expect(gotten).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                    done();
                })
                .catch(done);
        });
    });
});