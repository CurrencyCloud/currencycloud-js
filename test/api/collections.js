'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('collections');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('collections', function() {
    before(function(done) {
        recorder.read();
        setup.login()
            .then(function() {
                done();
            });
    });

    after(function(done) {
        teardown.logout()
            .then(function() {
                recorder.write(done);
            });
    });

    describe('completeCollectionsScreening', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.collections.completeCollectionsScreening(/*no params*/);
            }).to.throw();
            expect(function () {
                currencyCloud.collections.completeCollectionsScreening({transactionId: 'test-id'});
            }).to.throw();
            expect(function () {
                currencyCloud.collections.completeCollectionsScreening({transactionId: 'test-id', accepted: true});
            }).to.throw();
        });

        it('successfully accepts a transaction', function (done) {
            currencyCloud.collections.completeCollectionsScreening({
                transactionId: 'bdcca5e6-32fe-45f6-9476-6f8f518e6270',
                accepted: true,
                reason: 'accepted'
            })
                .then(function (result) {
                    expect(result).is.not.empty;
                    expect(result).to.have.property('transactionId').that.eql('bdcca5e6-32fe-45f6-9476-6f8f518e6270');
                    expect(result).to.have.property('accountId').that.eql('7a116d7d-6310-40ae-8d54-0ffbe41dc1c9');
                    expect(result).to.have.property('houseAccountId').that.eql('7a116d7d-6310-40ae-8d54-0ffbe41dc1c9');
                    expect(result).to.have.property('result').that.is.not.null;
                    expect(result.result).to.have.property('reason').that.eql('Accepted');
                    expect(result.result).to.have.property('accepted').that.eql(true);
                    done();
                })
                .catch(done);
        });

        it('successfully rejects a transaction', function (done) {
            currencyCloud.collections.completeCollectionsScreening({
                transactionId: 'cdcca5e6-32fe-45f6-9476-6f8f518e6271',
                accepted: false,
                reason: 'suspected_fraud'
            })
                .then(function (result) {
                    expect(result).is.not.empty;
                    expect(result).to.have.property('transactionId').that.eql('cdcca5e6-32fe-45f6-9476-6f8f518e6271');
                    expect(result).to.have.property('accountId').that.eql('7a116d7d-6310-40ae-8d54-0ffbe41dc1c9');
                    expect(result).to.have.property('houseAccountId').that.eql('7a116d7d-6310-40ae-8d54-0ffbe41dc1c9');
                    expect(result).to.have.property('result').that.is.not.null;
                    expect(result.result).to.have.property('reason').that.eql('suspected_fraud');
                    expect(result.result).to.have.property('accepted').that.eql(false);
                    done();
                })
                .catch(done);
        });
    });
});
