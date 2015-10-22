var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"2f473d1951dfb3418ba8a81c88eb1d42"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:29 GMT',
  'x-request-id': '2902033583957885011',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/rates/detailed')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"6700"})
  .reply(200, {"settlement_cut_off_time":"2015-10-23T14:00:00Z","currency_pair":"EURGBP","client_buy_currency":"EUR","client_sell_currency":"GBP","client_buy_amount":"6700.00","client_sell_amount":"4929.19","fixed_side":"buy","mid_market_rate":"0.7354","client_rate":"0.7357","partner_rate":null,"core_rate":"0.7357","deposit_required":null,"deposit_amount":"0.0","deposit_currency":"GBP"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:30 GMT',
  'x-request-id': '2902033590039646292',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '375' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/rates/find')
  .query({"currency_pair":"USDGBP"})
  .reply(200, {"rates":{"USDGBP":["0.648353","0.648672"]},"unavailable":[]}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:30 GMT',
  'x-request-id': '2902033593202145367',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '61' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:31 GMT',
  'x-request-id': '2902033597262223450',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
