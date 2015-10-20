'use strict';

module.exports = {
  authentication: require('./api/authentication'),
  accounts: require('./api/accounts'),
  balances: require('./api/balances'),
  beneficiaries: require('./api/beneficiaries'),
  contacts: require('./api/contacts'),
  conversions: require('./api/conversions'),
  payers: require('./api/payers'),
  payments: require('./api/payments'),
  rates: require('./api/rates'),
  reference: require('./api/reference'),
  settlements: require('./api/settlements'),
  transactions: require('./api/transactions'),
  onBehalfOf: require('./client').onBehalfOf
};