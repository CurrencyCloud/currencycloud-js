var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"035a75d5d3393272dfe30639a3cc8a2a"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:06 GMT',
  'x-request-id': '2902122474840799158',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:06 GMT',
  'x-request-id': '2902122478095581113',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/create')
  .query({"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"smith.john1","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"smith.john1","id":"2d7b6232-8ded-4c6b-b7c7-9b3ae77ff656","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-21T23:53:06+00:00","updated_at":"2015-10-21T23:53:06+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:07 GMT',
  'x-request-id': '2902122480805113786',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '496' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","on_behalf_of":"2d7b6232-8ded-4c6b-b7c7-9b3ae77ff656"})
  .reply(200, {"id":"93d8ff26-a4f5-4a3a-80d9-70699cdfed20","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"2d7b6232-8ded-4c6b-b7c7-9b3ae77ff656","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T23:53:10+00:00","updated_at":"2015-10-21T23:53:10+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:11 GMT',
  'x-request-id': '2902122510517559233',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:11 GMT',
  'x-request-id': '2902122520634208196',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/contacts/create')
  .query({"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"smith.john2","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"smith.john2","id":"13a49da9-4298-44e5-bd43-98f48099d27f","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-21T23:53:12+00:00","updated_at":"2015-10-21T23:53:12+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:13 GMT',
  'x-request-id': '2902122530046244809',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '496' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","on_behalf_of":"13a49da9-4298-44e5-bd43-98f48099d27f"})
  .reply(200, {"id":"5d2e62f0-c65f-4f4e-85f8-cf8972751ba1","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"13a49da9-4298-44e5-bd43-98f48099d27f","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T23:53:13+00:00","updated_at":"2015-10-21T23:53:13+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:13 GMT',
  'x-request-id': '2902122534936811466',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/contacts/current')
  .reply(200, {"login_id":"test.it.now@mailinator.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Irina","last_name":"Gudkova","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"test.it.now@mailinator.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-13T11:47:30+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:14 GMT',
  'x-request-id': '2902122541320529868',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '481' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"896b3ad4-fdbe-4c53-b703-164b12b265c6","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T23:53:14+00:00","updated_at":"2015-10-21T23:53:14+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:14 GMT',
  'x-request-id': '2902122545162494925',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:53:15 GMT',
  'x-request-id': '2902122550489284562',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
