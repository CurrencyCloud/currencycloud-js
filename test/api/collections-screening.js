'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('collections-screening');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('collections-screening', function () {
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

    describe('complete screening', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.collectionsScreening.complete(/*no params*/);
            }).to.throw();
        });
        it('successfully completes screening', function (done) {
            currencyCloud.collectionsScreening.complete({
                id: '272d42b9-9b97-4407-ac08-d75cd067cd12',
                accepted: "true",
                reason: "Accepted"
            })
                .then(function (gotten) {
                    expect(gotten).to.have.property('transactionId').to.eql('272d42b9-9b97-4407-ac08-d75cd067cd12');
                    expect(gotten).to.have.property('accountId').to.eql('f2ea2099-306e-47a6-8fb0-123b304e601c');
                    expect(gotten).to.have.property('houseAccountId').to.eql('f276146d-0a35-4df9-b9d7-fff869fadd8e');
                    expect(gotten).to.have.property('result').is.not.null;
                    expect(gotten.result).to.have.property('accepted').to.eql(true);
                    expect(gotten.result).to.have.property('reason').to.eql("Accepted");
                    done();
                })
                .catch(done);
        });
    });
});