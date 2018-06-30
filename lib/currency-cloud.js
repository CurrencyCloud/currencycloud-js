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
  ibans: require('./api/ibans'),
  payers: require('./api/payers'),
  payments: require('./api/payments'),
  rates: require('./api/rates'),
  reference: require('./api/reference'),
  settlements: require('./api/settlements'),
  transactions: require('./api/transactions'),
  transfers: require('./api/transfers'),
  retry: require('./backoff'),
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