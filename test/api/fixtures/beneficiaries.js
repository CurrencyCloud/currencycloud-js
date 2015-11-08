var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"67660a3ca5c6069b120190c4e744859f"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:13 GMT',
  'x-request-id': '2910006988795259126',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/validate')
  .query({"bank_country":"GB","currency":"GBP","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605"})
  .reply(200, {"payment_types":["regular"],"bank_country":"GB","bank_name":"BARCLAYS BANK PLC","bank_account_type":null,"currency":"GBP","account_number":"13071472","routing_code_type_1":"sort_code","beneficiary_address":[],"beneficiary_country":"GB","beneficiary_entity_type":null,"beneficiary_company_name":null,"beneficiary_first_name":null,"beneficiary_last_name":null,"beneficiary_city":null,"beneficiary_postcode":null,"beneficiary_state_or_province":null,"beneficiary_date_of_birth":null,"beneficiary_identification_type":null,"beneficiary_identification_value":null,"routing_code_value_1":"200605","routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":null,"iban":null,"bank_address":["Leicester","Leicestershire"]}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:14 GMT',
  'x-request-id': '2910006991664181495',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '722' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"c3dafe79-9394-4f43-a1a3-b7a518ab1cba","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:14+00:00","updated_at":"2015-11-01T20:58:14+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:14 GMT',
  'x-request-id': '2910006995422279928',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"49eca94d-7510-4071-bd27-f7b12ad5fdf9","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:15+00:00","updated_at":"2015-11-01T20:58:15+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:15 GMT',
  'x-request-id': '2910007001185236217',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/49eca94d-7510-4071-bd27-f7b12ad5fdf9')
  .reply(200, {"id":"49eca94d-7510-4071-bd27-f7b12ad5fdf9","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:15+00:00","updated_at":"2015-11-01T20:58:15+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:15 GMT',
  'x-request-id': '2910007006503615738',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"0fff089a-aa95-4f5b-91f6-205cb3d0dc67","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:16+00:00","updated_at":"2015-11-01T20:58:16+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:16 GMT',
  'x-request-id': '2910007009456415995',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/0fff089a-aa95-4f5b-91f6-205cb3d0dc67')
  .query({"bank_account_holder_name":"Martin McFly","bank_country":"US","currency":"USD","name":"Employee Funds","email":"martin@mcfly.com","beneficiary_address":"9303 Roslyndale Ave.","beneficiary_country":"US","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","bank_address":"1 Courthouse Square","bank_name":"Emmet Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none"})
  .reply(200, {"id":"0fff089a-aa95-4f5b-91f6-205cb3d0dc67","bank_account_holder_name":"Martin McFly","name":"Employee Funds","email":null,"payment_types":["priority"],"beneficiary_address":["9303 Roslyndale Ave."],"beneficiary_country":"US","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"US","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"USD","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:16+00:00","updated_at":"2015-11-01T20:58:17+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:17 GMT',
  'x-request-id': '2910007015160569086',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1136' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/0fff089a-aa95-4f5b-91f6-205cb3d0dc67')
  .reply(200, {"id":"0fff089a-aa95-4f5b-91f6-205cb3d0dc67","bank_account_holder_name":"Martin McFly","name":"Employee Funds","email":null,"payment_types":["priority"],"beneficiary_address":["9303 Roslyndale Ave."],"beneficiary_country":"US","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"US","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"USD","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:16+00:00","updated_at":"2015-11-01T20:58:17+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:17 GMT',
  'x-request-id': '2910007021686983936',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1136' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"14abeffa-13f4-4926-893b-101a2822bb73","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:18+00:00","updated_at":"2015-11-01T20:58:18+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:18 GMT',
  'x-request-id': '2910007024992099585',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/find')
  .query({"name":"Employee Funds","order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"beneficiaries":[{"id":"14abeffa-13f4-4926-893b-101a2822bb73","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:18+00:00","updated_at":"2015-11-01T20:58:18+00:00"},{"id":"0fff089a-aa95-4f5b-91f6-205cb3d0dc67","bank_account_holder_name":"Martin McFly","name":"Employee Funds","email":null,"payment_types":["priority"],"beneficiary_address":["9303 Roslyndale Ave."],"beneficiary_country":"US","beneficiary_entity_type":"company","beneficiary_company_name":"Back to the Future","beneficiary_first_name":"Martin","beneficiary_last_name":"McFly","beneficiary_city":"Hill Valley","beneficiary_postcode":"91331","beneficiary_state_or_province":"CA","beneficiary_date_of_birth":"1968-06-09","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"US","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"USD","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200606","routing_code_type_2":"aba","routing_code_value_2":"780","bic_swift":"COBADEFF","iban":"US89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:16+00:00","updated_at":"2015-11-01T20:58:17+00:00"},{"id":"49eca94d-7510-4071-bd27-f7b12ad5fdf9","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:15+00:00","updated_at":"2015-11-01T20:58:16+00:00"},{"id":"c3dafe79-9394-4f43-a1a3-b7a518ab1cba","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:14+00:00","updated_at":"2015-11-01T20:58:14+00:00"},{"id":"56fb2cef-3026-4f34-a90b-d4214a54f4d7","bank_account_holder_name":"Acme GmbH","name":"Employee Funds","email":null,"payment_types":["regular"],"beneficiary_address":[],"beneficiary_country":"DE","beneficiary_entity_type":null,"beneficiary_company_name":null,"beneficiary_first_name":null,"beneficiary_last_name":null,"beneficiary_city":null,"beneficiary_postcode":null,"beneficiary_state_or_province":null,"beneficiary_date_of_birth":null,"beneficiary_identification_type":null,"beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":null,"currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"false","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-30T13:52:31+00:00","updated_at":"2015-10-30T13:52:34+00:00"}],"pagination":{"total_entries":5,"total_pages":1,"current_page":1,"per_page":5,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"desc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:18 GMT',
  'x-request-id': '2910007030528554242',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '5678' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"f88b3da1-8cc8-4a89-8704-a61c703968b2","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:19+00:00","updated_at":"2015-11-01T20:58:19+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:19 GMT',
  'x-request-id': '2910007036140561667',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/f88b3da1-8cc8-4a89-8704-a61c703968b2/delete')
  .reply(200, {"id":"f88b3da1-8cc8-4a89-8704-a61c703968b2","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-11-01T20:58:19+00:00","updated_at":"2015-11-01T20:58:19+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:19 GMT',
  'x-request-id': '2910007041442169094',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/beneficiaries/f88b3da1-8cc8-4a89-8704-a61c703968b2')
  .query({"id":"f88b3da1-8cc8-4a89-8704-a61c703968b2"})
  .reply(404, {"error_code":"beneficiary_not_found","error_messages":{"id":[{"code":"beneficiary_not_found","message":"Beneficiary was not found for this id","params":{}}]}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:20 GMT',
  'x-request-id': '2910007049746857223',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '159' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 20:58:21 GMT',
  'x-request-id': '2910007052984882443',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
