var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"})
  .reply(200, {"auth_token":"96e1b2f53272528b6c8ced944704fd18"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:10 GMT',
  'x-request-id': '2906350367003114485',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"4a709856-2f20-472d-8ebf-9f2826cec174","settlement_date":"2015-10-29T14:00:00+00:00","conversion_date":"2015-10-29T00:00:00+00:00","short_reference":"20151027-ZGBRYR","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-27T19:53:10+00:00","updated_at":"2015-10-27T19:53:11+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:11 GMT',
  'x-request-id': '2906350369133806582',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"15f75bad-2176-42b3-a3a5-a6f561c7a849","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-27T19:53:11+00:00","updated_at":"2015-10-27T19:53:12+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:12 GMT',
  'x-request-id': '2906350377623042040',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/create')
  .query({"currency":"EUR","amount":"10000","reason":"Salary for March","reference":"INVOICE 9876","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Some Company LLC","payer_first_name":"John","payer_last_name":"Doe","payer_city":"London","payer_address":"27 Colmore Row","payer_postcode":"W11 2BQ","payer_state_or_province":"TX","payer_country":"GB","payer_date_of_birth":"1980-10-10","payer_identification_type":"none","conversion_id":"4a709856-2f20-472d-8ebf-9f2826cec174","beneficiary_id":"15f75bad-2176-42b3-a3a5-a6f561c7a849"})
  .reply(200, {"id":"a13df79f-6e1c-4427-b2cc-614547c5486a","amount":"10000.00","beneficiary_id":"15f75bad-2176-42b3-a3a5-a6f561c7a849","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-ZGBRYR001","conversion_id":"4a709856-2f20-472d-8ebf-9f2826cec174","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:13+00:00","updated_at":"2015-10-27T19:53:13+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:13 GMT',
  'x-request-id': '2906350384627569657',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '726' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"e204e1da-0ed2-4098-b1d2-9a67f531ab32","settlement_date":"2015-10-29T14:00:00+00:00","conversion_date":"2015-10-29T00:00:00+00:00","short_reference":"20151027-CMCRZC","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-27T19:53:13+00:00","updated_at":"2015-10-27T19:53:14+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:14 GMT',
  'x-request-id': '2906350397126604795',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"236c6192-cd4c-47e8-8d27-230455a3b6a3","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-27T19:53:15+00:00","updated_at":"2015-10-27T19:53:15+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:15 GMT',
  'x-request-id': '2906350404684732412',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/create')
  .query({"currency":"EUR","amount":"10000","reason":"Salary for March","reference":"INVOICE 9876","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Some Company LLC","payer_first_name":"John","payer_last_name":"Doe","payer_city":"London","payer_address":"27 Colmore Row","payer_postcode":"W11 2BQ","payer_state_or_province":"TX","payer_country":"GB","payer_date_of_birth":"1980-10-10","payer_identification_type":"none","conversion_id":"e204e1da-0ed2-4098-b1d2-9a67f531ab32","beneficiary_id":"236c6192-cd4c-47e8-8d27-230455a3b6a3"})
  .reply(200, {"id":"c365b1b2-0451-40cb-a87a-2a299ba7c4ed","amount":"10000.00","beneficiary_id":"236c6192-cd4c-47e8-8d27-230455a3b6a3","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-CMCRZC001","conversion_id":"e204e1da-0ed2-4098-b1d2-9a67f531ab32","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:16+00:00","updated_at":"2015-10-27T19:53:16+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:16 GMT',
  'x-request-id': '2906350409717858301',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '726' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/payments/c365b1b2-0451-40cb-a87a-2a299ba7c4ed')
  .reply(200, {"id":"c365b1b2-0451-40cb-a87a-2a299ba7c4ed","amount":"10000.00","beneficiary_id":"236c6192-cd4c-47e8-8d27-230455a3b6a3","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-CMCRZC001","conversion_id":"e204e1da-0ed2-4098-b1d2-9a67f531ab32","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:16+00:00","updated_at":"2015-10-27T19:53:16+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:16 GMT',
  'x-request-id': '2906350422342748158',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '726' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"5c4716dc-42dd-4571-b4bf-0aa299fff928","settlement_date":"2015-10-29T14:00:00+00:00","conversion_date":"2015-10-29T00:00:00+00:00","short_reference":"20151027-ZMNZZB","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-27T19:53:17+00:00","updated_at":"2015-10-27T19:53:17+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:18 GMT',
  'x-request-id': '2906350424876111873',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"16d351fb-94ba-4c75-b554-49c793d69459","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-27T19:53:18+00:00","updated_at":"2015-10-27T19:53:18+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:18 GMT',
  'x-request-id': '2906350434447510530',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/create')
  .query({"currency":"EUR","amount":"10000","reason":"Salary for March","reference":"INVOICE 9876","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Some Company LLC","payer_first_name":"John","payer_last_name":"Doe","payer_city":"London","payer_address":"27 Colmore Row","payer_postcode":"W11 2BQ","payer_state_or_province":"TX","payer_country":"GB","payer_date_of_birth":"1980-10-10","payer_identification_type":"none","conversion_id":"5c4716dc-42dd-4571-b4bf-0aa299fff928","beneficiary_id":"16d351fb-94ba-4c75-b554-49c793d69459"})
  .reply(200, {"id":"48bf6096-8b17-4d9f-b8de-5a1c253f3bf8","amount":"10000.00","beneficiary_id":"16d351fb-94ba-4c75-b554-49c793d69459","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-ZMNZZB001","conversion_id":"5c4716dc-42dd-4571-b4bf-0aa299fff928","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:19+00:00","updated_at":"2015-10-27T19:53:19+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:20 GMT',
  'x-request-id': '2906350439564517379',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '726' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/48bf6096-8b17-4d9f-b8de-5a1c253f3bf8')
  .query({"currency":"EUR","amount":"0.23","reason":"Prepayment of salary for April","reference":"INVOICE 122/1","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Jens enskild firma","payer_first_name":"Jennifer","payer_last_name":"Waylon","payer_city":"Stockholm","payer_address":"22 Garvargatan","payer_postcode":"12332","payer_state_or_province":"Stockholm","payer_country":"SE","payer_date_of_birth":"1981-12-10","payer_identification_type":"none","conversion_id":"5c4716dc-42dd-4571-b4bf-0aa299fff928","beneficiary_id":"16d351fb-94ba-4c75-b554-49c793d69459"})
  .reply(200, {"id":"48bf6096-8b17-4d9f-b8de-5a1c253f3bf8","amount":"0.23","beneficiary_id":"16d351fb-94ba-4c75-b554-49c793d69459","currency":"EUR","reference":"INVOICE 122/1","reason":"Prepayment of salary for April","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-ZMNZZB001","conversion_id":"5c4716dc-42dd-4571-b4bf-0aa299fff928","failure_reason":"","payer_id":"9a234e2f-7d25-46f5-8fcf-b473e2b5b36d","payer_details_source":"payer","created_at":"2015-10-27T19:53:19+00:00","updated_at":"2015-10-27T19:53:21+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:21 GMT',
  'x-request-id': '2906350452055197701',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '737' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/payments/48bf6096-8b17-4d9f-b8de-5a1c253f3bf8')
  .reply(200, {"id":"48bf6096-8b17-4d9f-b8de-5a1c253f3bf8","amount":"0.23","beneficiary_id":"16d351fb-94ba-4c75-b554-49c793d69459","currency":"EUR","reference":"INVOICE 122/1","reason":"Prepayment of salary for April","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-ZMNZZB001","conversion_id":"5c4716dc-42dd-4571-b4bf-0aa299fff928","failure_reason":"","payer_id":"9a234e2f-7d25-46f5-8fcf-b473e2b5b36d","payer_details_source":"payer","created_at":"2015-10-27T19:53:19+00:00","updated_at":"2015-10-27T19:53:21+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:21 GMT',
  'x-request-id': '2906350463975407626',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '737' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"5281b799-2af3-4a2d-a19c-ccbd376b0539","settlement_date":"2015-10-29T14:00:00+00:00","conversion_date":"2015-10-29T00:00:00+00:00","short_reference":"20151027-KSCDQW","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-27T19:53:22+00:00","updated_at":"2015-10-27T19:53:22+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:22 GMT',
  'x-request-id': '2906350466458399755',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"4ccce6cb-7ae4-4266-bea4-dbbb0acabf84","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-27T19:53:23+00:00","updated_at":"2015-10-27T19:53:23+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:23 GMT',
  'x-request-id': '2906350473286769676',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/create')
  .query({"currency":"EUR","amount":"10000","reason":"Salary for March","reference":"INVOICE 9876","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Some Company LLC","payer_first_name":"John","payer_last_name":"Doe","payer_city":"London","payer_address":"27 Colmore Row","payer_postcode":"W11 2BQ","payer_state_or_province":"TX","payer_country":"GB","payer_date_of_birth":"1980-10-10","payer_identification_type":"none","conversion_id":"5281b799-2af3-4a2d-a19c-ccbd376b0539","beneficiary_id":"4ccce6cb-7ae4-4266-bea4-dbbb0acabf84"})
  .reply(200, {"id":"70f693a4-27fe-4ea8-b363-9d6d28928d21","amount":"10000.00","beneficiary_id":"4ccce6cb-7ae4-4266-bea4-dbbb0acabf84","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-KSCDQW001","conversion_id":"5281b799-2af3-4a2d-a19c-ccbd376b0539","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:24+00:00","updated_at":"2015-10-27T19:53:24+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:24 GMT',
  'x-request-id': '2906350478001164301',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '726' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/payments/find')
  .query({"conversion_id":"5281b799-2af3-4a2d-a19c-ccbd376b0539","beneficiary_id":"4ccce6cb-7ae4-4266-bea4-dbbb0acabf84"})
  .reply(200, {"payments":[{"id":"70f693a4-27fe-4ea8-b363-9d6d28928d21","amount":"10000.00","beneficiary_id":"4ccce6cb-7ae4-4266-bea4-dbbb0acabf84","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-KSCDQW001","conversion_id":"5281b799-2af3-4a2d-a19c-ccbd376b0539","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:24+00:00","updated_at":"2015-10-27T19:53:24+00:00"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":25,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"asc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:25 GMT',
  'x-request-id': '2906350491146109969',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '899' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"1c200c1d-f53b-42eb-a4b4-f14a08d5851e","settlement_date":"2015-10-29T14:00:00+00:00","conversion_date":"2015-10-29T00:00:00+00:00","short_reference":"20151027-BZMLHF","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-27T19:53:25+00:00","updated_at":"2015-10-27T19:53:25+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:26 GMT',
  'x-request-id': '2906350494266686482',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/beneficiaries/create')
  .query({"bank_account_holder_name":"John Doe","bank_country":"DE","currency":"EUR","name":"Employee Funds","email":"john.doe@acme.com","beneficiary_address":"23 Acacia Road","beneficiary_country":"GB","account_number":"13071472","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"aba","routing_code_value_2":"789","bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","bank_address":"4356 Wisteria Lane","bank_name":"HSBC Bank","bank_account_type":"checking","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none"})
  .reply(200, {"id":"85fd10c0-0b6d-460e-a93a-ce97108ef81a","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"COMMERZBANK AG","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","bank_address":["KAISERSTRASSE 16","60261 FRANKFURT AM MAIN"],"created_at":"2015-10-27T19:53:26+00:00","updated_at":"2015-10-27T19:53:26+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:26 GMT',
  'x-request-id': '2906350502395194389',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1108' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/create')
  .query({"currency":"EUR","amount":"10000","reason":"Salary for March","reference":"INVOICE 9876","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Some Company LLC","payer_first_name":"John","payer_last_name":"Doe","payer_city":"London","payer_address":"27 Colmore Row","payer_postcode":"W11 2BQ","payer_state_or_province":"TX","payer_country":"GB","payer_date_of_birth":"1980-10-10","payer_identification_type":"none","conversion_id":"1c200c1d-f53b-42eb-a4b4-f14a08d5851e","beneficiary_id":"85fd10c0-0b6d-460e-a93a-ce97108ef81a"})
  .reply(200, {"id":"855fa573-1ace-4da2-a55b-912f10103055","amount":"10000.00","beneficiary_id":"85fd10c0-0b6d-460e-a93a-ce97108ef81a","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-BZMLHF001","conversion_id":"1c200c1d-f53b-42eb-a4b4-f14a08d5851e","failure_reason":"","payer_id":"e598308d-1829-430c-b3d8-662170811622","payer_details_source":"payer","created_at":"2015-10-27T19:53:27+00:00","updated_at":"2015-10-27T19:53:28+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:28 GMT',
  'x-request-id': '2906350507344474135',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '726' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/create')
  .query({"currency":"EUR","amount":"0.23","reason":"Prepayment of salary for April","reference":"INVOICE 122/1","payment_type":"regular","payer_entity_type":"individual","payer_company_name":"Jens enskild firma","payer_first_name":"Jennifer","payer_last_name":"Waylon","payer_city":"Stockholm","payer_address":"22 Garvargatan","payer_postcode":"12332","payer_state_or_province":"Stockholm","payer_country":"SE","payer_date_of_birth":"1981-12-10","payer_identification_type":"none","conversion_id":"1c200c1d-f53b-42eb-a4b4-f14a08d5851e","beneficiary_id":"85fd10c0-0b6d-460e-a93a-ce97108ef81a"})
  .reply(200, {"id":"cc0933c9-0c16-467c-8a3b-2fa96b6cede3","amount":"0.23","beneficiary_id":"85fd10c0-0b6d-460e-a93a-ce97108ef81a","currency":"EUR","reference":"INVOICE 122/1","reason":"Prepayment of salary for April","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-BZMLHF002","conversion_id":"1c200c1d-f53b-42eb-a4b4-f14a08d5851e","failure_reason":"","payer_id":"9a234e2f-7d25-46f5-8fcf-b473e2b5b36d","payer_details_source":"payer","created_at":"2015-10-27T19:53:29+00:00","updated_at":"2015-10-27T19:53:29+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:29 GMT',
  'x-request-id': '2906350519105341466',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '737' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/payments/cc0933c9-0c16-467c-8a3b-2fa96b6cede3/delete')
  .reply(200, {"id":"cc0933c9-0c16-467c-8a3b-2fa96b6cede3","amount":"0.23","beneficiary_id":"85fd10c0-0b6d-460e-a93a-ce97108ef81a","currency":"EUR","reference":"INVOICE 122/1","reason":"Prepayment of salary for April","status":"ready_to_send","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","payment_type":"regular","payment_date":"2015-10-29","transferred_at":"","authorisation_steps_required":"0","last_updater_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","short_reference":"151027-BZMLHF002","conversion_id":"1c200c1d-f53b-42eb-a4b4-f14a08d5851e","failure_reason":"","payer_id":"9a234e2f-7d25-46f5-8fcf-b473e2b5b36d","payer_details_source":null,"created_at":"2015-10-27T19:53:29+00:00","updated_at":"2015-10-27T19:53:29+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:29 GMT',
  'x-request-id': '2906350531335894045',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '734' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/payments/cc0933c9-0c16-467c-8a3b-2fa96b6cede3')
  .reply(404, {"error_code":"payment_not_found","error_messages":{"id":[{"code":"payment_not_found","message":"Payment was not found for this id","params":{}}]}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:30 GMT',
  'x-request-id': '2906350533911239710',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '147' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Tue, 27 Oct 2015 19:53:30 GMT',
  'x-request-id': '2906350536226493472',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
