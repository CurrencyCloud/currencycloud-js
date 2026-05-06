var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
    .reply(200, {"auth_token": "463a400f09f6b5a01b9962877c6c318a"});

//Create Quote
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/quotes/create', "buy_currency=USD&sell_currency=EUR&fixed_side=sell&amount=100&hold_period=30s")
    .reply(200, {
        "quote_id": "3c25ce4a-3552-45bb-869e-406c795052aa",
        "buy_currency": "USD",
        "sell_currency": "EUR",
        "fixed_side": "sell",
        "client_buy_amount": "118.56",
        "client_sell_amount": "100.0",
        "client_rate": "1.1856",
        "core_rate": "1.1858",
        "partner_rate": "1.1856",
        "partner_buy_amount": "118.56",
        "partner_sell_amount": "100.0",
        "mid_market_rate": "1.1858",
        "currency_pair": "EURUSD",
        "deposit_required": "false",
        "deposit_amount": "0.0",
        "deposit_currency": "EUR",
        "settlement_cut_off_time": "2025-08-13T15:30:00Z",
        "created_at": "2025-08-11T08:10:21Z",
        "expires_at": "2025-08-11T08:10:51Z"
    });

//Create Quote with conversion date preference
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/quotes/create', "buy_currency=GBP&sell_currency=EUR&fixed_side=buy&amount=5000&hold_period=3m&conversion_date_preference=earliest")
    .reply(200, {
        "quote_id": "7f89ab12-9876-54cd-ef01-234567890abc",
        "buy_currency": "GBP",
        "sell_currency": "EUR",
        "fixed_side": "buy",
        "client_buy_amount": "5000.00",
        "client_sell_amount": "5850.00",
        "client_rate": "1.1700",
        "core_rate": "1.1702",
        "partner_rate": "1.1700",
        "partner_buy_amount": "5000.00",
        "partner_sell_amount": "5850.00",
        "mid_market_rate": "1.1702",
        "currency_pair": "EURGBP",
        "deposit_required": "false",
        "deposit_amount": "0.0",
        "deposit_currency": "EUR",
        "settlement_cut_off_time": "2025-08-13T15:30:00Z",
        "created_at": "2025-08-11T09:15:00Z",
        "expires_at": "2025-08-11T09:18:00Z"
    });

//Teardown
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});
