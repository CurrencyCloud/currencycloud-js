var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"71fb965c86eae63684b539d67ae2befe"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:53:38 GMT',
  'x-request-id': '2902032147693988625',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/balances/GBP')
  .query({"currency":"GBP"})
  .reply(200, {"id":"0f553fcf-df96-4cf3-bac1-683a56e25834","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency":"GBP","amount":"0.00","created_at":"2015-10-15T00:55:57+00:00","updated_at":"2015-10-15T00:55:57+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:53:38 GMT',
  'x-request-id': '2902032151007499026',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '212' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/balances/find')
  .reply(200, {"balances":[{"id":"0f553fcf-df96-4cf3-bac1-683a56e25834","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency":"GBP","amount":"0.00","created_at":"2015-10-15T00:55:57+00:00","updated_at":"2015-10-15T00:55:57+00:00"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":25,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"asc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:53:40 GMT',
  'x-request-id': '2902032162256617236',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '385' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:53:40 GMT',
  'x-request-id': '2902032165385549589',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
