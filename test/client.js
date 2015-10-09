/* jshint expr: true */
/* global expect: true */

'use strict';

var client = require('../lib/client')();
var expect = require('chai').expect;

describe('client.authenticate', function(){
  var login = {
    good: function() {
      return client.authenticate({
        mode: 'demo', 
        loginId: 'your_login_id', 
        apiKey: 'your_api_key',
        authUrl: '/v2/authenticate/api'
      });
    },
    bad: function() {
      return client.authenticate({
        mode: 'demo', 
        loginId: 'wrong', 
        apiKey: 'wrong',
        authUrl: '/v2/authenticate/api'
      });
    }
  };
  
  it('retrieves nonempty authentication token on success', function(done) {
    login.good()
      .then(function(token) {
        expect(token).to.exist;
        done();
      });
  });
  
  it('persists authentication token and thus can make subsequent API calls', function() {
    
  });
  
  it('exposes nonempty error on fail', function(done) {
    login.bad()
      .catch(function(err) {
        expect(err).to.exist;
        done();
    });
  });
});

describe('client.request', function(){
  it('exposes nonempty error on fail', function() {

  });
});