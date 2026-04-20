var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
    .reply(200, {"auth_token": "65360fb297f8dea3a68d83499b9545a4"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .put('/v2/collections_screening/bdcca5e6-32fe-45f6-9476-6f8f518e6270/complete', "accepted=true&reason=accepted")
    .reply(200, {
        "transaction_id": "bdcca5e6-32fe-45f6-9476-6f8f518e6270",
        "account_id": "7a116d7d-6310-40ae-8d54-0ffbe41dc1c9",
        "house_account_id": "7a116d7d-6310-40ae-8d54-0ffbe41dc1c9",
        "result": {
            "reason": "Accepted",
            "accepted": true
        }
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .put('/v2/collections_screening/cdcca5e6-32fe-45f6-9476-6f8f518e6271/complete', "accepted=false&reason=suspected_fraud")
    .reply(200, {
        "transaction_id": "cdcca5e6-32fe-45f6-9476-6f8f518e6271",
        "account_id": "7a116d7d-6310-40ae-8d54-0ffbe41dc1c9",
        "house_account_id": "7a116d7d-6310-40ae-8d54-0ffbe41dc1c9",
        "result": {
            "reason": "suspected_fraud",
            "accepted": false
        }
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});
