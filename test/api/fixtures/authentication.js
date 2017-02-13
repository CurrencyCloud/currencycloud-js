var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"034d23d24490718e8766853e14d480b7"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:10 GMT',
  'x-request-id': '2910007469756093752',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:11 GMT',
  'x-request-id': '2910007472633409851',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"9ee85342c432434fbe3035db5d41f4dd"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:11 GMT',
  'x-request-id': '2910007474755712317',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-30T13:46:49+00:00","updated_at":"2015-10-30T13:52:32+00:00","identification_type":null,"identification_value":null,"short_reference":"151030-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:11 GMT',
  'x-request-id': '2910007477557509438',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:12 GMT',
  'x-request-id': '2910007480543838527',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"14c3a6d2bef6b3fabbd84f4a0924e828"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:12 GMT',
  'x-request-id': '2910007483295318345',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-30T13:46:49+00:00","updated_at":"2015-10-30T13:52:32+00:00","identification_type":null,"identification_value":null,"short_reference":"151030-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:12 GMT',
  'x-request-id': '2910007485996416333',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:13 GMT',
  'x-request-id': '2910007488882120015',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"439c7a366dede548bb1878dc4045bc60"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:13 GMT',
  'x-request-id': '2910007490979295569',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:13 GMT',
  'x-request-id': '2910007493562968402',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"e1f125fcd33af884fbbdf4597e18a2a1"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:13 GMT',
  'x-request-id': '2910007495593032019',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:59:14 GMT',
  'x-request-id': '2910007498294146388',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
