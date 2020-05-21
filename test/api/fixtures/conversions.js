var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
    .reply(200, {"auth_token": "463a400f09f6b5a01b9962877c6c318a"});

//Create Conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "339c30e2-eed6-4dc4-b043-354f6b3e605f",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-VRQPFS",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:23+00:00",
        "updated_at": "2018-11-23T11:02:23+00:00",
        "mid_market_rate": "0.8036"
    });
//Create Conversion with conversion date preference
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000&conversion_date_preference=earliest&reason=Testing&term_agreement=true")
    .reply(200, {
        "id": "d56d7553-19ab-4cde-b44b-79cac86989cb",
        "settlement_date": "2020-05-19T13:30:00+00:00",
        "conversion_date": "2020-05-19T00:00:00+00:00",
        "short_reference": "20200519-XYLXJL",
        "creator_contact_id": "42a6af4a-65b8-4721-43d9-7f395da2551e",
        "account_id": "3f22044f-ae21-42a1-bc4f-cd0370b008a5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "1000.00",
        "client_sell_amount": "805.90",
        "fixed_side": "buy",
        "core_rate": "0.8059",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8059",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "1000.00",
        "unique_request_id": null,
        "created_at": "2020-05-19T12:31:43+00:00",
        "updated_at": "2020-05-19T12:31:43+00:00",
        "mid_market_rate": "0.8058"
    });
//Get conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "e183c95b-b0bd-4cdf-9215-75f6b1675dd1",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-SCYVKZ",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:24+00:00",
        "updated_at": "2018-11-23T11:02:24+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/e183c95b-b0bd-4cdf-9215-75f6b1675dd1')
    .reply(200, {
        "id": "e183c95b-b0bd-4cdf-9215-75f6b1675dd1",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-SCYVKZ",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:24+00:00",
        "updated_at": "2018-11-23T11:02:24+00:00",
        "mid_market_rate": "0.8036"
    });

