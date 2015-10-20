'use strict';

var client = require('../lib/client');
var mock = require('./mocks').authentication;
var nock = require('nock');
var path = require('path');
var fs = require('fs');

module.exports = {
  recorder: function(name) {
    var recPath = path.normalize('test/api/recordings/' + name + '.js');
    var isRec;  
    
    return {
      read: function () {
        try {
          require('../' + recPath);

          isRec = true;
        } 
        catch (e) {
          nock.recorder.rec({
            dont_print: true
          });

          isRec = false;
        }
      },

      write: function(done) {
        if (!isRec) {
          var recordings = nock.recorder.play();
          var recText = 'var nock = require(\'nock\');\n';

          recordings.forEach(function(rec) {
            recText = recText + decodeURIComponent(rec);
          });

          fs.writeFile(recPath, recText, done);
        } 
        else {
          done();
        }
      }
    };
  },
  
  setup: {
    login: function(done) {
      client.authenticate(mock.credentials)
      .then(function() {
        done();
      })
      .catch(done);
    }
  },

  teardown: {
    logout: function(done) {
      client.close({
        url: '/v2/authenticate/close_session'
      })
      .then(function() {
        done();
      })
      .catch(done);
    }
  }
};