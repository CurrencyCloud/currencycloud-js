/**
 * This is JavaScript implementation of the
 * {@link https://connect.currencycloud.com/documentation/getting-started/cookbook Currency Cloud API v2.0 Cookbook example}.
 */

'use strict';

var currencyCloud = require('../lib/currency-cloud')();

var login = function() {
  return currencyCloud.authentication.login('demo', 'your_login_id', 'your_api_key');
};

var getQuote = function() {
  return currencyCloud.rates.get(payment.conversion.buyCurrency, payment.conversion.sellCurrency, payment.conversion.fixedSide, payment.conversion.amount)
    .then(function(res) {
      console.log('getQuote: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var createConversion = function() {
  return currencyCloud.conversions.create(payment.conversion.buyCurrency, payment.conversion.sellCurrency, payment.conversion.fixedSide, payment.conversion.amount, payment.reason, true)
    .then(function(res) {
      payment.conversion.id = res.id;
      console.log('createConversion: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var getBeneficiaryRequiredDetails = function() {
  var params = {
    currency: payment.conversion.buyCurrency,
    bankAccountCountry: payment.beneficiary.country
  };
  return currencyCloud.reference.getBeneficiaryRequiredDetails(params)
    .then(function(res) {
      console.log('getBeneficiaryRequiredDetails: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var createBeneficiary = function() {
  var params = {
    beneficiaryCountry: payment.beneficiary.country,
    bicSwift: payment.beneficiary.bicSwift,
    iban: payment.beneficiary.iban
  };
  return currencyCloud.beneficiaries.create(payment.beneficiary.account, payment.beneficiary.country, payment.conversion.buyCurrency, payment.beneficiary.name, params)
    .then(function(res) {
      payment.beneficiary.id = res.id;
      console.log('createBeneficiary: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var createPayment = function() {
  var params = {
    conversionId: payment.conversion.id,
    paymentType: 'regular'
  };
  return currencyCloud.payments.create(payment.conversion.buyCurrency, payment.beneficiary.id, payment.conversion.amount, payment.reason, payment.reference, params)
    .then(function(res) {
      console.log('createPayment: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var logout = function() {
  return currencyCloud.authentication.logout();
};

var payment = {
  conversion: {
    buyCurrency: 'EUR',
    sellCurrency: 'GBP',
    amount: 10000,
    fixedSide: 'buy'
  },
  beneficiary: {
    name: 'Employee Funds',  
    country: 'DE',
    account: 'Acme GmbH',
    bicSwift: 'COBADEFF',
    iban: 'DE89370400440532013000'
  },
  reason: 'Invoice Payment',
  reference: 'Invoice 1234'   
};

login()
  .then(getQuote)
  .then(createConversion)
  .then(getBeneficiaryRequiredDetails)
  .then(createBeneficiary)
  .then(createPayment)
  .then(logout)
  .catch(console.error);