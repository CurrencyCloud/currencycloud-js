'use strict';

var currencyCloud = require('../../lib/currency-cloud').createClient();
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('funding');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('funding', function() {
    before(function(done) {
        recorder.read();
        setup.login(currencyCloud)
            .then(function() {
                done();
            });
    });

    after(function(done) {
        teardown.logout(currencyCloud)
            .then(function() {
                recorder.write(done);
            });
    });

    describe('findFundingAccounts', function () {
        it('successfully find  funding accounts', function (done) {
            currencyCloud.funding.findFundingAccounts({
                currency: 'GBP',
                per_page: '5'
            })
                .then(function (res) {
                    expect(res).is.not.empty;
                    expect(res).to.have.property('fundingAccounts').that.is.not.null;

                    expect(res.fundingAccounts[0]).to.have.property('id').that.eql("b7981972-8e29-485b-8a4a-9643fc6ae3sa");
                    expect(res.fundingAccounts[0]).to.have.property('accountId').that.eql("8d98bdc8-e8e3-47dc-bd08-3dd0f4f7ea7b");
                    expect(res.fundingAccounts[0]).to.have.property('accountNumber').that.eql("012345678");
                    expect(res.fundingAccounts[0]).to.have.property('accountNumberType').that.eql("account_number");
                    expect(res.fundingAccounts[0]).to.have.property('accountHolderName').that.eql("Jon Doe");
                    expect(res.fundingAccounts[0]).to.have.property('bankName').that.eql("Starling");
                    expect(res.fundingAccounts[0]).to.have.property('bankAddress').that.eql("3rd floor, 2 Finsbury Avenue, London, EC2M 2PP, GB");
                    expect(res.fundingAccounts[0]).to.have.property('bankCountry').that.eql("UK");
                    expect(res.fundingAccounts[0]).to.have.property('currency').that.eql("GBP");
                    expect(res.fundingAccounts[0]).to.have.property('paymentType').that.eql("regular");
                    expect(res.fundingAccounts[0]).to.have.property('routingCode').that.eql("010203");
                    expect(res.fundingAccounts[0]).to.have.property('routingCodeType').that.eql("sort_code");
                    expect(res.fundingAccounts[0]).to.have.property('createdAt').that.eql("2018-05-14T14:18:30+00:00");
                    expect(res.fundingAccounts[0]).to.have.property('updatedAt').that.eql("2018-05-14T14:19:30+00:00");

                    expect(res).to.have.property('pagination').that.is.not.null;
                    expect(res.pagination).to.have.property('totalEntries').that.eql(1);
                    expect(res.pagination).to.have.property('totalPages').that.eql(1);
                    expect(res.pagination).to.have.property('currentPage').that.eql(1);
                    expect(res.pagination).to.have.property('perPage').that.eql(5);
                    expect(res.pagination).to.have.property('previousPage').that.eql(-1);
                    expect(res.pagination).to.have.property('nextPage').that.eql(-1);
                    expect(res.pagination).to.have.property('order').that.eql("created_at");
                    expect(res.pagination).to.have.property('orderAscDesc').that.eql("desc");

                    done();
                })
                .catch(done);
        });
    });

    describe('getFundingTransaction', function () {
        it('fails if required parameters are missing', function () {
            expect(function () {
                currencyCloud.funding.getFundingTransaction(/*no params*/);
            }).to.throw();
        });

        it('successfully gets a funding transaction', function (done) {
            currencyCloud.funding.getFundingTransaction({
                id: '4924919a-6c28-11ee-a3e3-63774946bad2'
            })
                .then(function (gotten) {
                    expect(gotten).is.not.empty;
                    expect(gotten).to.have.property('id').that.eql('4924919a-6c28-11ee-a3e3-63774946bad2');
                    expect(gotten).to.have.property('amount').that.eql('1.11');
                    expect(gotten).to.have.property('currency').that.eql('USD');
                    expect(gotten).to.have.property('rail').that.eql('SEPA');
                    expect(gotten).to.have.property('additionalInformation').that.eql('ABCD20231016143117');
                    expect(gotten).to.have.property('receivingAccountRoutingCode').that.eql('123456789');
                    expect(gotten).to.have.property('receivingAccountNumber').that.eql('32847346');
                    expect(gotten).to.have.property('receivingAccountIban').that.eql(null);
                    expect(gotten).to.have.property('valueDate').that.eql('2022-12-03T10:00:00+00:00');
                    expect(gotten).to.have.property('createdAt').that.eql('2022-12-03T10:15:30+00:00');
                    expect(gotten).to.have.property('updatedAt').that.eql('2022-12-03T10:15:30+00:00');
                    expect(gotten).to.have.property('completedAt').that.eql('2022-12-03T10:15:30+00:00');
                    expect(gotten).to.have.property('sender').that.is.not.null;
                    expect(gotten.sender).to.have.property('senderAccountNumber').that.eql('8119645406');
                    expect(gotten.sender).to.have.property('senderAddress').that.eql('Some street');
                    expect(gotten.sender).to.have.property('senderBic').that.eql(null);
                    expect(gotten.sender).to.have.property('senderCountry').that.eql('GB');
                    expect(gotten.sender).to.have.property('senderIban').that.eql(null);
                    expect(gotten.sender).to.have.property('senderId').that.eql('5c675fa4-fdf0-4ee6-b5bb-156b36765433');
                    expect(gotten.sender).to.have.property('senderName').that.eql('Test sender');
                    expect(gotten.sender).to.have.property('senderRoutingCode').that.eql(null);
                    done();
                })
                .catch(done);
        });
    });

});