//Find conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "ffdf0544-a868-488f-b096-effe8926a857",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-FSFQLZ",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:26+00:00",
        "updated_at": "2018-11-23T11:02:26+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/find')
    .query({"conversion_ids": ["ffdf0544-a868-488f-b096-effe8926a857"]})
    .reply(200, {
        "conversions": [{
            "id": "ffdf0544-a868-488f-b096-effe8926a857",
            "settlement_date": "2018-11-27T14:30:00+00:00",
            "conversion_date": "2018-11-27T00:00:00+00:00",
            "short_reference": "20181123-FSFQLZ",
            "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
            "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
            "currency_pair": "EURGBP",
            "status": "awaiting_funds",
            "buy_currency": "EUR",
            "sell_currency": "GBP",
            "client_buy_amount": "10000.23",
            "client_sell_amount": "8037.18",
            "fixed_side": "buy",
            "core_rate": "0.8037",
            "partner_rate": "",
            "partner_status": "funds_arrived",
            "partner_buy_amount": "0.00",
            "partner_sell_amount": "0.00",
            "client_rate": "0.8037",
            "deposit_required": false,
            "deposit_amount": "0.00",
            "deposit_currency": "",
            "deposit_status": "not_required",
            "deposit_required_at": "",
            "payment_ids": [],
            "unallocated_funds": "10000.23",
            "unique_request_id": null,
            "created_at": "2018-11-23T11:02:26+00:00",
            "updated_at": "2018-11-23T11:02:26+00:00",
            "mid_market_rate": "0.8036"
        }],
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
//Cancel conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "18c1e19b-09fd-419c-933b-0dff80a2c4de",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-FTFXLT",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:27+00:00",
        "updated_at": "2018-11-23T11:02:28+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/18c1e19b-09fd-419c-933b-0dff80a2c4de/cancel')
    .reply(200, {
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "event_account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "event_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "conversion_id": "18c1e19b-09fd-419c-933b-0dff80a2c4de",
        "event_type": "self_service_cancellation",
        "amount": "-2.00",
        "currency": "GBP",
        "notes": "",
        "event_date_time": "2018-11-23T11:02:29+00:00"
    });
//Change settlement date of conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "8d56c87b-ef2f-45bb-8939-96c4a8d08426",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-ZFGFSN",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:30+00:00",
        "updated_at": "2018-11-23T11:02:30+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/8d56c87b-ef2f-45bb-8939-96c4a8d08426/date_change', "new_settlement_date=2018-11-30T14%3A30%3A00.000Z")
    .reply(200, {
        "conversion_id": "8d56c87b-ef2f-45bb-8939-96c4a8d08426",
        "amount": "-2.00",
        "currency": "GBP",
        "new_conversion_date": "2018-11-30T00:00:00+00:00",
        "new_settlement_date": "2018-11-30T14:30:00+00:00",
        "old_conversion_date": "2018-11-27T00:00:00+00:00",
        "old_settlement_date": "2018-11-27T14:30:00+00:00",
        "event_date_time": "2018-11-23T11:02:32+00:00"
    });
//Split conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "fd8d1996-6cf2-4cc9-b157-4611c11837a3",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-SFBLBR",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:33+00:00",
        "updated_at": "2018-11-23T11:02:33+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/fd8d1996-6cf2-4cc9-b157-4611c11837a3/split', "amount=300")
    .reply(200, {
        "parent_conversion": {
            "id": "fd8d1996-6cf2-4cc9-b157-4611c11837a3",
            "short_reference": "20181123-SFBLBR",
            "sell_amount": "7796.07",
            "sell_currency": "GBP",
            "buy_amount": "9700.23",
            "buy_currency": "EUR",
            "settlement_date": "2018-11-27T14:30:00+00:00",
            "conversion_date": "2018-11-27T00:00:00+00:00",
            "status": "awaiting_funds"
        },
        "child_conversion": {
            "id": "1861a748-e2fd-430f-a0db-86dd7d7a80cf",
            "short_reference": "20181123-ZWHPKK",
            "sell_amount": "241.11",
            "sell_currency": "GBP",
            "buy_amount": "300.00",
            "buy_currency": "EUR",
            "settlement_date": "2018-11-27T14:30:00+00:00",
            "conversion_date": "2018-11-27T00:00:00+00:00",
            "status": "awaiting_funds"
        }
    });
//Retrieve profit and/or loss of conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/profit_and_loss')
    .query({"per_page": "1"})
    .reply(200, {
        "conversion_profit_and_losses": [{
            "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
            "contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
            "event_account_id": null,
            "event_contact_id": null,
            "conversion_id": "9c2609f2-4a01-4e43-a399-c5ce4c183406",
            "event_type": "self_service_cancellation",
            "amount": "-20.00",
            "currency": "GBP",
            "notes": "",
            "event_date_time": "2018-10-26T14:38:15+00:00"
        }],
        "pagination": {
            "total_entries": 27,
            "total_pages": 27,
            "current_page": 1,
            "per_page": 1,
            "previous_page": -1,
            "next_page": 2,
            "order": "event_date_time",
            "order_asc_desc": "asc"
        }
    });
//Create date change quote for conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "ed485d5a-b99e-4034-bd26-4f6322cd4d9f",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-LWDPHS",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:39+00:00",
        "updated_at": "2018-11-23T11:02:39+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/ed485d5a-b99e-4034-bd26-4f6322cd4d9f/date_change_quote')
    .query({"new_settlement_date": "2018-11-30T14%3A30%3A00.000Z"})
    .reply(200, {
        "conversion_id": "ed485d5a-b99e-4034-bd26-4f6322cd4d9f",
        "amount": "-2.00",
        "currency": "GBP",
        "new_conversion_date": "2018-11-30T00:00:00+00:00",
        "new_settlement_date": "2018-11-30T14:30:00+00:00",
        "old_conversion_date": "2018-11-27T00:00:00+00:00",
        "old_settlement_date": "2018-11-27T14:30:00+00:00",
        "event_date_time": "2018-11-23T11:02:40+00:00"
    });
//Split preview of conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
    .reply(200, {
        "id": "f53f14ac-2c1b-4749-a1d9-f0f60aad68f6",
        "settlement_date": "2018-11-27T14:30:00+00:00",
        "conversion_date": "2018-11-27T00:00:00+00:00",
        "short_reference": "20181123-TLJHHY",
        "creator_contact_id": "3cae081f-56f7-4f2d-8235-45713b592b43",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "currency_pair": "EURGBP",
        "status": "awaiting_funds",
        "buy_currency": "EUR",
        "sell_currency": "GBP",
        "client_buy_amount": "10000.23",
        "client_sell_amount": "8037.18",
        "fixed_side": "buy",
        "core_rate": "0.8037",
        "partner_rate": "",
        "partner_status": "funds_arrived",
        "partner_buy_amount": "0.00",
        "partner_sell_amount": "0.00",
        "client_rate": "0.8037",
        "deposit_required": false,
        "deposit_amount": "0.00",
        "deposit_currency": "",
        "deposit_status": "not_required",
        "deposit_required_at": "",
        "payment_ids": [],
        "unallocated_funds": "10000.23",
        "unique_request_id": null,
        "created_at": "2018-11-23T11:02:41+00:00",
        "updated_at": "2018-11-23T11:02:41+00:00",
        "mid_market_rate": "0.8036"
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/f53f14ac-2c1b-4749-a1d9-f0f60aad68f6/split_preview')
    .query({"amount": "2"})
    .reply(200, {
        "parent_conversion": {
            "id": "f53f14ac-2c1b-4749-a1d9-f0f60aad68f6",
            "short_reference": "20181123-TLJHHY",
            "sell_amount": "8035.57",
            "sell_currency": "GBP",
            "buy_amount": "9998.23",
            "buy_currency": "EUR",
            "settlement_date": "2018-11-27T14:30:00+00:00",
            "conversion_date": "2018-11-27T00:00:00+00:00",
            "status": "awaiting_funds"
        },
        "child_conversion": {
            "id": null,
            "short_reference": null,
            "sell_amount": "1.61",
            "sell_currency": "GBP",
            "buy_amount": "2.00",
            "buy_currency": "EUR",
            "settlement_date": "2018-11-27T14:30:00+00:00",
            "conversion_date": "2018-11-27T00:00:00+00:00",
            "status": "awaiting_funds"
        }
    });
//Split history of conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/c805aa35-9bd3-4afe-ade2-d341e551aa16/split_history')
    .reply(200, {
        "parent_conversion": null,
        "origin_conversion": null,
        "child_conversions": [{
            "id": "2c916a6d-d2c7-431d-b98c-e047957ce0f0",
            "short_reference": "20181025-DYTRZP",
            "sell_amount": "100.00",
            "sell_currency": "GBP",
            "buy_amount": "124.12",
            "buy_currency": "EUR",
            "settlement_date": "2018-10-10T13:00:00+00:00",
            "conversion_date": "2018-10-10T00:00:00+00:00",
            "status": "awaiting_funds"
        }, {
            "id": "b71ff0db-e087-4b56-8816-45232767ab6f",
            "short_reference": "20181122-TGQLNB",
            "sell_amount": "3.00",
            "sell_currency": "GBP",
            "buy_amount": "3.72",
            "buy_currency": "EUR",
            "settlement_date": "2018-10-10T13:00:00+00:00",
            "conversion_date": "2018-10-10T00:00:00+00:00",
            "status": "awaiting_funds"
        }, {
            "id": "9b26b41f-c469-4f9f-8f94-2f9356f9c20e",
            "short_reference": "20181122-KYCCWP",
            "sell_amount": "100.00",
            "sell_currency": "GBP",
            "buy_amount": "124.12",
            "buy_currency": "EUR",
            "settlement_date": "2018-10-10T13:00:00+00:00",
            "conversion_date": "2018-10-10T00:00:00+00:00",
            "status": "awaiting_funds"
        }]
    });
//Create cancellation quote for conversion
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/conversions/c006ed4c-d33c-43f8-98cb-f9c34cb87b3a/cancellation_quote')
    .reply(200, {"amount": "-0.10", "currency": "USD", "event_date_time": "2018-11-23T11:02:44+00:00"});
//Teardown
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});
