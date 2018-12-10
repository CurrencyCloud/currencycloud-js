'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('vans');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('vans', function () {
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
        it('successfully gets virtual accounts', function (done) {
            currencyCloud.vans.get()
                .then(function (gotten) {
                    expect(gotten).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                    expect(gotten.virtualAccounts[0]).that.satisfy(mock.vans.schema.validate);
                    done();
                })
                .catch(done);
        });
    });

    describe('find', function () {
        it('successfully finds virtual accounts', function (done) {
            currencyCloud.vans.find()
                .then(function (gotten) {
                    expect(gotten).to.have.property('virtualAccounts');
                    expect(gotten.virtualAccounts[0]).that.satisfy(mock.vans.schema.validate);
                    expect(gotten).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
                    done();
                })
                .catch(done);
        });
    });
});
