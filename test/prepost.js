'use strict';

var client = require('../lib/client');
var mock = require('./mocks').authentication;
var nock = require('nock');
var path = require('path');
var fs = require('fs');

module.exports = {
  recorder: function(name) {
    var recPath = path.normalize('test/api/fixtures/' + name + '.js');
    var isRec;  
    
    return {
      read: function () {
        try {
          isRec = require('../' + recPath);
        } 
        catch (e) {
          nock.recorder.rec({
            dont_print: true
          });
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
    login: function() {
      return client.authenticate(mock.credentials);
    }
  },

  teardown: {
    logout: function() {
      return client.close({
        url: '/v2/authenticate/close_session'
      });
    }
  }
};