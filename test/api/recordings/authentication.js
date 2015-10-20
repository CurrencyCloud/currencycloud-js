var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"cdfcc001dd567ca91f375fb0b12a648e"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:06 GMT',
  'x-request-id': '2900965351058580689',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:06 GMT',
  'x-request-id': '2900965354363702482',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"99e6b92e6653943c3fd8b58596883c94"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:07 GMT',
  'x-request-id': '2900965356720919763',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:07 GMT',
  'x-request-id': '2900965359656930516',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:07 GMT',
  'x-request-id': '2900965363012365525',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"472014bfd2864227bbaafc2284fe3c60"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:08 GMT',
  'x-request-id': '2900965365226940631',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:08 GMT',
  'x-request-id': '2900965367953239256',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:08 GMT',
  'x-request-id': '2900965370528546010',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"88a6b9d4187226cfbb5ae392f27d6334"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:08 GMT',
  'x-request-id': '2900965372961266907',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:09 GMT',
  'x-request-id': '2900965375939214556',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"b96c3d89b1b5bac39f8c5fe819f832d3"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:09 GMT',
  'x-request-id': '2900965378069919965',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 20 Oct 2015 09:34:09 GMT',
  'x-request-id': '2900965381047867614',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
