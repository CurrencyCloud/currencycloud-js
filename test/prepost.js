'use strict';

var client = require('../lib/client');
var mocks = require('./mocks');

module.exports = {
  setup: {
    login: function() {
      return client.authenticate(mocks.authentication.credentials);
    }
  },

  teardown: {
    logout: function() {
      return client.request({
        url: '/v2/authenticate/close_session',
        method: 'POST'
      });
    }
  }
};