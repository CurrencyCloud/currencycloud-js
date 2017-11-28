var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"
  })
  .reply(200, {"auth_token":"04e61732784d6d6c4a4c7d25a8a74284"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:11 GMT',
  'x-request-id': '2902104898920289219',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:11 GMT',
  'x-request-id': '2902104901965347780',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/contacts/create', {"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.1","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.1","id":"9e27cd81-2556-4746-866a-781a4f904387","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-21T23:18:11+00:00","updated_at":"2015-10-21T23:18:11+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:11 GMT',
  'x-request-id': '2902104904490309574',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '491' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","on_behalf_of":"9e27cd81-2556-4746-866a-781a4f904387"})
  .reply(200, {"id":"91a31f30-6380-442f-8747-e4b5f909dad9","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"9e27cd81-2556-4746-866a-781a4f904387","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T23:18:12+00:00","updated_at":"2015-10-21T23:18:12+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:12 GMT',
  'x-request-id': '2902104909171167175',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:13 GMT',
  'x-request-id': '2902104915613597640',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '448' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/contacts/create', {"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.2","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.2","id":"12d4f6d3-7a52-47e1-8e35-6017a492e3e3","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2015-10-21T23:18:13+00:00","updated_at":"2015-10-21T23:18:13+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:13 GMT',
  'x-request-id': '2902104918809658313',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '491' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","on_behalf_of":"12d4f6d3-7a52-47e1-8e35-6017a492e3e3"})
  .reply(200, {"id":"18b5868c-7cd4-4c92-b867-b5928b625d75","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"12d4f6d3-7a52-47e1-8e35-6017a492e3e3","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T23:18:14+00:00","updated_at":"2015-10-21T23:18:14+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:14 GMT',
  'x-request-id': '2902104923456969674',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/contacts/current')
  .reply(200, {"login_id":"test.it.now@mailinator.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Irina","last_name":"Gudkova","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Toptal","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"test.it.now@mailinator.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2015-10-13T11:47:30+00:00","updated_at":"2015-10-13T11:47:30+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:14 GMT',
  'x-request-id': '2902104929781965774',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '481' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"eefd340d-1ff9-4bd4-a8c5-59e3959f00c9","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T23:18:15+00:00","updated_at":"2015-10-21T23:18:15+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:15 GMT',
  'x-request-id': '2902104933414246352',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/beneficiary_required_details')
  .query({"currency":"US","bank_account_country":"US"})
  .reply(400, {"error_code":"beneficiary_required_details_failed","error_messages":{"currency":[{"code":"currency_is_in_invalid_format","message":"currency is not a valid ISO 4217 currency code","params":{"type":"currency"}}]}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sat, 07 Nov 2015 17:28:36 GMT',
  'x-request-id': '2914250135666307067',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '213' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 23:18:15 GMT',
  'x-request-id': '2902104939042982867',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
