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

let generate_report = {
    conversion_report_params: {
        description: "Testing JS API",
        buyCurrency: "EUR",
        sellCurrency: "GBP",
        uniqueRequestId: "q1w2e3r4"
    },
    payment_report_params:{
        description: "Testing JS payment report API",
        currency: "GBP",
        amountFrom: "1000",
        amountTo: "10000"
    },
    report_find_params:{
        id: "c3ae0475-ef72-46ef-8a90-c2d3c2912911"
    }
};

let login = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.authentication.login({
                environment: 'demo',
                loginId: 'development@currencycloud.com',
                apiKey: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
            });
        },
        opts,
        "currencyCloud.authentication.login"
    );
};

let create_conversion_report = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.reports.create_conversion_report(generate_report.conversion_report_params)
                .then((res) => {
                    console.log('Conversion report: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts);
};

let create_payment_report = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.reports.create_payment_report(generate_report.payment_report_params)
                .then((res) => {
                    console.log('Payment report: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts);
};

let find_report = () => {
    return currencyCloud.retry(
        () => {
            return currencyCloud.reports.find_report_request()
                .then((res) => {
                    console.log('Found reports: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts);
};

let find_report_via_id = () =>{
    return currencyCloud.retry(
        () => {
            return currencyCloud.reports.find_report_via_id(generate_report.report_find_params)
                .then((res) => {
                    console.log('Found report: ' + JSON.stringify(res, null, 2) + '\n');
                });
        },
        opts);
};


let logout = () => {
    return currencyCloud.authentication.logout()
        .then(() => {
            console.log('logout\n');
        });
};

login()
    .then(create_conversion_report)
    .then(create_payment_report)
    .then(find_report)
    .then(find_report_via_id)
    .then(logout)
    .catch((err) => {
        if (err instanceof currencyCloud.APIerror) {
            console.log(err.toYAML());
        }
        else {
            console.log(err);
        }
    });
