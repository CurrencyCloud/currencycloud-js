[![npm](https://img.shields.io/npm/v/currency-cloud.svg)](https://www.npmjs.com/package/currency-cloud) [![Travis](https://travis-ci.org/CurrencyCloud/currencycloud-js.svg?branch=master)](https://github.com/CurrencyCloud/currencycloud-js) [![David](https://david-dm.org/CurrencyCloud/currencycloud-js.svg)](https://github.com/CurrencyCloud/currencycloud-js)

# Currencycloud
This is the official Javascript SDK for v2 of Currencycloud's API. Additional documentation for each API endpoint can be found at [Currencycloud API documentation][introduction]. If you have any queries or you require support, please contact our development team at development@currencycloud.com

## Installation
This library is distributed on `npm`. In order to add it as a dependency, run the following command:
```sh
$ npm install currency-cloud --save
```

## Supported Node versions
The current least supported Node version is 6.0.0.

**2020-10-12 : Deprecation Notice.** Support for the following EOL Node.js versions will be dropped in January 2021

6, 7, 8, 9, 11   

After this date, the SDK will no longer be tested against these versions. 
Production applications should only use Active LTS or Maintenance LTS Node.js releases. Users should upgrade to the latest 
stable version of [Node.js](https://nodejs.org/en/about/releases/)
# Usage
The following example retrieves all tradeable currencies list:
```js
var currencyCloud = require('currency-cloud');

currencyCloud.authentication.login({
  environment: 'demo', 
  loginId: 'valid_login_id', 
  apiKey: 'valid_api_key'
})
.then(currencyCloud.reference.getAvailableCurrencies)
.then(function(res) {
  console.log('available currencies: ' + JSON.stringify(res.currencies, null, 2));    
})
.then(currencyCloud.balances.find)
.then(function(res) {
  console.log('balances: ' + JSON.stringify(res.balances, null, 2));    
})
.then(currencyCloud.authentication.logout)
.catch(console.log);
```
More extensive examples can be found in the [examples] folder.

## Service client
To interact with the various Currencycloud's APIs a service client object must be created; then a particular API can be accessed via the corresponding property of this object:
```js
// create service client object
var currencyCloud = require('currency-cloud');

// access authentication API
currencyCloud.authentication.login({
  environment: 'demo', 
  loginId: 'valid_login_id', 
  apiKey: 'valid_api_key'
})
.then(function() {
  // access reference API
  return currencyCloud.reference.getBeneficiaryRequiredDetails({
    currency: 'EUR',
    bankAccountCountry: 'DE'
  });
})
.then(console.log)
.then(currencyCloud.authentication.logout);
```
Supported APIs are listed in the [Currencycloud API overview][overview].

## Authentication
Prior to calling API functions authentication is required. It is performed as follows:
```js
var currencyCloud = require('currency-cloud');

currencyCloud.authentication.login({
  environment: 'demo', // environment to run API calls against, one of those listed in 'settings' section of package.json 
  loginId: 'login_id', // login id of the API user, as specified during registration
  apiKey: 'api_key'    // corresponding API key, obtained upon registration
})
.then(function(token) {
  ...
});
```
The above code retrieves authentication token, which is passed with all subsequent API calls. If a call fails due to token is expired, then re-authentication is attempted, so that the token is refreshed and the failed request is retried.

When working with API is finished, it is recommended to close the session by calling `currencyCloud.authentication.logout()`.

## Passing parameters
SDK functions accept arguments as a single object, which holds both required and optional parameters: 
```js
var currencyCloud = require('currency-cloud');

currencyCloud.accounts.create({
  /* required parameters */
  accountName: 'Firma AB',
  legalEntityType: 'company',
  
  /* optional parameters */
  status: 'enabled',
  street: 'Sergels Torg 2',
  city: 'Stockholm',
  postalCode: '10640',
  country: 'SE',
  spreadTable: 'no_markup',
  identificationType: 'none'
})
.then(console.log);
```
Function arguments as well as return objects and errors are camelCased.

## Promises
Each API call is an asynchronous operation, so Promises/A+ pattern is used heavily throughout the SDK. Every function, if not synchronously throwing an Error, returns a then-able promise.

## Exponential Backoff & Retry Strategy
Requests over the internet will fail on occasion for seemingly no apparent reason, and the SDK includes a comprehensive set of error handling capabilities to help troubleshoot those situations. Sometimes however, the best strategy is simply to retry. This is the case particularly with transient errors like **HTTP 429 - Too Many Requests**, but wrapping calls in for/while loops is discouraged as in some extreme cases this may trigger our anti-DoS defences.

As of version 1.14.1 we have introduced an Exponential Backoff with Jitter retry feature which we recommend you use to safely handle retries.

### retry(fn, [options])
Calls **_fn_** until the returned promise ends up fulfilled or rejected with an error different than `TooManyRequestsError`. The optional **_options_** argument is an object which maps to the following values:

* _retries_: The maximum amount of times to retry the operation. Default is `7`.
* _factor_: The exponential factor to use. Default is `2`.
* _minTimeout_: The number of milliseconds before starting the first retry. Default is a random value between `0` and `750` ms.
* _maxTimeout_: The maximum number of milliseconds between two retries. Default is a random value between `30` and `60` sec.
* _randomize_: Randomizes the timeouts by multiplying with a factor between `1` and `2`. Default is `true`.
* _log_: Logs retries to console if `true`. Default is `false`
* _name_: The name of **_fn_**. Helpful for logging and troubleshooting.

The **_fn_** function will receive a retry function as an argument that should be called with an error whenever you want to retry **_fn_**. The retry function will always throw an error.
If there're retries left, it will throw a special retry error that will be handled internally to call fn again. If there're no retries left, it will throw the actual error passed to it.

A typical use case is presented below. For more information see the [Cookbook examples][examples].

```js
var currencyCloud = require('currency-cloud');
const opts = {
  retries: 5, //Retry up to five times before giving up
  factor: 2, // Use an exponential wait
  minTimeout: Math.random() * 750, // Initial wait in ms
  maxTimeout: Math.random() * 30000 + 30000, // Maximum wait period in ms
  randomize: true // Apply a random jitter on each iteration
  log: true // Log retries to the console 
};

let findBalances = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.balances.find()
        .then(function (res) {
          console.log('findBalance: ' + JSON.stringify(res, null, 2));
        })
    },
    opts,
    "currencyCloud.balances.find"
  );
};
```

## On Behalf Of
Some API calls can be executed on behalf of another user (e.g. someone who has a sub-account with the logged in user). For this sake, `onBehalfOf` field with a value of corresponding contact id should be added to a parameters object of a SDK function:
```js
var currencyCloud = require('currency-cloud');

currencyCloud.rates.get({
  buyCurrency: 'SEK', 
  sellurrency: 'GBP', 
  fixedSide: 'buy',
  amount: 1000.5,
  onBehalfOf: '8f639ab2-2b85-4327-9eb1-01ee4f0c77bc'
})
.then(console.log);
```
Another option is to run a bunch of API calls using `onBehalfOf(id, promise)` method; it expects contact id and a promise as parameters and returns the given promise resolved:
```js
var currencyCloud = require('currency-cloud');

currencyCloud.onBehalfOf('8f639ab2-2b85-4327-9eb1-01ee4f0c77bc', function() {
  var beneficiary = {
    ...
  };
  var conversion = {
    ...
  };
  var payment = {
    ...
  };

  return currencyCloud.beneficiaries.create(beneficiary)
  .then(function(res) {
    payment.beneficiaryId = res.id;
  })
  .then(function() {
    return currencyCloud.conversions.create(conversion);
  })
  .then(function(res) {
    payment.conversionId = res.id
  })
  .then(function() {
    return currencyCloud.payments.create(payment);
  });
})
.then(console.log);
```
## Errors
If an API call fails, the SDK function returns rejected promise with the error wrapped into `APIerror` class object. More specifically, it's an object of one of the classes, inheriting from `APIerror` and representing different types of errors. Apart from standard serialization methods they expose `toYAML()` method, which converts error object to human-readable YAML string:
```js
var currencyCloud = require('currency-cloud');

currencyCloud.balances.get({
  currency: 'XYZ'
})
.catch(function(err) {
  // the error might be not of APIerror type (e.g connection error)
  if(err instanceof currencyCloud.APIerror) {
    console.log(err.toYAML());
  } 
  else {
    console.log(err);
  }  
});

/* outputs
BadRequestError
---
platform: node v4.1.1
request:
  parameters: {}
  verb: GET
  url: https://devapi.currencycloud.com/v2/balances/XYZ
response:
  statusCode: 400
  date: Mon, 09 Nov 2017 15:06:11 GMT
  requestId: 2914269054259094430
errors:
- field: currency
  code: currency_is_in_invalid_format
  message: currency is not a valid ISO 4217 currency code
  params:
    type: currency
*/
```

# Development

## Dependencies
* [combined-stream][combined-stream]
* [request][request]
* [request-promise][request-promise]
* [retry][retry]
* [uuid][uuid]

## Contributing
**We welcome pull requests from everyone!** Please see [CONTRIBUTING][contr]

Our sincere thanks for [helping us][hof] create the best API for moving money anywhere around the world!

## Versioning
This project uses [semantic versioning][semver]. You can safely express a dependency on a major version and expect all minor and patch versions to be backwards compatible.

## Deprecation Policy
Technology evolves quickly and we are always looking for better ways to serve our customers. From time to time we need to make room for innovation by removing sections of code that are no longer necessary. We understand this can be disruptive and consequently we have designed a Deprecation Policy that protects our customers' investment and that allows us to take advantage of modern tools, frameworks and practices in developing software.

Deprecation means that we discourage the use of a feature, design or practice because it has been superseded or is no longer considered efficient or safe but instead of removing it immediately, we mark it as **@deprecated** to provide backwards compatibility and time for you to update your projects. While the deprecated feature remains in the SDK for a period of time, we advise that you replace it with the recommended alternative which is explained in the relevant section of the code.

We remove deprecated features after **three months** from the time of announcement.

The security of our customers' assets is of paramount importance to us and sometimes we have to deprecate features because they may pose a security threat or because new, more secure, ways are available. On such occasions we reserve the right to set a different deprecation period which may range from **immediate removal** to the standard **three months**. 

Once a feature has been marked as deprecated, we no longer develop the code or implement bug fixes. We only do security fixes.

### List of features being deprecated
```
(No features are currently being deprecated)
```

# Support
We actively support the latest version of the SDK. We support the immediate previous version on best-efforts basis. All other versions are no longer supported nor maintained.

# Testing
Testing of the SDK relies on the [Mocha][mocha] test framework, [Chai][chai] assertions library and [Nock][nock] HTTP mocking and expectations library. To run all test cases simply execute:
``` sh
$ npm run test
```
The SDK includes valid mocked HTTP responses in `./test/api/fixtures`. If you would like to test against the live API, please ensure there are no `js` files in that folder. The Nock library will regenerate them by recording the responses from the live run and use those next time the tests are executed.

IMPORTANT: Remember to change the `loginId` and `apiKey` properties in `./test/mocks.js` to use your login ID and API key.

If you don't have a valid login or key, you can get them [here][registration]

# Copyright
Copyright (c) 2015-2019 Currencycloud. See [LICENSE][license] for details.

[introduction]:    https://developer.currencycloud.com/documentation/getting-started/introduction
[overview]:        https://developer.currencycloud.com/documentation/api-docs/overview/
[examples]:        examples
[request-promise]: https://www.npmjs.com/package/request-promise
[combined-stream]: https://www.npmjs.com/package/combined-stream
[request]:         https://www.npmjs.com/package/request
[semver]:          http://semver.org/
[mocha]:           https://mochajs.org/
[chai]:            http://chaijs.com/
[nock]:            https://github.com/node-nock/nock
[registration]:    https://developer.currencycloud.com/api-register/
[license]:         LICENSE.md
[contr]:           CONTRIBUTING.md
[hof]:             HALL_OF_FAME.md
[retry]:          https://www.npmjs.com/package/retry
[uuid]:           https://www.npmjs.com/package/uuid
