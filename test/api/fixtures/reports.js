var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/api', {
        "login_id": "development@currencycloud.com",
        "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
    })
    .reply(200, {"auth_token": "efa3f4d86206ef45263d7ce1dafeadbb"});

//Create conversion report
nock('https://devapi.currencycloud.com:443')
    .post('/v2/reports/conversions/create', {
        "buy_currency": "EUR",
        "sell_currency": "GBP"
    })
    .reply(200, {
        "id": "c2d7dd2c-9317-4517-9f5d-8d287a1c4ee7",
        "short_reference": "RP-4270806-VLOIID",
        "search_params": {
            "buy_currency": "EUR",
            "sell_currency": "GBP",
            "scope": "own"
        },
        "report_type": "conversion",
        "status": "processing",
        "report_url": "",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "created_at": "2018-11-05T15:12:45+00:00",
        "updated_at": "2018-11-05T15:12:45+00:00"
    });

// Create payment report
nock('https://devapi.currencycloud.com:443')
    .post('/v2/reports/payments/create', {
        description: 'TESTING REPORT FOR PAYMENTS',
        currency: 'GBP',
        amount_from: '1000',
        amount_to: '10000'
    })
    .reply(200, {
        "id": "41fc3cd8-5d7f-4c20-8b0c-58eb6d653695",
        "short_reference": "RP-6523110-DNTMME",
        "search_params": {
            "currency": "GBP",
            "scope": "own"
        },
        "report_type": "payment",
        "status": "processing",
        "report_url": "",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "created_at": "2018-10-22T08:27:03+00:00",
        "updated_at": "2018-10-22T08:27:03+00:00"
    });

// Find report requests
nock('https://devapi.currencycloud.com:443')
    .get('/v2/reports/report_requests/find')
    .query({"per_page": "1"})
    .reply(200, {
        "report_requests": [{
                "id": "195557f7-7f2a-47ff-92d7-b8662dd100fd",
                "short_reference": "RP-7918625-XWJQIG",
                "search_params": {
                    "buy_currency": "EUR",
                    "sell_currency": "GBP",
                    "unique_request_id": "a2730264-5bc1-2313-fea6-461243f3ea5a",
                    "scope": "own"
                },
                "report_type": "conversion",
                "status": "completed",
                "expiration_date": "2018-10-18T00:00:00+00:00",
                "report_url": "https://ccycloud-reports-prod-demo1-customer-reporting.s3.eu-west-1.amazonaws.com/customer_reporting/195557f7-7f2a-47ff-92d7-b8662dd100fd/conversion_report_1610201808101539677687.csv",
                "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
                "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
                "created_at": "2018-10-16T08:14:46+00:00",
                "updated_at": "2018-10-16T08:14:48+00:00"
            }],
        "pagination": {
            "total_entries": 100,
            "total_pages": 100,
            "current_page": 1,
            "per_page": 1,
            "previous_page": -1,
            "next_page": 2,
            "order": "created_at ASC",
            "order_asc_desc": "asc"
        }
    });

// Retrieve report request via id
nock('https://devapi.currencycloud.com:443')
    .post('/v2/reports/conversions/create', {
        "buy_currency": "EUR",
        "sell_currency": "GBP"
    })
    .reply(200, {
        "id": "c2d7dd2c-9317-4517-9f5d-8d287a1c4ee7",
        "short_reference": "RP-4270806-VLOIID",
        "search_params": {
            "buy_currency": "EUR",
            "sell_currency": "GBP",
            "scope": "own"
        },
        "report_type": "conversion",
        "status": "processing",
        "report_url": "",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "created_at": "2018-11-05T15:12:45+00:00",
        "updated_at": "2018-11-05T15:12:45+00:00"
    });

nock('https://devapi.currencycloud.com:443')
    .get('/v2/reports/report_requests/c2d7dd2c-9317-4517-9f5d-8d287a1c4ee7')
    .reply(200, {
        "id": "c2d7dd2c-9317-4517-9f5d-8d287a1c4ee7",
        "short_reference": "RP-4270806-VLOIID",
        "search_params": {
            "buy_currency": "EUR",
            "sell_currency": "GBP",
            "scope": "own"
        },
        "report_type": "conversion",
        "status": "processing",
        "report_url": "",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "created_at": "2018-11-05T15:12:45+00:00",
        "updated_at": "2018-11-05T15:12:45+00:00"
    });

// Teardown
nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/close_session')
    .reply(200, {});
