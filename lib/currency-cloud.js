/**
 * @module currency-cloud
 */

'use strict';

var createHttpClient = require('./client');
var error = require('./error');

var createClient = function () {
  var client = createHttpClient();

  return {
  authentication: require('./api/authentication')(client),
  accounts: require('./api/accounts')(client),
  balances: require('./api/balances')(client),
  beneficiaries: require('./api/beneficiaries')(client),
  collections: require('./api/collections')(client),
  contacts: require('./api/contacts')(client),
  conversions: require('./api/conversions')(client),
  funding: require('./api/funding')(client),
  ibans: require('./api/ibans')(client),
  payers: require('./api/payers')(client),
  payments: require('./api/payments')(client),
  quotes: require('./api/quotes')(client),
  rates: require('./api/rates')(client),
  reference: require('./api/reference')(client),
  transactions: require('./api/transactions')(client),
  termsAndConditions: require('./api/terms-and-conditions.js')(client),
  transfers: require('./api/transfers')(client),
  reports: require('./api/reports')(client),
  retry: require('./backoff'),
  vans: require('./api/vans')(client),
  withdrawalAccounts: require('./api/withdrawal-accounts')(client),
  onBehalfOf: client.onBehalfOf,
  _client: client,
  APIerror: error.APIerror,
  AuthenticationError: error.AuthenticationError,
  BadRequestError: error.BadRequestError,
  ForbiddenError: error.ForbiddenError,
  NotFoundError: error.NotFoundError,
  TooManyRequestsError: error.TooManyRequestsError,
  InternalApplicationError: error.InternalApplicationError,
  UndefinedError: error.UndefinedError
  };
};

module.exports = { createClient };
