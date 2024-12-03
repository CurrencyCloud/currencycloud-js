var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/api', {
        "login_id": "development@currencycloud.com",
        "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
    })
    .reply(200, {"auth_token": "3e7c564909890f97bb0e5548325d73ea"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/terms_and_conditions/accept', {
    "type":"VGSI",
    "version":"1.0",
    "reference_type":"ACCOUNT",
    "reference_id":"ebcaee2f-a733-11ef-8de2-0242ac1d0002",
    "first_name":"firstName",
    "last_name":"lastName",
    "email":"development@currencycloud.com"
  })
  .reply(200, {
    "acceptance_id": "e781c919-a733-11ef-8de2-0242ac1d0002",
    "accepted_at": "2024-10-04T15:27:04"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});