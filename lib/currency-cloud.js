/**
 * @module currency-cloud
 */

'use strict';

var client = require('./client');
var error = require('./error');

module.exports = {
  authentication: require('./api/authentication'),
  accounts: require('./api/accounts'),
  balances: require('./api/balances'),
  beneficiaries: require('./api/beneficiaries'),
  contacts: require('./api/contacts'),
  conversions: require('./api/conversions'),
  funding: require('./api/funding'),
  fundingTransactions: require('./api/funding-transactions'),
  ibans: require('./api/ibans'),
  payers: require('./api/payers'),
  payments: require('./api/payments'),
  rates: require('./api/rates'),
  reference: require('./api/reference'),
  transactions: require('./api/transactions'),
  transfers: require('./api/transfers'),
  reports: require('./api/reports'),
  retry: require('./backoff'),
  vans: require('./api/vans'),
  withdrawalAccounts: require('./api/withdrawal-accounts'),
  onBehalfOf: client.onBehalfOf,
  APIerror: error.APIerror,
  AuthenticationError: error.AuthenticationError,
  BadRequestError: error.BadRequestError,
  ForbiddenError: error.ForbiddenError,
  NotFoundError: error.NotFoundError,
  TooManyRequestsError: error.TooManyRequestsError,
  InternalApplicationError: error.InternalApplicationError,
  UndefinedError: error.UndefinedError
};
