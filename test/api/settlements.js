'use strict';

var currencyCloud = require('../../lib/currency-cloud');
var expect = require('chai').expect;
var mock = require('../mocks');
var prepost = require('../prepost');
var recorder = prepost.recorder('settlements');
var setup = prepost.setup;
var teardown = prepost.teardown;

var getPrerequisites = function() {
  var promise = currencyCloud.conversions.create(new mock.conversions.conversion1())
  .then(function(conversion) {
    return conversion.id;
  });

  return promise;
};

describe('settlements', function() {
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
    it('successfully creates a settlement', function(done) {
      currencyCloud.settlements.create(new mock.settlements.settlement1())
      .then(function(created) {
        expect(mock.settlements.schema.validate(created)).is.true;
        done();
      })
      .catch(done);
    });
  });
  
  describe('get', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.get(/*no params*/);
      }).to.throw();
    });
    
    it('successfully gets a settlement', function(done) {
      currencyCloud.settlements.create(new mock.settlements.settlement1())
      .then(function(created) {
        return currencyCloud.settlements.get({
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
  
  describe('find', function() {
    it('successfully finds a settlement', function(done) {
      currencyCloud.settlements.create(new mock.settlements.settlement1())
      .then(function(created) {
        return currencyCloud.settlements.find({
          order: 'created_at',
          orderAscDesc: 'desc',
          perPage: 5
        })
        .then(function(found) {
          expect(found).to.have.property('settlements').that.contain(created);
          expect(found).to.have.property('pagination').that.satisfy(mock.pagination.schema.validate);
          done();
        });
      })
      .catch(done);
    });
  });
  
  describe('delete', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.delete(/*no params*/);
      }).to.throw();
    });
    
    it('successfully deletes a settlement', function(done) {
      currencyCloud.settlements.create(new mock.settlements.settlement1())
      .then(function(created) {
        return currencyCloud.settlements.delete({
          id: created.id
        })
        .then(function(deleted) {
          expect(mock.settlements.schema.validate(deleted)).is.true;
          
          return currencyCloud.settlements.get({
            id: deleted.id
          })
          .then(function() {
            done(new Error('should have failed.'));
          })
          .catch(function(err) {
            expect(err.response.statusCode).equals(404);
            done();
          });
        });
      })
      .catch(done);      
    });
  });
  
  describe('addConversion', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.addConversion({
          id: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.settlements.addConversion({
          conversionId: 'present'
        });
      }).to.throw();
    });
    
    it('successfully adds conversion to a settlement', function(done) {
      getPrerequisites()
      .then(function(conversionId) {
        return currencyCloud.settlements.create(new mock.settlements.settlement1())
        .then(function(created) {
          return currencyCloud.settlements.addConversion({
            id: created.id,
            conversionId: conversionId
          })
          .then(function(res) {
            expect(mock.settlements.schema.validate(res)).is.true;
            expect(res.conversionIds).to.have.length(1);
            expect(res.conversionIds).to.include(conversionId);
            done();
          });
        });
      })
      .catch(done);
    });
  });
  
  describe('removeConversion', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.removeConversion({
          id: 'present'
        });
      }).to.throw();
      expect(function() {
        currencyCloud.settlements.removeConversion({
          conversionId: 'present'
        });
      }).to.throw();
    });
    
    it('successfully removes conversion from a settlement', function(done) {
      getPrerequisites()
      .then(function(conversionId) {
        return currencyCloud.settlements.create(new mock.settlements.settlement1())
        .then(function(created) {
          return currencyCloud.settlements.addConversion({
            id: created.id,
            conversionId: conversionId
          })
          .then(function() {
            return currencyCloud.settlements.removeConversion({
              id: created.id,
              conversionId: conversionId
            })
            .then(function(res) {
              expect(mock.settlements.schema.validate(res)).is.true;
              expect(res.conversionIds).to.be.empty;
              done();
            });
          });
        });
      })
      .catch(done);
    });
  });

  describe('release', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.release(/*no params*/);
      }).to.throw();
    });
    
    it('successfully releases a settlement', function(done) {
      getPrerequisites()
      .then(function(conversionId) {
        return currencyCloud.settlements.create(new mock.settlements.settlement1())
        .then(function(created) {
          return currencyCloud.settlements.addConversion({
            id: created.id,
            conversionId: conversionId
          })
          .then(function() {
            return currencyCloud.settlements.release({
              id: created.id
            })
            .then(function(res) {
              expect(mock.settlements.schema.validate(res)).is.true;
              expect(res.status).to.equal('released');
              done();
            });
          });
        });
      })
      .catch(done);
    });
  });
  
  describe('unrelease', function() {
    it('fails if required parameters are missing', function() {
      expect(function() {
        currencyCloud.settlements.unrelease(/*no params*/);
      }).to.throw();
    });
    
    it('successfully unreleases a settlement', function(done) {
      getPrerequisites()
      .then(function(conversionId) {
        return currencyCloud.settlements.create(new mock.settlements.settlement1())
        .then(function(created) {
          return currencyCloud.settlements.addConversion({
            id: created.id,
            conversionId: conversionId
          })
          .then(function() {
            return currencyCloud.settlements.release({
              id: created.id
            })
            .then(function() {
              return currencyCloud.settlements.unrelease({
                id: created.id
              })
              .then(function(res) {
                expect(mock.settlements.schema.validate(res)).is.true;
                expect(res.status).to.equal('open');
                done();
              });
            });
          });
        });
      })
      .catch(done);
    });
  });
});