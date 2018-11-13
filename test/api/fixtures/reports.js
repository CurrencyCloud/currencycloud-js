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
                "report_url": "https://ccycloud-reports-prod-demo1-customer-reporting.s3.eu-west-1.amazonaws.com/customer_reporting/195557f7-7f2a-47ff-92d7-b8662dd100fd/conversion_report_1610201808101539677687.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWPXXYKBYH32WNW34%2F20181109%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20181109T135934Z&X-Amz-Expires=172800&X-Amz-SignedHeaders=host&X-Amz-Security-Token=FQoGZXIvYXdzEH8aDI%2FywdCSuDjEp6HmrCK3A91l4c4TwrpR6Pg5r3hFzVzfmAF528%2BIKxP8RcS%2Fz3jpPwDKzV4LTw1rsKMTq9Ln7ODvG33jtqtey4C1RzByT%2BbAE2h%2BcvBgTK7Enx204Va6yQ3gh2KLb4cCRR8Hs4rl4vyCGh2gopM6%2FA%2BZufcoPG%2BX0l3iH5WfTtHLZt2xZyXGj%2Frkge45XLMID%2Bk%2Fjr7Sc%2BCcncuVluaXMDb2rYz7A9mNnFjbMEfLyuOvItZnxZrWZSduth00x%2FrM0ffKJN9tVuQjSwZE5JuQaAJYp3xsxykymbSMCzdyNxGQiz3jVrEKNl8SH6jD4Z3pE%2FtKWYrEAxPj6XgUGI8btG6HPQ94qPL3JjupNdjrbSpCX0bynG0fhS%2FMjRm74iwneYNUYlQ7qHYKdal5Wut39nnxTJTKm4wE5nhfXypKPBtDhEwkhVuGIzvTwKniCy5AY25ahSR4i7XBFFF1ymi0Uowvbgh1ti5lgBRdrmMgjXZRfrI67sMp%2FZZW%2BSgDPdNm4hVPMcY11DyAs9sXcSW%2BS55%2Fe6rrs1AMj%2F7VS1roWXor31h5FtEqbp%2Fy3fQ3ojhSWj1SKD4LVoIfDUfi2gQorZmW3wU%3D&X-Amz-Signature=2357745295f6f51cac8e55b10ab52c419a6853463240438267dea88df5d70a9a",
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
