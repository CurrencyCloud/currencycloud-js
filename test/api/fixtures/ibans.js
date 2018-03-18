var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
  .reply(200, {"auth_token": "26a3e21f4ef8919dd4749bbc7cba047c"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/ibans/create', "currency=EUR")
  .reply(200, {
    "uuid": "8242d1f4-4555-4155-a9bf-30feee785121",
    "account_id": "e277c9f9-679f-454f-8367-274b3ff977ff",
    "iban_code": "GB51TCCL00997961584807",
    "currency": "EUR",
    "account_holder_name": "Development CM",
    "bank_institution_name": "The Currency Cloud",
    "bank_institution_address": "12 Steward Street, The Steward Building, London, E1 6FQ, GB",
    "bank_institution_country": "United Kingdom",
    "bic_swift": "TCCLGB31",
    "created_at": "2018-02-19T17:24:48+00:00",
    "updated_at": "2018-02-19T17:24:48+00:00"
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .get('/v2/ibans')
  .reply(200, {
    "ibans": [{
      "uuid": "8242d1f4-4555-4155-a9bf-30feee785121",
      "account_id": "e277c9f9-679f-454f-8367-274b3ff977ff",
      "iban_code": "GB51TCCL00997961584807",
      "currency": "EUR",
      "account_holder_name": "Development CM",
      "bank_institution_name": "The Currency Cloud",
      "bank_institution_address": "12 Steward Street, The Steward Building, London, E1 6FQ, GB",
      "bank_institution_country": "United Kingdom",
      "bic_swift": "TCCLGB31",
      "created_at": "2018-02-19T17:24:48+00:00",
      "updated_at": "2018-02-19T17:24:48+00:00"
    }]
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .get('/v2/ibans/subaccounts/find')
  .reply(200, {
    "ibans": [{
      "uuid": "01d8c0bc-7f0c-4cdd-bc7e-ef81f68500fe",
      "iban_code": "GB51TCCL00997997989489",
      "account_id": "87077161-91de-012f-e284-1e0030c7f352",
      "currency": "EUR",
      "account_holder_name": "Account-IGGLNHYTWFKI",
      "bank_institution_name": "The Currency Cloud",
      "bank_institution_address": "12 Steward Street, The Steward Building, London, E1 6FQ, GB",
      "bank_institution_country": "United Kingdom",
      "bic_swift": "TCCLGB31",
      "created_at": "2014-01-12T00:00:00+00:00",
      "updated_at": "2014-01-12T00:00:00+00:00"
    }],
    "pagination": {
      "total_entries": 1,
      "total_pages": 1,
      "current_page": 1,
      "per_page": 25,
      "previous_page": -1,
      "next_page": 2,
      "order": "created_at",
      "order_asc_desc": "asc"
    }
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/authenticate/close_session')
  .reply(200, {});
