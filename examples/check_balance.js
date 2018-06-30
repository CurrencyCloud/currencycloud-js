/**
 * This is JavaScript implementation of the
 * {@link https://www.currencycloud.com/developers/cookbooks/ Currency Cloud API v2.0 Cookbook} example.
 * Additional documentation for each API endpoint can be found at {@link https://www.currencycloud.com/developers/overview}.
 * If you have any queries or you require support, please contact our Support team at {@link support@currencycloud.com}.
 */

'use strict';

let currencyCloud = require('../lib/currency-cloud');
const opts = {
  retries: 3,
  factor: 2,
  minTimeout: Math.random() * 750,
  maxTimeout: Math.random() * 30000 + 30000,
  randomize: true,
  log: true
};

let checkBalance = {
  currency: "EUR"
};

/**
 * Checking your balances
 * In this cookbook, you will check how much money you hold in various foreign currencies in your Currencycloud account.
 */

/**
 * 1. Authenticate using valid credentials.
 * If you do not have a valid Login ID and API Key, you can get one by registering at
 * {@link https://www.currencycloud.com/developers/register-for-an-api-key/}
 */

let login = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.authentication.login({
        environment: 'demo',
        loginId: 'development@currencycloud.com',
        apiKey: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'
      });
    },
    opts,
    "currencyCloud.authentication.login"
  );
};

/**
 * 2. Check your balance for a specific currency
 * To find out how many Euros you have, call the Get Balance endpoint, passing EUR as the third URI path parameter.
 */

let getBalance = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.balances.get(checkBalance)
        .then((res) => {
          console.log('getBalance: ' + JSON.stringify(res, null, 2) + '\n');
        });
    },
    opts
  );
};

/**
 * To get a balance for any of your client sub-accounts, simply provide the sub-account UUID via the on_behalf_of query
 * string parameter.
 */

/**
 * 3. Get detailed currency balances
 * Alternatively, the Find Balances endpoint will tell you the value of all foreign currencies that you hold in your main
 * Currencycloud account.
 */

let findBalances = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.balances.find()
        .then((res) => {
          console.log('findBalance: ' + JSON.stringify(res, null, 2) + '\n');
        });
    }
  );
};

/**
 * To fetch balances for any of your client sub-accounts, simply provide the sub-account UUID via the on_behalf_of query
 * string parameter.
 */

/**
 * 4. Logout
 * It is good security practice to retire authentication tokens when they are no longer needed, rather than let them
 * expire. Send a request to the Logout endpoint to terminate an authentication token immediately.
 */

let logout = () => {
  return currencyCloud.authentication.logout()
    .then(() => {
      console.log('logout\n');
    });
};

login()
  .then(getBalance)
  .then(findBalances)
  .then(logout)
  .catch((err) => {
    if (err instanceof currencyCloud.APIerror) {
      console.log(err.toYAML());
    }
    else {
      console.log(err);
    }
  });
