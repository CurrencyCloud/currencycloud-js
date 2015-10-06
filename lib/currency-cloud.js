'use strict';

module.exports = function () {
  return {
    authentication: require('./api/authentication')(),   
    accounts: require('./api/accounts')(),
    rates: require('./api/rates')()
  };
};