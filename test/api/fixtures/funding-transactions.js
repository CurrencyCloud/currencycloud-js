var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "38d5ae520d6987decfe7c12aa5ec4422"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/funding_transactions/e68301d3-5b04-4c1d-8f8b-13a9b8437040')
    .query({"id": "e68301d3-5b04-4c1d-8f8b-13a9b8437040"})
    .reply(200, {
      "id":"e68301d3-5b04-4c1d-8f8b-13a9b8437040",
      "amount":"1.11",
      "currency":"USD",
      "rail":"SEPA",
      "additional_information":"CFST20231016143117",
      "receiving_account_routing_code":null,
      "value_date":"2023-10-16T00:00:00+00:00",
      "receiving_account_number":"8302996933",
      "receiving_account_iban":null,
      "created_at":"2023-10-16T13:31:18+00:00",
      "updated_at":"2023-10-16T13:31:18+00:00",
      "completed_at":null,
      "sender":{
        "sender_id":"5c675fa4-fdf0-4ee6-b5bb-156b36765433",
        "sender_address":"test",
        "sender_country":"GB",
        "sender_name":"test",
        "sender_bic":null,
        "sender_iban":null,
        "sender_account_number":null,
        "sender_routing_code":null
      }
    });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
