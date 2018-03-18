var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"034d23d24490718e8766853e14d480b7"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"9ee85342c432434fbe3035db5d41f4dd"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","account_name":"Currencycloud","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2017-10-30T13:46:49+00:00","updated_at":"2017-10-30T13:52:32+00:00","identification_type":null,"identification_value":null,"short_reference":"151030-00006"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"14c3a6d2bef6b3fabbd84f4a0924e828"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","account_name":"Currencycloud","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2017-10-30T13:46:49+00:00","updated_at":"2017-10-30T13:52:32+00:00","identification_type":null,"identification_value":null,"short_reference":"151030-00006"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"439c7a366dede548bb1878dc4045bc60"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"e1f125fcd33af884fbbdf4597e18a2a1"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
