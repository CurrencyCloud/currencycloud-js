'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('terms-and-conditions');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('termsAndConditions', function() {
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

  describe('accept', function(){
    it('fails if required parameters are missing', function(){
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().type(null));
      }).to.throw();
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().version(null));
      }).to.throw();
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().referenceType(null));
      }).to.throw();
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().referenceId(null));
      }).to.throw();
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().first_name(null));
      }).to.throw();
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().last_name(null));
      }).to.throw();
      expect(function(){
        currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept().email(null));
      }).to.throw();
    });

    it('successfully accepts terms and conditions', function(done){
      currencyCloud.termsAndConditions.accept(new mock.termsAndConditions.accept())
      .then(function(acceptance){
        expect(mock.termsAndConditions.schema.validate(acceptance)).is.true;
        expect(acceptance).to.have.property('acceptanceId').that.eql('e781c919-a733-11ef-8de2-0242ac1d0002');
        expect(acceptance).to.have.property('acceptedAt').that.eql('2024-10-04T15:27:04');

        done();
      })
      .catch(done);
    });
  });

});