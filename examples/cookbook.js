/**
 * This is JavaScript implementation of the
 * {@link https://connect.currencycloud.com/documentation/getting-started/cookbook Currency Cloud API v2.0 Cookbook example}.
 */

'use strict';

var currencyCloud = require('../../currency-cloud');

var login = function() {
  return currencyCloud.authentication.login('demo', 'login_id', 'api_key');
};

var getQuote = function() {
  return currencyCloud.rates.get('EUR', 'GBP', 'buy', 10000)
    .then(console.log);
};

var logout = function() {
  return currencyCloud.authentication.logout();
};

login()
  .then(getQuote)
  .then(logout);