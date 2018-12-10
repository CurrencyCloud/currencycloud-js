var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "38d5ae520d6987decfe7c12aa5ec4422"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "4a709856-2f20-472d-8ebf-9f2826cec174",
    "settlement_date": "2017-11-01T19:36:53+00:00",
    "conversion_date": "2017-11-01T19:36:53+00:00",
    "short_reference": "20171027-ZGBRYR",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-11-01T19:36:53+00:00",
    "updated_at": "2017-11-01T19:36:53+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/transactions/find')
  .query({"order": "created_at", "order_asc_desc": "desc", "per_page": "5"})
  .reply(200, {
    "transactions": [{
      "id": "1a96d33f-93b9-4f76-bfe7-e548db281948",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "credit",
      "related_entity_type": "conversion",
      "related_entity_id": "4a709856-2f20-472d-8ebf-9f2826cec174",
      "related_entity_short_reference": "20171101-NXTTGQ",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:36:53+00:00",
      "updated_at": "2017-11-01T19:36:53+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "4dad8a06-a4e7-413d-afab-df3e7670d4eb",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "debit",
      "related_entity_type": "conversion",
      "related_entity_id": "dddd209d-7db7-410b-823e-f9161ec3d903",
      "related_entity_short_reference": "20171101-NXTTGQ",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:36:53+00:00",
      "updated_at": "2017-11-01T19:36:53+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "4abcbf1a-2d4f-4210-9721-acf252de91b1",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "debit",
      "related_entity_type": "conversion",
      "related_entity_id": "5cf629aa-fc36-41ce-bc62-3fdad31ed3cb",
      "related_entity_short_reference": "20171101-YNTJYR",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:35:35+00:00",
      "updated_at": "2017-11-01T19:35:35+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "79137c85-ff72-4f29-a77e-5aac02240046",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "credit",
      "related_entity_type": "conversion",
      "related_entity_id": "5cf629aa-fc36-41ce-bc62-3fdad31ed3cb",
      "related_entity_short_reference": "20171101-YNTJYR",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:35:34+00:00",
      "updated_at": "2017-11-01T19:35:35+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "3f576c89-fb43-45d6-adf3-8d51b9902d6a",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "debit",
      "related_entity_type": "conversion",
      "related_entity_id": "ab0564af-b8ee-41d2-89ee-04d217f00b72",
      "related_entity_short_reference": "20171101-FVLTRW",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:24:09+00:00",
      "updated_at": "2017-11-01T19:24:09+00:00",
      "completed_at": "",
      "action": "conversion"
    }],
    "pagination": {
      "total_entries": 57,
      "total_pages": 12,
      "current_page": 1,
      "per_page": 5,
      "previous_page": -1,
      "next_page": 2,
      "order": "created_at",
      "order_asc_desc": "desc"
    }
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/transactions/1a96d33f-93b9-4f76-bfe7-e548db281948')
  .reply(200, {
    "id": "1a96d33f-93b9-4f76-bfe7-e548db281948",
    "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
    "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
    "currency": "GBP",
    "amount": "10000.23",
    "balance_amount": null,
    "type": "credit",
    "related_entity_type": "conversion",
    "related_entity_id": "4a709856-2f20-472d-8ebf-9f2826cec174",
    "related_entity_short_reference": "20171101-NXTTGQ",
    "status": "pending",
    "reason": "",
    "settles_at": "2017-11-03T14:00:00+00:00",
    "created_at": "2017-11-01T19:36:53+00:00",
    "updated_at": "2017-11-01T19:36:53+00:00",
    "completed_at": "",
    "action": "conversion"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "d2126864-44c8-4f19-9510-79482816c65b",
    "settlement_date": "2017-11-01T19:36:55+00:00",
    "conversion_date": "2017-11-01T19:36:55+00:00",
    "short_reference": "20171027-CMCRZC",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-11-01T19:36:55+00:00",
    "updated_at": "2017-11-01T19:36:55+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/transactions/find')
  .query({"order": "created_at", "order_asc_desc": "desc", "per_page": "5"})
  .reply(200, {
    "transactions": [{
      "id": "0c5c75f6-70ea-4f04-92ee-6148860c3b2b",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "credit",
      "related_entity_type": "conversion",
      "related_entity_id": "d2126864-44c8-4f19-9510-79482816c65b",
      "related_entity_short_reference": "20171101-FYBZPX",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:36:55+00:00",
      "updated_at": "2017-11-01T19:36:55+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "dc80c557-1218-4fec-82be-fc340fe882bb",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "debit",
      "related_entity_type": "conversion",
      "related_entity_id": "d2126864-44c8-4f19-9510-79482816c65b",
      "related_entity_short_reference": "20171101-FYBZPX",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:36:55+00:00",
      "updated_at": "2017-11-01T19:36:55+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "1a96d33f-93b9-4f76-bfe7-e548db281948",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "credit",
      "related_entity_type": "conversion",
      "related_entity_id": "dddd209d-7db7-410b-823e-f9161ec3d903",
      "related_entity_short_reference": "20171101-NXTTGQ",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:36:53+00:00",
      "updated_at": "2017-11-01T19:36:53+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "4dad8a06-a4e7-413d-afab-df3e7670d4eb",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "debit",
      "related_entity_type": "conversion",
      "related_entity_id": "dddd209d-7db7-410b-823e-f9161ec3d903",
      "related_entity_short_reference": "20171101-NXTTGQ",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:36:53+00:00",
      "updated_at": "2017-11-01T19:36:53+00:00",
      "completed_at": "",
      "action": "conversion"
    }, {
      "id": "4abcbf1a-2d4f-4210-9721-acf252de91b1",
      "balance_id": "07ee18e7-430e-4743-a42e-676061718a41",
      "account_id": "3a7d2f90-ae1f-493c-a8d6-26ad43700259",
      "currency": "GBP",
      "amount": "10000.23",
      "balance_amount": null,
      "type": "debit",
      "related_entity_type": "conversion",
      "related_entity_id": "5cf629aa-fc36-41ce-bc62-3fdad31ed3cb",
      "related_entity_short_reference": "20171101-YNTJYR",
      "status": "pending",
      "reason": "",
      "settles_at": "2017-11-03T14:00:00+00:00",
      "created_at": "2017-11-01T19:35:35+00:00",
      "updated_at": "2017-11-01T19:35:35+00:00",
      "completed_at": "",
      "action": "conversion"
    }],
    "pagination": {
      "total_entries": 59,
      "total_pages": 12,
      "current_page": 1,
      "per_page": 5,
      "previous_page": -1,
      "next_page": 2,
      "order": "created_at",
      "order_asc_desc": "desc"
    }
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/transactions/sender/e68301d3-5b04-4c1d-8f8b-13a9b8437040')
    .query({"id": "e68301d3-5b04-4c1d-8f8b-13a9b8437040"})
    .reply(200, {
        "id": "e68301d3-5b04-4c1d-8f8b-13a9b8437040",
        "amount": "1701.51",
        "currency": "EUR",
        "additional_information": "USTRD-0001",
        "value_date": "2018-07-04T00:00:00+00:00",
        "sender": "FR7615589290001234567890113, CMBRFR2BARK, Debtor, FR, Centre ville",
        "receiving_account_number": null,
        "receiving_account_iban": "GB99OXPH94665099600083",
        "created_at": "2018-07-04T14:57:38+00:00",
        "updated_at": "2018-07-04T14:57:39+00:00"
    });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
