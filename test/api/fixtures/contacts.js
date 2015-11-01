var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"48ab0f6892356c4ed57277418fcc4d43"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:40 GMT',
  'x-request-id': '2906310859922552377',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:40 GMT',
  'x-request-id': '2906310862128807482',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/create')
  .query({"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.1","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.1","id":"38b2e976-60c3-416a-be2e-51c700aed246","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-27T18:34:41+00:00","updated_at":"2015-10-27T18:34:41+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:41 GMT',
  'x-request-id': '2906310864225910331',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '500' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/reset_token/create')
  .query({"login_id":"john.1"})
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:41 GMT',
  'x-request-id': '2906310868244093500',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:42 GMT',
  'x-request-id': '2906310871255604797',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/create')
  .query({"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.2","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.2","id":"601cb2ed-52a2-48cf-a3f5-912bc64d8050","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-27T18:34:42+00:00","updated_at":"2015-10-27T18:34:42+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:42 GMT',
  'x-request-id': '2906310873117830718',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '500' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:42 GMT',
  'x-request-id': '2906310877723177535',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/create')
  .query({"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.3","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.3","id":"1c9f4b28-656e-4087-a6c9-d8d92735892f","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-27T18:34:43+00:00","updated_at":"2015-10-27T18:34:43+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:43 GMT',
  'x-request-id': '2906310879920988736',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '500' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/contacts/1c9f4b28-656e-4087-a6c9-d8d92735892f')
  .reply(200, {"login_id":"john.3","id":"1c9f4b28-656e-4087-a6c9-d8d92735892f","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-27T18:34:43+00:00","updated_at":"2015-10-27T18:34:43+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:44 GMT',
  'x-request-id': '2906310886355095105',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '500' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:44 GMT',
  'x-request-id': '2906310890213855810',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/create')
  .query({"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.4","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.4","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-27T18:34:44+00:00","updated_at":"2015-10-27T18:34:44+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:44 GMT',
  'x-request-id': '2906310892067698243',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '500' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/7673d3c7-cbe2-4e2e-be33-85a0cd9bc124')
  .query({"first_name":"Emmet","last_name":"Brown","email_address":"dr.emmet.brown@company.com","phone_number":"073 789 1661","your_reference":"doc","mobile_phone_number":"073 789 1661","login_id":"emmet.5","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1960-01-29","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124"})
  .reply(200, {"login_id":"emmet.5","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124","first_name":"Emmet","last_name":"Brown","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"dr.emmet.brown@company.com","mobile_phone_number":"073 789 1661","phone_number":"073 789 1661","your_reference":"doc","date_of_birth":"1960-01-29","created_at":"2015-10-27T18:34:44+00:00","updated_at":"2015-10-27T18:34:44+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:45 GMT',
  'x-request-id': '2906310896027172421',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '501' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/contacts/7673d3c7-cbe2-4e2e-be33-85a0cd9bc124')
  .reply(200, {"login_id":"emmet.5","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124","first_name":"Emmet","last_name":"Brown","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"dr.emmet.brown@company.com","mobile_phone_number":"073 789 1661","phone_number":"073 789 1661","your_reference":"doc","date_of_birth":"1960-01-29","created_at":"2015-10-27T18:34:44+00:00","updated_at":"2015-10-27T18:34:44+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:45 GMT',
  'x-request-id': '2906310900280146502',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '501' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/contacts/current')
  .reply(200, {"login_id":"test.it@mailinator.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Irina","last_name":"Gudkova","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"test.it.now@mailinator.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-13T11:47:30+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:46 GMT',
  'x-request-id': '2906310903652406855',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '481' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/contacts/find')
  .query({"login_id":"test.it@mailinator.com","order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"contacts":[{"login_id":"test.it@mailinator.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Irina","last_name":"Gudkova","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"test.it.now@mailinator.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-13T11:47:30+00:00"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":5,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"desc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:46 GMT',
  'x-request-id': '2906310907074957898',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '654' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/contacts/current')
  .reply(200, {"login_id":"test.it@mailinator.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Irina","last_name":"Gudkova","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"test.it.now@mailinator.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-13T11:47:30+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:46 GMT',
  'x-request-id': '2906310911017563723',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '481' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 18:34:47 GMT',
  'x-request-id': '2906310914414991948',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
