var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"daa219c4286152eea787a1f7a509ad63"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:07 GMT',
  'x-request-id': '2902032391139776306',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/validate')
  .query({"bank_country":"GB","currency":"GBP","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605"})
  .reply(200, {"payment_types":["regular"],"bank_country":"GB","bank_name":"BARCLAYS BANK PLC","bank_account_type":null,"currency":"GBP","account_number":"13071472","routing_code_type_1":"sort_code","beneficiary_address":[],"beneficiary_country":"GB","beneficiary_entity_type":null,"beneficiary_company_name":null,"beneficiary_first_name":null,"beneficiary_last_name":null,"beneficiary_city":null,"beneficiary_postcode":null,"beneficiary_state_or_province":null,"beneficiary_date_of_birth":null,"beneficiary_identification_type":null,"beneficiary_identification_value":null,"routing_code_value_1":"200605","routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":null,"iban":null,"bank_address":["Leicester","Leicestershire"]}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:07 GMT',
  'x-request-id': '2902032394881092403',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '722' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"551b508b-3bce-4eab-a17f-d8c60f8176b2","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:08+00:00","updated_at":"2015-10-21T20:54:08+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:08 GMT',
  'x-request-id': '2902032400409183028',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"de1aa011-b390-46ee-b27e-b1fdad992277","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:09+00:00","updated_at":"2015-10-21T20:54:09+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:09 GMT',
  'x-request-id': '2902032406692254517',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/de1aa011-b390-46ee-b27e-b1fdad992277')
  .query({"id":"de1aa011-b390-46ee-b27e-b1fdad992277"})
  .reply(200, {"id":"de1aa011-b390-46ee-b27e-b1fdad992277","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:09+00:00","updated_at":"2015-10-21T20:54:09+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:10 GMT',
  'x-request-id': '2902032412413287223',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:10+00:00","updated_at":"2015-10-21T20:54:10+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:10 GMT',
  'x-request-id': '2902032415810677560',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1')
  .query({"bank_account_holder_name":"Martin McFly","bank_country":"US","currency":"USD","name":"Employee Funds","email":"martin@mcfly.com","beneficiary_address":"9303 Roslyndale Ave.","beneficiary_country":"US","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","bank_address":"1 Courthouse Square","bank_name":"Emmet Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","id":"3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1"})
  .reply(200, {"id":"3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1","bank_account_holder_name":"Martin McFly","name":"Employee Funds","email":null,"payment_types":["priority"],"beneficiary_address":["9303 Roslyndale Ave."],"beneficiary_country":"US","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"US","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"USD","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:10+00:00","updated_at":"2015-10-21T20:54:11+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:11 GMT',
  'x-request-id': '2902032421212951356',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1136' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1')
  .query({"id":"3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1"})
  .reply(200, {"id":"3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1","bank_account_holder_name":"Martin McFly","name":"Employee Funds","email":null,"payment_types":["priority"],"beneficiary_address":["9303 Roslyndale Ave."],"beneficiary_country":"US","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"US","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"USD","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:10+00:00","updated_at":"2015-10-21T20:54:11+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:11 GMT',
  'x-request-id': '2902032427613454142',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1136' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"2de634d9-514f-4bd1-80a0-07fd4b51fe6c","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:12+00:00","updated_at":"2015-10-21T20:54:12+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:12 GMT',
  'x-request-id': '2902032430968889152',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/find')
  .query({"name":"Employee Funds","order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"beneficiaries":[{"id":"2de634d9-514f-4bd1-80a0-07fd4b51fe6c","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:12+00:00","updated_at":"2015-10-21T20:54:12+00:00"},{"id":"3dd7c599-d39e-4ebd-aaec-9cf0d5413cf1","bank_account_holder_name":"Martin McFly","name":"Employee Funds","email":null,"payment_types":["priority"],"beneficiary_address":["9303 Roslyndale Ave."],"beneficiary_country":"US","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"US","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"USD","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:10+00:00","updated_at":"2015-10-21T20:54:12+00:00"},{"id":"de1aa011-b390-46ee-b27e-b1fdad992277","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:09+00:00","updated_at":"2015-10-21T20:54:10+00:00"},{"id":"551b508b-3bce-4eab-a17f-d8c60f8176b2","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:08+00:00","updated_at":"2015-10-21T20:54:09+00:00"},{"id":"e577181f-2962-476d-abab-63f70a22a96c","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:47:26+00:00","updated_at":"2015-10-21T20:47:27+00:00"}],"pagination":{"total_entries":148,"total_pages":30,"current_page":1,"per_page":5,"previous_page":-1,"next_page":2,"order":"created_at","order_asc_desc":"desc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:13 GMT',
  'x-request-id': '2902032436614418243',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '5752' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"cb052979-eab3-4bed-b63c-2ca1ca2e832c","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:13+00:00","updated_at":"2015-10-21T20:54:13+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:13 GMT',
  'x-request-id': '2902032442964579141',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/cb052979-eab3-4bed-b63c-2ca1ca2e832c/delete')
  .query({"id":"cb052979-eab3-4bed-b63c-2ca1ca2e832c"})
  .reply(200, {"id":"cb052979-eab3-4bed-b63c-2ca1ca2e832c","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-21T20:54:13+00:00","updated_at":"2015-10-21T20:54:14+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:14 GMT',
  'x-request-id': '2902032448165551943',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/cb052979-eab3-4bed-b63c-2ca1ca2e832c')
  .query({"id":"cb052979-eab3-4bed-b63c-2ca1ca2e832c"})
  .reply(404, {"error_code":"beneficiary_not_found","error_messages":{"id":[{"code":"beneficiary_not_found","message":"Beneficiary was not found for this id","params":{}}]}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:14 GMT',
  'x-request-id': '2902032451923646280',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '159' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:54:15 GMT',
  'x-request-id': '2902032456059203402',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
