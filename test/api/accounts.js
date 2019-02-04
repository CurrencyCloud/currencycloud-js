'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('accounts');
var setup = prepost.setup;
var teardown = prepost.teardown;

describe('accounts', function() {
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

  describe('create', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.accounts.create({
          accountName: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.accounts.create({
          legalEntityType: 'present'
        });
      }).to.throw();
    });

    it('successfully creates an account', function(done) {
      currencyCloud.accounts.create(new mock.accounts.account1())
      .then(function(created) {
        expect(mock.accounts.schema.validate(created)).is.true;
        expect(created).to.deep.include(mock.accounts.account1);

        done();
      })
      .catch(done);
    });
  });

  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.accounts.get(/*no params*/);
      }).to.throw();
    });

    it('successfully gets an account', function(done) {
      currencyCloud.accounts.create(new mock.accounts.account1())
      .then(function(created) {
        return currencyCloud.accounts.get({
          id: created.id
        })
        .then(function(gotten) {
          expect(gotten).to.eql(created);
          done();
        });
      })
      .catch(done);
    });
  });

  describe('update', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.accounts.update(/*no params*/);
      }).to.throw();
    });

    it('successfully updates an account', function(done) {
      currencyCloud.accounts.create(new mock.accounts.account1())
      .then(function(created) {
        var account = new mock.accounts.account2();
        account.id = created.id;

        return currencyCloud.accounts.update(account)
        .then(function(updated) {
          return currencyCloud.accounts.get({
            id: created.id
          })
          .then(function(gotten) {
            expect(gotten).to.eql(updated);
            done();
          });
        });
      })
      .catch(done);
    });
  });

  describe('find', function() {
    it('successfully finds an account', function(done) {
      currencyCloud.accounts.getCurrent()
      .then(function(current) {
        return currencyCloud.accounts.find({
          accountName: current.accountName,
          order: 'created_at',
          orderAscDesc: 'desc',
          perPage: 5
        })
        .then(function(found) {
          expect(found).to.have.property('accounts').that.deep.includes(current);
          expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
          done();
        });
      })
      .catch(done);
    });
  });

  describe('getCurrent', function() {
    it('successfully gets current account', function(done) {
      currencyCloud.accounts.getCurrent()
      .then(function(current) {
        expect(mock.accounts.schema.validate(current)).is.true;
        done();
      })
      .catch(done);
    });
  });
});