/**
 * This is JavaScript implementation of the
 * {@link https://developer.currencycloud.com/guides/getting-started/introduction// Currency Cloud API v2.0 Cookbook} example.
 * Additional documentation for each API endpoint can be found at {@link https://developer.currencycloud.com/api-reference/}.
 * If you have any queries or you require support, please contact our Support team at {@link support@currencycloud.com}.
 */

'use strict';

let currencyCloud = require('../lib/currency-cloud');
const opts = {
    retries: 3,
    factor: 2,
    minTimeout: Math.random() * 750,
    maxTimeout: Math.random() * 30000 + 30000,
    randomize: true,
    log: true
};

let convertFunds = {
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
};

/**
 * Convert funds from one currency to another
 *  A conversion is a process whereby money held in one currency is traded for money in another currency. Currencycloud can
 * convert money into currencies of all the world’s major economies.
 *
 * In this cookbook, you will:
 *
 * 1. Get a quote for trading Pound Sterling (GBP) for Euros (EUR).
 * 2. Top up your Euros balance by trading some Pound Sterling.
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
 * 2. Get a detailed quote
 * Check how much it will cost to buy 10,000 Euros using funds from your Pound Sterling balance, by making a call to the
 * Get Detailed Rates endpoint
 */

let getQuote = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.rates.get(convertFunds.getQuote)
                .then((res) => {
                    console.log('getQuote: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts);
};

/**
 * On success, the response payload will contain details of Currencycloud’s quotation to make the conversion.
 */

/**
 * If you’re happy with the quote, you may create the conversion by calling the Create Conversion endpoint.
 */

let createConversion = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.conversions.create(convertFunds.conversion)
                .then((res) => {
                    console.log('createConversion: ' + JSON.stringify(res, null, 2) + '\n');
                });
        });
};

/**
 * On success, the payload of the response message will contain full details of the conversion as recorded against your
 * Currencycloud account.
 *
 * This conversion will settle automatically on the settlement_date as long as there are sufficient funds in the account’s
 * GBP balance to cover the client_sell_amount. Please use your Cash Manager to top up your GBP balance if necessary.
 */

/**
 * 4. Logout
 * It is good security practice to retire authentication tokens when they are no longer needed, rather than let them
 * expire. Send a request to the Logout endpoint to terminate an authentication token immediately.
 */

let retrieve_profit_and_loss = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.conversions.profit_and_loss()
                .then((res) => {
                    console.log('Your data about profit and/or loss: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts);
};

let quote_conversion_date_change = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.conversions.create(convertFunds.conversion)
                .then((res) => {
                    var newDate = new Date(res.settlementDate);
                    newDate.setDate(newDate.getDate() + 1);
                    return currencyCloud.conversions.date_change_quote({
                        id: res.id,
                        new_settlement_date: newDate.toDateString()
                    }).then((result) => {
                        console.log('Your date change quote made successfully: ' + JSON.stringify(result, null, 2) + '\n');
                    });
                });
        },
        opts);
};

let split_preview = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.conversions.split_preview({
                id: "b9a4ea57-42a7-476d-95d6-6edceec5c5a0",
                amount: 2
            })
                .then((result) => {
                    console.log('Split preview: ' + JSON.stringify(result, null, 2) + '\n');
                });
        });
};

let split_history = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.conversions.split_history({
                id: 'c805aa35-9bd3-4afe-ade2-d341e551aa16'
            })
                .then((result) => {
                    console.log('Split history: ' + JSON.stringify(result, null, 2) + '\n');
                });
        });
};

let cancellation_quote = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.conversions.create(convertFunds.conversion)
                .then((res) => {
                    return currencyCloud.conversions.cancellation_quote({
                        id: res.id
                    })
                        .then((result) => {
                            console.log('Successful cancellation quote: ' + JSON.stringify(result, null, 2) + '\n');
                        });
                });
        });
};
let logout = () => {
    return currencyCloud.authentication.logout()
        .then(() => {
            console.log('logout\n');
        });
};

login()
    .then(getQuote)
    .then(createConversion)
    .then(retrieve_profit_and_loss)
    .then(quote_conversion_date_change)
    .then(split_preview)
    .then(split_history)
    .then(cancellation_quote)
    .then(logout)
    .catch((err) => {
        if (err instanceof currencyCloud.APIerror) {
            console.log(err.toYAML());
        }
        else {
            console.log(err);
        }
    });
