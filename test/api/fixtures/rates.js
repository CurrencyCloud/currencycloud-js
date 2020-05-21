var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "2f473d1951dfb3418ba8a81c88eb1d42"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/rates/detailed')
  .query({"buy_currency": "EUR", "sell_currency": "GBP", "fixed_side": "buy", "amount": "6700"})
  .reply(200, {
    "settlement_cut_off_time": "2017-10-23T14:00:00Z",
    "currency_pair": "EURGBP",
    "client_buy_currency": "EUR",
    "client_sell_currency": "GBP",
    "client_buy_amount": "6700.00",
    "client_sell_amount": "4929.19",
    "fixed_side": "buy",
    "mid_market_rate": "0.7354",
    "client_rate": "0.7357",
    "partner_rate": null,
    "core_rate": "0.7357",
    "deposit_required": null,
    "deposit_amount": "0.0",
    "deposit_currency": "GBP"
  });

nock('https://devapi.currencycloud.com:443')
    .get('/v2/rates/detailed')
    .query({"buy_currency": "GBP", "sell_currency": "USD", "fixed_side": "buy", "amount": "10000", "conversion_date_preference":"optimize_liquidity"})
    .reply(200, {
    "settlement_cut_off_time": "2020-05-21T14:00:00Z",
    "currency_pair": "GBPUSD",
    "client_buy_currency": "GBP",
    "client_sell_currency": "USD",
    "client_buy_amount": "10000.00",
    "client_sell_amount": "14081.00",
    "fixed_side": "buy",
    "client_rate": "1.4081",
    "partner_rate": null,
    "core_rate": "1.4081",
    "deposit_required": false,
    "deposit_amount": "0.0",
    "deposit_currency": "USD",
    "mid_market_rate": "1.4080"
    });
nock('https://devapi.currencycloud.com:443')
  .get('/v2/rates/find')
  .query({"currency_pair": "USDGBP"})
  .reply(200, {"rates": {"USDGBP": ["0.648353", "0.648672"]}, "unavailable": []});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
