'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var prepost = require('../prepost');
var recorder = prepost.recorder('error-test');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('apierror', function () {
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

    describe('handle bad request error', function () {
        it('successfully format bad request error response', function (done) {
            currencyCloud.payments.delete({id: "abc"})
                .then(function (res) {
                    expect(res).is.empty;
                    done();
                })
                .catch(function (res) {
                        expect(res).is.not.empty;
                        expect(res).is.instanceOf(currencyCloud.BadRequestError);
                        expect(res).to.have.property('response').that.is.not.null;
                        expect(res.response).to.have.property('statusCode').that.eql(400);
                        expect(res.response).to.have.property('date').that.eql('Thu, 18 Jun 2020 08:46:55 GMT');
                        expect(res.response).to.have.property('requestId').that.eql('df217539-1ccc-467c-ba3c-675fef035885');
                        expect(res).to.have.property('errors').that.is.not.null;
                        expect(res.errors[0]).to.have.property('field').that.eql('id');
                        expect(res.errors[0]).to.have.property('code').that.eql('id_is_not_valid_uuid');
                        expect(res.errors[0]).to.have.property('message').that.eql('id should be in UUID format');
                        expect(res.errors[0]).to.have.property('params').that.is.empty;
                        expect(res.errors[1]).to.have.property('field').that.eql('onBehalfOf');
                        expect(res.errors[1]).to.have.property('code').that.eql('on_behalf_of_is_not_valid_uuid');
                        expect(res.errors[1]).to.have.property('message').that.eql('on_behalf_of should be in UUID format');
                        expect(res.errors[1]).to.have.property('params').that.is.empty;
                        done();
                    }
                );
        });
    });

    describe('handle badly formatted error response', function () {
        it('successfully format bad request error response that is not formatted correctly', function (done) {
            currencyCloud.reference.getBankDetails({
                identifierType: 'iban',
                identifierValue: '123'})
                .then(function (res) {
                    expect(res).is.empty;
                    done();
                })
                .catch(function (res) {
                        expect(res).is.not.empty;
                        expect(res).is.instanceOf(currencyCloud.BadRequestError);
                        expect(res).to.have.property('response').that.is.not.null;
                        expect(res.response).to.have.property('statusCode').that.eql(400);
                        expect(res.response).to.have.property('date').that.eql('Thu, 18 Jun 2020 10:10:18 GMT');
                        expect(res.response).to.have.property('requestId').that.eql('887d4999-d021-4333-8593-34a3f27587dc');
                        expect(res).to.have.property('errors').that.is.not.null;
                        expect(res.errors[0]).to.have.property('field').that.eql('base');
                        expect(res.errors[0]).to.have.property('code').that.eql('invalid_iban');
                        expect(res.errors[0]).to.have.property('message').that.eql('IBAN is invalid.');
                        expect(res.errors[0]).to.have.property('params').that.is.empty;
                        done();
                    }
                );
        });
    });

    describe('handle well formatted 500 error response', function () {
        it('successfully respond with InternalApplicationError', function (done) {
            currencyCloud.payments.create({
                onBehalfOf: '4224b460-f6c3-4d4d-842f-67c5fbe5461b',
                beneficiaryId: '0ebad221-e846-420a-8abc-9a4136b7a500',
                currency: 'EUR',
                amount: '1.00',
                reason: 'Test Good Error Response',
                paymentType: 'priority',
                reference: '3a4bca96-8f59-4eef-bbfc-6592744609c3'
            })
                .then(function (res) {
                    expect(res).is.empty;
                    done();
                })
                .catch(function (res) {
                        expect(res).is.not.empty;
                    expect(res).is.instanceOf(currencyCloud.InternalApplicationError);
                        done();
                    }
                );
        });
    });

    describe('handle badly formatted 500 error response', function () {
        it('successfully respond with InternalApplicationError again', function (done) {
            currencyCloud.payments.create({
                onBehalfOf: '4224b460-f6c3-4d4d-842f-67c5fbe5461b',
                beneficiaryId: '0ebad221-e846-420a-8abc-9a4136b7a500',
                currency: 'EUR',
                amount: '1.00',
                reason: 'Test Bad Error Response',
                paymentType: 'priority',
                reference: '53db7778-75a9-447d-baf0-d09deb9a4ba6'
            })
                .then(function (res) {
                    expect(res).is.empty;
                    done();
                })
                .catch(function (res) {
                        expect(res).is.not.empty;
                        expect(res).is.instanceOf(currencyCloud.InternalApplicationError);
                        done();
                    }
                );
        });
    });

    describe('handle really badly formatted 500 error response', function () {
        it('successfully respond with InternalApplicationError one more time', function (done) {
            currencyCloud.payments.create({
                onBehalfOf: '4224b460-f6c3-4d4d-842f-67c5fbe5461b',
                beneficiaryId: '0ebad221-e846-420a-8abc-9a4136b7a500',
                currency: 'EUR',
                amount: '1.00',
                reason: 'Test Really Bad Error Response',
                paymentType: 'priority',
                reference: '99d5d977-0c6a-4d31-a328-e9e51384db45'
            })
                .then(function (res) {
                    expect(res).is.empty;
                    done();
                })
                .catch(function (res) {
                        expect(res).is.not.empty;
                        console.log("================ JON =============");
                        console.log(res);
                        console.log("================ JON =============");
                        expect(res).is.instanceOf(currencyCloud.InternalApplicationError);
                        expect(res.errors[0]).to.have.property('field').that.eql('base');
                        expect(res.errors[0]).to.have.property('code').that.eql('badly_formatted_error_response');
                        done();
                    }
                );
        });
    });

});