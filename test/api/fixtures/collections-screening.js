var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/api', {
        "login_id": "development@currencycloud.com",
        "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
    })
    .reply(200, {"auth_token": "38d5ae520d6987decfe7c12aa5ec4422"});

nock('https://devapi.currencycloud.com:443')
    .put('/v2/collections_screening/272d42b9-9b97-4407-ac08-d75cd067cd12/complete', 'accepted=true&reason=Accepted')
    .reply(200, {
        "transaction_id": "272d42b9-9b97-4407-ac08-d75cd067cd12",
        "account_id": "f2ea2099-306e-47a6-8fb0-123b304e601c",
        "house_account_id": "f276146d-0a35-4df9-b9d7-fff869fadd8e",
        "result": {
            "reason": "Accepted",
            "accepted": true
        }
    });

nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/close_session')
    .reply(200, {});