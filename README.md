[![npm](https://img.shields.io/npm/v/currency-cloud.svg)](https://www.npmjs.com/package/currency-cloud) [![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://github.com/CurrencyCloud/currencycloud-js) [![David](https://img.shields.io/david/strongloop/express.svg)](https://david-dm.org/CurrencyCloud/currencycloud-js.svg)

# Currency Cloud

This is the official Javascript SDK for v2 of Currency Cloud's API. Additional documentation for each API endpoint can be found at [Currency Cloud API documentation][introduction]. If you have any queries or you require support, please contact our implementation team at implementation@currencycloud.com.

## Installation

This library is distributed on `npm`. In order to add it as a dependency, run the following command:

``` sh
$ npm install currency-cloud --save
```

## Supported Node versions

The least supported Node version is 4.0.0.

# Usage

The following example retrieves all tradeable currencies list:

``` js
var currencyCloud = require('currency-cloud');

currencyCloud.authentication.login({
  environment: 'demo', 
  loginId: 'login_id', 
  apiKey: 'api_key'
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

To interact with the various Currency Cloud's APIs a service client object must be created; then a particular API can be accessed via the corresponding property of this object:

``` js
// create service client object
var currencyCloud = require('currency-cloud');

// access authentication API
currencyCloud.authentication.login({
  environment: 'demo', 
  loginId: 'login_id', 
  apiKey: 'api_key'
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
Supported APIs are listed in the [Currency Cloud API overview][overview].

## Authentication

Prior to calling API functions authentication is required. It is performed as follows:

``` js
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

``` js
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

Each API call is an asynchronous operation, so Promises/A+ pattern is used heavily throughout the SDK. Every function, if not synchronously throwing an Error, returns a thenable promise.

## On Behalf Of

Some API calls can be executed on behalf of another user (e.g. someone who has a sub-account with the logged in user). For this sake, `onBehalfOf` field with a value of corresponding contact id should be added to a parameters object of a SDK function:

``` js
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

``` js
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

``` js
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
  url: https://devapi.thecurrencycloud.com/v2/balances/XYZ
response:
  statusCode: 400
  date: Mon, 09 Nov 2015 15:06:11 GMT
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

* [request-promise][request-promise]

## Versioning

This project uses [semantic versioning][semver]. You can safely express a dependency on a major version and expect all minor and patch versions to be backwards compatible.

# Copyright

Copyright (c) 2015 Currency Cloud. See [LICENSE][license] for details.

[introduction]:    https://developer.currencycloud.com/documentation/getting-started/introduction
[overview]:        https://developer.currencycloud.com/documentation/api-docs/overview/
[examples]:        examples
[request-promise]: https://www.npmjs.com/package/request-promise
[semver]:          http://semver.org/
[license]:         LICENSE.md