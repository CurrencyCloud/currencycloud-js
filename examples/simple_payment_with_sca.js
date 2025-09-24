/**
 * This is JavaScript implementation of the
 * {@link https://developer.currencycloud.com/guides/integration-guides/sca_sponsored_api_payments/ Currency Cloud API v2.0 Cookbook} example.
 * Additional documentation for each API endpoint can be found at {@link https://developer.currencycloud.com/api-reference/}.
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
 * Make an SCA enabled payments to beneficiaries
 *  This is an extension of the simple payment example, which includes Strong Customer Authentication (SCA).
 * In this cookbook, you will:
 *
 * 1. Validate a payment using Strong Customer Authentication (SCA).
 * 2. Create a payment using the SCA ID and token received from the validation step.
 */

/**
 * 1. Authenticate using valid credentials.
 * If you do not have a valid Login ID and API Key, you can get one by registering at
 * {@link https://developer.currencycloud.com/register-for-an-api-key/}
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
 * 2. Add a beneficiary
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
 * 3. Validate a payment using Strong Customer Authentication (SCA)
 *  To make a payment, you must first validate it using the Validate Payment endpoint.
 *  This example uses the SCA to authenticated user feature to allow the OTP to sent to the authenticated user rather than your customer. 
 *  This endpoint will return an SCA ID in the headers of the response. You will need this SCA ID to create the payment.
 *
 */ 
let validatePayment = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.payments.validate(simplePayment.payment, true)
                .then((res) => {
                    console.log('validatePayment: ' + JSON.stringify(res, null, 2) + '\n');
                });
        });
};
/**
 * 4. Authorize a payment by calling the Create Payment endpoint. Optionally, you may provide an idempotency key (via the
 * unique_request_id parameter). This helps protect against accidental duplicate payments.
 * Use the SCA ID returned from the Validate Payment endpoint to create the payment, along with the OTP received.
 */

let createPayment = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.payments.create(simplePayment.payment, validatePayment.headers['x-sca-id'], "OTP123456")
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
 * 5. Logout
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
    .then(createBeneficiary)
    .then(validatePayment)
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
