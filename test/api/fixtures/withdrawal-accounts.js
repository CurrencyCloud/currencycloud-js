var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/api', {
        "login_id": "development@currencycloud.com",
        "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
    })
    .reply(200, {"auth_token": "3e7c564909890f97bb0e5548325d73ea"});

nock('https://devapi.currencycloud.com:443')
    .get('/v2/withdrawal_accounts/find')
    .query({"account_id":"72970a7c-7921-431c-b95f-3438724ba16f"})
    .reply(200, {
        "withdrawal_accounts": [
            {
                "id": "0886ac00-6ab6-41a6-b0e1-8d3faf2e0de2",
                "account_name": "currencycloud",
                "account_holder_name": "The Currency Cloud",
                "account_holder_dob": null,
                "routing_code": "123456789",
                "account_number": "01234567890",
                "currency": "USD",
                "account_id": "72970a7c-7921-431c-b95f-3438724ba16f"
            }
        ],
        "pagination": {
            "total_entries": 1,
            "total_pages": 1,
            "current_page": 1,
            "per_page": 25,
            "previous_page": -1,
            "next_page": -1,
            "order": "created_at",
            "order_asc_desc": "asc"
        }
    });


nock('https://devapi.currencycloud.com:443')
    .get('/v2/withdrawal_accounts/find')
    .reply(200, {
        "withdrawal_accounts": [
            {
                "id": "0886ac00-6ab6-41a6-b0e1-8d3faf2e0de2",
                "account_name": "currencycloud",
                "account_holder_name": "The Currency Cloud",
                "account_holder_dob": null,
                "routing_code": "123456789",
                "account_number": "01234567890",
                "currency": "USD",
                "account_id": "72970a7c-7921-431c-b95f-3438724ba16f"
            },
            {
                "id": "0886ac00-6ab6-41a6-b0e1-8d3faf2e0de3",
                "account_name": "currencycloud2",
                "account_holder_name": "The Currency Cloud 2",
                "account_holder_dob": "1990-07-20",
                "routing_code": "223456789",
                "account_number": "01234567892",
                "currency": "GBP",
                "account_id": "72970a7c-7921-431c-b95f-3438724ba16e"
            }
        ],
        "pagination": {
            "total_entries": 2,
            "total_pages": 1,
            "current_page": 1,
            "per_page": 25,
            "previous_page": -1,
            "next_page": -1,
            "order": "created_at",
            "order_asc_desc": "asc"
        }
    });


nock('https://devapi.currencycloud.com:443')
    .post('/v2/withdrawal_accounts/0886ac00-6ab6-41a6-b0e1-8d3faf2e0de2/pull_funds','amount=100.00&reference=PullFunds1')
    .reply(200, {
        "id": "e2e6b7aa-c9e8-4625-96a6-b97d4baab758",
        "withdrawal_account_id": "0886ac00-6ab6-41a6-b0e1-8d3faf2e0de2",
        "reference": "PullFunds1",
        "amount": "100.00",
        "created_at": "2020-06-29T08:02:31+00:00"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});