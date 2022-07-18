var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
  .reply(200, {"auth_token": "751786d0d27e0459dc6f6cc314d5d2ff"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/transfers/create', {
    "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
    "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
    "currency": "GBP",
    "amount": "12.5",
    "reason": "Transfer test"
  })
  .reply(200, {
    "id": "993d63bd-e151-11e6-a5af-080027a79e8f",
    "short_reference": "BT-20180101-KVFRWA",
    "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
    "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
    "currency": "GBP",
    "amount": "12.5",
    "status": "completed",
    "created_at": "2018-01-01T12:34:56+00:00",
    "updated_at": "2018-01-01T12:34:56+00:00",
    "completed_at": "2018-01-01T12:34:56+00:00",
    "creator_account_id": "262e3d2a-e152-11e6-a5af-080027a79e8f",
    "creator_contact_id": "30cb8632-e152-11e6-a5af-080027a79e8f",
    "reason": "Transfer test"
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .get('/v2/transfers/find')
  .reply(200, {
    "transfers": [{
      "id": "993d63bd-e151-11e6-a5af-080027a79e8f",
      "short_reference": "BT-20180101-KVFRWA",
      "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
      "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
      "currency": "GBP",
      "amount": "12.5",
      "status": "completed",
      "created_at": "2018-01-01T12:34:56+00:00",
      "updated_at": "2018-01-01T12:34:56+00:00",
      "completed_at": "2017-01-18T14:08:34+00:00",
      "creator_account_id": "262e3d2a-e152-11e6-a5af-080027a79e8f",
      "creator_contact_id": "30cb8632-e152-11e6-a5af-080027a79e8f",
      "reason": "Transfer test"
    }, {
      "id": "ca717500-c1c2-46f1-996f-5c282a4c6db4",
      "short_reference": "BT-20180101-ZAIRMS",
      "source_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
      "destination_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
      "currency": "GBP",
      "amount": "50.12",
      "status": "completed",
      "created_at": "2018-01-01T12:34:56+00:00",
      "updated_at": "2018-01-01T12:34:56+00:00",
      "completed_at": "2018-01-01T12:34:56+00:00",
      "creator_account_id": "262e3d2a-e152-11e6-a5af-080027a79e8f",
      "creator_contact_id": "30cb8632-e152-11e6-a5af-080027a79e8f",
      "reason": "Client funding"
    }],
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

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/transfers/create', {
    "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
    "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
    "currency": "GBP",
    "amount": "12.5",
    "reason": "Transfer test"
  })
  .reply(200, {
    "id": "dead2c60-ab3c-48be-96d6-cf87b8ebddf2",
    "short_reference": "BT-20180101-KVFSOH",
    "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
    "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
    "currency": "GBP",
    "amount": "12.5",
    "status": "completed",
    "created_at": "2018-01-01T12:34:56+00:00",
    "updated_at": "2018-01-01T12:34:56+00:00",
    "completed_at": "2018-01-01T12:34:56+00:00",
    "creator_account_id": "262e3d2a-e152-11e6-a5af-080027a79e8f",
    "creator_contact_id": "30cb8632-e152-11e6-a5af-080027a79e8f",
    "reason": "Transfer test"
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .get('/v2/transfers/dead2c60-ab3c-48be-96d6-cf87b8ebddf2')
  .reply(200, {
    "id": "dead2c60-ab3c-48be-96d6-cf87b8ebddf2",
    "short_reference": "BT-20180101-KVFSOH",
    "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
    "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
    "currency": "GBP",
    "amount": "12.5",
    "status": "completed",
    "created_at": "2018-01-01T12:34:56+00:00",
    "updated_at": "2018-01-01T12:34:56+00:00",
    "completed_at": "2018-01-01T12:34:56+00:00",
    "creator_account_id": "262e3d2a-e152-11e6-a5af-080027a79e8f",
    "creator_contact_id": "30cb8632-e152-11e6-a5af-080027a79e8f",
    "reason": "Transfer test"
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .get('/v2/transfers/deadbeef-dead-beef-dead-beefdeadbeef')
  .reply(404, {
    "error_code": "transfer_not_found",
    "error_messages": {
      "id": [{
        "code": "transfer_not_found",
        "message": "Transfer was not found for this ID",
        "params": {}
      }]
    }
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/transfers/993d63bd-e151-11e6-a5af-080027a79e8f/cancel', {})
    .reply(200, {
        "id": "993d63bd-e151-11e6-a5af-080027a79e8f",
        "short_reference": "BT-20180101-KVFRWA",
        "source_account_id": "a7117404-e150-11e6-a5af-080027a79e8f",
        "destination_account_id": "946f2d58-e150-11e6-a5af-080027a79e8f",
        "currency": "GBP",
        "amount": "12.5",
        "status": "cancelled",
        "created_at": "2018-01-01T12:34:56+00:00",
        "updated_at": "2018-01-01T12:34:56+00:00",
        "completed_at": "2018-01-01T12:34:56+00:00",
        "creator_account_id": "262e3d2a-e152-11e6-a5af-080027a79e8f",
        "creator_contact_id": "30cb8632-e152-11e6-a5af-080027a79e8f",
        "reason": "Transfer test"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .post('/v2/authenticate/close_session')
  .reply(200, {});
