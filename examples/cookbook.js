/**
 * This is JavaScript implementation of the
 * {@link https://connect.currencycloud.com/documentation/getting-started/cookbook Currency Cloud API v2.0 Cookbook example}.
 */

'use strict';

var currencyCloud = require('../lib/currency-cloud')();

var login = function() {
  return currencyCloud.authentication.login({
    environment: 'demo', 
    loginId: 'test.it.now@mailinator.com', 
    apiKey: 'f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d'
  });
};

var getQuote = function() {
  return currencyCloud.rates.get(payment.conversion)
  .then(function(res) {
    console.log('getQuote: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var createConversion = function() {
  return currencyCloud.conversions.create({
    buyCurrency: payment.conversion.buyCurrency,
    sellCurrency: payment.conversion.sellCurrency,
    fixedSide: payment.conversion.fixedSide,
    amount: payment.conversion.amount,
    reason: payment.reason,
    termAgreement: true
  })
  .then(function(res) {
    payment.conversion.id = res.id;
    console.log('createConversion: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var getBeneficiaryRequiredDetails = function() {
  return currencyCloud.reference.getBeneficiaryRequiredDetails({
    currency: payment.conversion.buyCurrency,
    bankAccountCountry: payment.beneficiary.country
  })
  .then(function(res) {
    console.log('getBeneficiaryRequiredDetails: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var createBeneficiary = function() {
  return currencyCloud.beneficiaries.create({
    bankAccountHolderName: payment.beneficiary.account,
    bankCountry: payment.beneficiary.country,
    currency: payment.conversion.buyCurrency,
    name: payment.beneficiary.name,
    beneficiaryCountry: payment.beneficiary.country,
    bicSwift: payment.beneficiary.bicSwift,
    iban: payment.beneficiary.iban
  })
  .then(function(res) {
    payment.beneficiary.id = res.id;
    console.log('createBeneficiary: ' + JSON.stringify(res, null, 2) + '\n');
  });
};

var createPayment = function() {
  return currencyCloud.payments.create({
    currency: payment.conversion.buyCurrency,
    beneficiaryId: payment.beneficiary.id,
    amount: payment.conversion.amount,
    reason: payment.reason,
    reference: payment.reference,
    conversionId: payment.conversion.id,
    paymentType: 'regular'
  })
  .then(function(res) {
    console.log('createPayment: ' + JSON.stringify(res, null, 2));
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