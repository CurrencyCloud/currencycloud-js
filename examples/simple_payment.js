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

let simplePayment = {
    getBalance: {
        currency: "EUR"
    },
    beneficiary: {
        name: "Acme GmbH",
        bankAccountHolderName: "Acme GmbH",
        currency: "EUR",
        beneficiaryCountry: "DE",
        bankCountry: "DE",
        bicSwift: "COBADEFF",
        iban: "DE89370400440532013000"
    },
    payment: {
        currency: "EUR",
        amount: 10000,
        reason: "Invoice Payment",
        reference: "2018-014",
        paymentType: "regular",
        uniqueRequestId: uuid4()
    },
    payment_id: {
        id: 'ffbe0bcb-1cc0-43b8-b931-c40691cf09d9'
    }
};

/**
 * Make simple payments to beneficiaries
 *  A payment is a transfer of money from a payer’s account to a beneficiary.
 *
 * Payments cannot be made in one currency and received in another. To pay a beneficiary in a particular currency, the
 * payer must hold funds in that currency. If necessary, the payer must convert funds from one currency to another before
 * making a payment.
 *
 * In this cookbook, you will:
 *
 * 1. Check how much money you hold in various foreign currencies.
 * 2. Use funds from your Euros balance to make a payment in Euros to a beneficiary in Germany.
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

let getBalance = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.balances.get(simplePayment.getBalance)
                .then((res) => {
                    console.log('getBalance: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts
    );
};

/**
 * You can also check the balances for all foreign currencies that you hold in your Currencycloud account by calling the
 *  Find Balances endpoint
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
 * 3. Check payment requirements
 *  Currencycloud supports two types of payments:
 *
 * a. Regular payments: Made using the local bank network. Regular payments are normally received by beneficiary’s within
 * five working days of the settlement date. This is a good choice for low-value, non-urgent transactions.
 *
 * b. Priority payments: Made using the SWIFT network. Payments can be made to over 212 countries, and 95% of payments
 * arrive within one working day.
 *
 * You want to make a regular payment to a supplier based in Germany. You will pay the beneficiary in Euros. You have
 * enough funds in your Euros balance already to make this payment, so there is no need to top-up your Euros balance
 * beforehand.
 *
 * First, check what details are required to make a regular payment in Euros to a beneficiary with a bank account in
 * Germany. To do that, call the Get Beneficiary Requirements endpoint.
 */

let getBeneficiaryRequiredDetails = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.reference.getBeneficiaryRequiredDetails({
                currency: simplePayment.beneficiary.currency,
                bankAccountCountry: simplePayment.beneficiary.bankCountry
            })
                .then((res) => {
                    console.log('getBeneficiaryRequiredDetails: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts,
        "currencyCloud.reference.getBeneficiaryRequiredDetails"
    );
};

/**
 * The response tells us that, to make a regular payment to a German bank account in Euros, we need two pieces of
 information: the IBAN and BIC/SWIFT numbers for the beneficiary. The beneficiary could be either a company or
 an individual. Either way, the same information is required.
 */

/**
 * 4. Add a beneficiary
 * If you know the required details, you can go ahead and create a record for the beneficiary via the
 * Create Beneficiary endpoint.
 */

let createBeneficiary = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.beneficiaries.create(simplePayment.beneficiary)
                .then((res) => {
                    simplePayment.payment.beneficiaryId = res.id;
                    console.log('createBeneficiary: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts
    );
};

/**
 * If the beneficiary is successfully created, the response message will contain full details about the beneficiary as
 * recorded in your Currencycloud account. Note the beneficiary’s unique ID (id). You’ll need this to make a payment to
 * the beneficiary, in the next step.
 */

/**
 * 5. Make a payment
 * Authorize a payment by calling the Create Payment endpoint. Optionally, you may provide an idempotency key (via the
 * unique_request_id parameter). This helps protect against accidental duplicate payments.
 */

let createPayment = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.payments.create(simplePayment.payment)
                .then((res) => {
                    console.log('createPayment: ' + JSON.stringify(res, null, 2) + '\n');
                });
        });
};

let getConfirmation = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.payments.getConfirmation(simplePayment.payment_id)
                .then((res) => {
                    console.log('Payment confirmation: ' + JSON.stringify(res, null, 2) + '\n');
                });
        });
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
 * 6. Logout
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
    .then(getBalance)
    .then(findBalances)
    .then(getBeneficiaryRequiredDetails)
    .then(createBeneficiary)
    .then(createPayment)
    .then(getConfirmation)
    .then(logout)
    .catch((err) => {
        if (err instanceof currencyCloud.APIerror) {
            console.log(err.toYAML());
        } else {
            console.log(err);
        }
    });
