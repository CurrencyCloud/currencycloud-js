/**
 * This is JavaScript implementation of the
 * {@link https://www.currencycloud.com/developers/cookbooks/ Currency Cloud API v2.0 Cookbook} example.
 * Additional documentation for each API endpoint can be found at {@link https://www.currencycloud.com/developers/overview}.
 * If you have any queries or you require support, please contact our Support team at {@link support@currencycloud.com}.
 */

'use strict';

let currencyCloud = require('../lib/currency-cloud');
const uuid4 = require('uuid/v4');
const opts = {
  retries: 3,
  factor: 2,
  minTimeout: Math.random() * 750,
  maxTimeout: Math.random() * 30000 + 30000,
  randomize: true,
  log: true
};

let payBeneficiary = {
  getBalance: {
    currency: "EUR"
  },
  getQuote: {
    buyCurrency: "EUR",
    sellCurrency: "GBP",
    amount: 10000,
    fixedSide: "buy"
  },
  conversion: {
    buyCurrency: "EUR",
    sellCurrency: "GBP",
    amount: 10000,
    fixedSide: "buy",
    reason: "Top up Euros balance",
    termAgreement: true
  },
  beneficiary: {
    name: "Acme GmbH",
    bankAccountHolderName: "Acme GmbH",
    currency: "EUR",
    beneficiaryCountry: "DE",
    bankCountry: "DE",
    bicSwift: "COBADEFF",
    iban: "DE75512108001245126199"
  },
  payment: {
    reason: "Invoice Payment",
    reference: "2018-014",
    paymentType: "regular",
    uniqueRequestId: uuid4()
  }
};

/**
 * Pay a beneficiary using funds in a different currency.
 *
 * In this cookbook, you will:
 *
 * 1. Check how much money you hold in various foreign currencies in your Currencycloud account.
 * 2. Top up your Euros balance by trading some Pound Sterling.
 * 3. Make a payment in Euros to a beneficiary in Germany.
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
 * 2. Check available balances
 * To find out how many Euros you have, call the Get Balance endpoint, passing EUR as the third URI path parameter.
 */

let getBalance  = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.balances.get(payBeneficiary.getBalance)
        .then((res) => {
          console.log('getBalance: ' + JSON.stringify(res, null, 2) + '\n');
        });
    },
    opts
  );
};

/**
 * You can also check the balances for all foreign currencies that you hold in your Currencycloud account by calling the
 * Find Balances endpoint
 */

let findBalances = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.balances.find()
        .then((res) => {
          console.log('findBalance: ' + JSON.stringify(res, null, 2) + '\n');
        });
    });
};

/**
 * 3. Top up
 * Check how much it will cost to buy 10,000 Euros using funds from your Pound Sterling balance, by making a call to the
 * Get Detailed Rates endpoint.
 */

let getQuote = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.rates.get(payBeneficiary.getQuote)
        .then((res) => {
          console.log('getQuote: ' + JSON.stringify(res, null, 2) + '\n');
        });
    },
    opts,
    "currencyCloud.rates.get"
  );
};

/**
 * If you’re happy with the quote, you may authorize the conversion by calling the Create Conversion endpoint.
 */

let createConversion = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.conversions.create(payBeneficiary.conversion)
        .then((res) => {
          payBeneficiary.payment.conversionId = res.id;
          console.log('createConversion: ' + JSON.stringify(res, null, 2) + '\n');
        });
    },
    opts
  );
};

/**
 * On success, the payload of the response message will contain full details of the conversion as recorded against your
 * Currencycloud account. Note the unique conversion id (the id field). You’ll need this to complete the conversion.
 */

/**
 * 4. Check payment requirements
 * You want to make a regular payment to a supplier based in Germany. First, check what details are required
 * to make a regular payment in Euros to a beneficiary with a bank account in Germany. To do that, call the
 * Get Beneficiary Requirements endpoint.
 */

let getBeneficiaryRequiredDetails = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.reference.getBeneficiaryRequiredDetails({
        currency: payBeneficiary.beneficiary.currency,
        bankAccountCountry: payBeneficiary.beneficiary.bankCountry
      })
        .then((res) => {
          console.log('getBeneficiaryRequiredDetails: ' + JSON.stringify(res, null, 2) + '\n');
        });
    });
};

/**
 * The response tells us that, to make a regular payment to a German bank account in Euros, we need two pieces of
 * information: the IBAN and BIC/SWIFT numbers for the beneficiary. The beneficiary could be either a company or
 * an individual. Either way, the same information is required.
 */

/**
 * 5. Add a beneficiary
 * If you know the required details, you can go ahead and create a record for the beneficiary via the
 * Create Beneficiary endpoint.
 */

let createBeneficiary = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.beneficiaries.create(payBeneficiary.beneficiary)
        .then((res) => {
          payBeneficiary.payment.beneficiaryId = res.id;
          console.log('createBeneficiary: ' + JSON.stringify(res, null, 2) + '\n');
        });
    },
    opts,
    "currencyCloud.beneficiaries.create"
  );
};

/**
 * If the beneficiary is successfully created, the response message will contain full details about the beneficiary as
 * recorded in your Currencycloud account. Note the beneficiary’s unique ID (id). You’ll need this to make a payment to
 * the beneficiary, in the next step.
 */

/**
 * 6. Make a payment
 * Authorize a payment by calling the Create Payment endpoint. Optionally, you may provide an idempotency key (via the
 * unique_request_id parameter). This helps protect against accidental duplicate payments.
 */

let createPayment = () => {
  return currencyCloud.retry(
    () => {
      return currencyCloud.payments.create({
        currency: payBeneficiary.conversion.buyCurrency,
        beneficiaryId: payBeneficiary.payment.beneficiaryId,
        amount: payBeneficiary.conversion.amount,
        reason: payBeneficiary.payment.reason,
        reference: payBeneficiary.payment.reference,
        conversionId: payBeneficiary.payment.conversionId,
        paymentType: payBeneficiary.payment.paymentType,
        uniqueRequestId: payBeneficiary.payment.uniqueRequestId
      })
        .then((res) => {
          console.log('createPayment: ' + JSON.stringify(res, null, 2) + '\n');
        });
    },
    opts
  );
};

/**
 * If the payment is successfully queued, the response payload will contain all the information about the payment as
 * recorded in your Currencycloud account. This does not mean that the payment was made. It just means that it is ready
 * for processing.
 *
 * Payments are processed asynchronously. Currencycloud will process payments on the payment_date specified, provided
 * you hold enough money in the relevant currency at the time. It is possible to instruct payments even if you don’t hold
 * enough money in the relevant currency. The payments will be queued in the normal way but will not be processed until
 * your account balance is topped up.
 */

/**
 * 7. Logout
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
  .then(getQuote)
  .then(getBalance)
  .then(findBalances)
  .then(createConversion)
  .then(getBeneficiaryRequiredDetails)
  .then(createBeneficiary)
  .then(createPayment)
  .then(logout)
  .catch((err) => {
    if (err instanceof currencyCloud.APIerror) {
      console.log(err.toYAML());
    }
    else {
      console.log(err);
    }
  });
