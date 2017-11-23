var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"
  })
  .reply(200, {"auth_token":"05c8d5ae9ac6315f7ed9bf09c6c355bc"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:49 GMT',
  'x-request-id': '2910007293217841449',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/balances/GBP')
  .reply(200, {"id":"07ee18e7-430e-4743-a42e-676061718a41","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency":"GBP","amount":"0.00","created_at":"2015-10-30T13:51:11+00:00","updated_at":"2015-10-30T13:51:11+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:50 GMT',
  'x-request-id': '2910007296338421034',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '212' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/balances/find')
  .reply(200, {"balances":[{"id":"70167fc4-c099-4fa2-bc98-495c6917d2ff","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency":"EUR","amount":"0.00","created_at":"2015-10-30T13:51:11+00:00","updated_at":"2015-10-30T13:51:11+00:00"},{"id":"07ee18e7-430e-4743-a42e-676061718a41","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency":"GBP","amount":"0.00","created_at":"2015-10-30T13:51:11+00:00","updated_at":"2015-10-30T13:51:11+00:00"}],"pagination":{"total_entries":2,"total_pages":1,"current_page":1,"per_page":25,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"asc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:50 GMT',
  'x-request-id': '2910007298922089773',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '598' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:50 GMT',
  'x-request-id': '2910007301530950958',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
