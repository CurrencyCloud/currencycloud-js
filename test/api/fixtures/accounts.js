var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"
  })
  .reply(200, {"auth_token":"3e7c564909890f97bb0e5548325d73ea"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:36 GMT',
  'x-request-id': '2901925932188073507',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/accounts/create')
  .query({"account_name":"Acme Ltd.","legal_entity_type":"company","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","postal_code":"CR4 3RZ","country":"GB","spread_table":"no_markup","identification_type":"none"})
  .reply(200, {"id":"9c9c2492-b0f3-4cfe-9243-b062c9985a9c","account_name":"Acme Ltd.","brand":"currencycloud","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","country":"GB","postal_code":"CR4 3RZ","spread_table":"no_markup","legal_entity_type":"company","created_at":"2015-10-21T17:22:37+00:00","updated_at":"2015-10-21T17:22:37+00:00","identification_type":"none","identification_value":null,"short_reference":"151021-00021"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:37 GMT',
  'x-request-id': '2901925935191167524',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '490' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/accounts/create')
  .query({"account_name":"Acme Ltd.","legal_entity_type":"company","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","postal_code":"CR4 3RZ","country":"GB","spread_table":"no_markup","identification_type":"none"})
  .reply(200, {"id":"5908d350-1120-4177-a12a-94e302a68f70","account_name":"Acme Ltd.","brand":"currencycloud","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","country":"GB","postal_code":"CR4 3RZ","spread_table":"no_markup","legal_entity_type":"company","created_at":"2015-10-21T17:22:37+00:00","updated_at":"2015-10-21T17:22:37+00:00","identification_type":"none","identification_value":null,"short_reference":"151021-00022"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:37 GMT',
  'x-request-id': '2901925940987701798',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '490' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/5908d350-1120-4177-a12a-94e302a68f70')
  .reply(200, {"id":"5908d350-1120-4177-a12a-94e302a68f70","account_name":"Acme Ltd.","brand":"currencycloud","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","country":"GB","postal_code":"CR4 3RZ","spread_table":"no_markup","legal_entity_type":"company","created_at":"2015-10-21T17:22:37+00:00","updated_at":"2015-10-21T17:22:37+00:00","identification_type":"none","identification_value":null,"short_reference":"151021-00022"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:38 GMT',
  'x-request-id': '2901925946490626599',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '490' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/accounts/create')
  .query({"account_name":"Acme Ltd.","legal_entity_type":"company","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","postal_code":"CR4 3RZ","country":"GB","spread_table":"no_markup","identification_type":"none"})
  .reply(200, {"id":"2fbb0ea1-3d7d-4b45-bc8a-73f59f39b4f6","account_name":"Acme Ltd.","brand":"currencycloud","your_reference":"POS-UID-23523","status":"enabled","street":"164 Bishops Gate","city":"London","state_or_province":"Ontario","country":"GB","postal_code":"CR4 3RZ","spread_table":"no_markup","legal_entity_type":"company","created_at":"2015-10-21T17:22:38+00:00","updated_at":"2015-10-21T17:22:38+00:00","identification_type":"none","identification_value":null,"short_reference":"151021-00023"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:39 GMT',
  'x-request-id': '2901925949376329256',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '490' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/accounts/2fbb0ea1-3d7d-4b45-bc8a-73f59f39b4f6')
  .query({"account_name":"Company PLC","legal_entity_type":"company","your_reference":"0012345564ABC","status":"enabled","street":"1 London Road","city":"London","state_or_province":"","postal_code":"AB12 CD1","country":"GB","spread_table":"flat_0.5_percent","identification_type":"none"})
  .reply(200, {"id":"2fbb0ea1-3d7d-4b45-bc8a-73f59f39b4f6","account_name":"Company PLC","brand":"currencycloud","your_reference":"0012345564ABC","status":"enabled","street":"1 London Road","city":"London","state_or_province":"","country":"GB","postal_code":"AB12 CD1","spread_table":"flat_0.5_percent","legal_entity_type":"company","created_at":"2015-10-21T17:22:38+00:00","updated_at":"2015-10-21T17:22:38+00:00","identification_type":"none","identification_value":null,"short_reference":"151021-00023"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:39 GMT',
  'x-request-id': '2906295611236798573',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '490' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/2fbb0ea1-3d7d-4b45-bc8a-73f59f39b4f6')
  .reply(200, {"id":"2fbb0ea1-3d7d-4b45-bc8a-73f59f39b4f6","account_name":"Company PLC","brand":"currencycloud","your_reference":"0012345564ABC","status":"enabled","street":"1 London Road","city":"London","state_or_province":"","country":"GB","postal_code":"AB12 CD1","spread_table":"flat_0.5_percent","legal_entity_type":"company","created_at":"2015-10-21T17:22:38+00:00","updated_at":"2015-10-21T17:22:38+00:00","identification_type":"none","identification_value":null,"short_reference":"151021-00023"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:39 GMT',
  'x-request-id': '2906295616362193010',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '490' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:39 GMT',
  'x-request-id': '2901925959962747437',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/find')
  .query({"account_name":"Toptal","order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"accounts":[{"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":5,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"desc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:40 GMT',
  'x-request-id': '2901925962974263854',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '621' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:40 GMT',
  'x-request-id': '2901925966002556465',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 17:22:40 GMT',
  'x-request-id': '2901925968896615986',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
