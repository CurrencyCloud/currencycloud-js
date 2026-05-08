var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
  .reply(200, {"auth_token": "751786d0d27e0459dc6f6cc314d5d2ff"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/demo/funding/create', "id=5dcfb283-dc5a-4c0d-b038-7ee8cd9ac643&receiver_account_number=0335017186&currency=USD&amount=12.5")
  .reply(200, {"id":"5dcfb283-dc5a-4c0d-b038-7ee8cd9ac643","account_id":"67935c50-59ad-4d58-9edd-2be0ad3931b4","state":"pending","sender_name":"Test sender","sender_address":null,"sender_country":null,"sender_reference":null,"sender_account_number":null,"sender_routing_code":null,"receiver_account_number":"0335017186","receiver_routing_code":null,"amount":"12.50","currency":"USD","action":"approve","short_reference":"IF-20221212-TMT8VU","created_at":"2022-12-12T19:02:13+00:00","updated_at":"2022-12-12T19:02:13+00:00"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/authenticate/close_session')
  .reply(200, {});
