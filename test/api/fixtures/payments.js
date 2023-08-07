var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "96e1b2f53272528b6c8ced944704fd18"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "4a709856-2f20-472d-8ebf-9f2826cec174",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-ZGBRYR",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:10+00:00",
    "updated_at": "2017-10-27T19:53:11+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {
    "bank_account_holder_name": "John Doe",
    "bank_country": "DE",
    "currency": "EUR",
    "name": "Employee Funds",
    "email": "john.doe@acme.com",
    "beneficiary_address": "23 Acacia Road",
    "beneficiary_country": "GB",
    "account_number": "13071472",
    "routing_code_type_1": "sort_code",
    "routing_code_value_1": "200605",
    "routing_code_type_2": "aba",
    "routing_code_value_2": "789",
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "bank_address": "4356 Wisteria Lane",
    "bank_name": "HSBC Bank",
    "bank_account_type": "checking",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none"
  })
  .reply(200, {
    "id": "15f75bad-2176-42b3-a3a5-a6f561c7a849",
    "bank_account_holder_name": "John Doe",
    "name": "Employee Funds",
    "email": null,
    "payment_types": ["priority", "regular"],
    "beneficiary_address": ["23 Acacia Road"],
    "beneficiary_country": "GB",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none",
    "beneficiary_identification_value": null,
    "bank_country": "DE",
    "bank_name": "COMMERZBANK AG",
    "bank_account_type": "checking",
    "currency": "EUR",
    "account_number": null,
    "routing_code_type_1": null,
    "routing_code_value_1": null,
    "routing_code_type_2": null,
    "routing_code_value_2": null,
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "bank_address": ["KAISERSTRASSE 16", "60261 FRANKFURT AM MAIN"],
    "created_at": "2017-10-27T19:53:11+00:00",
    "updated_at": "2017-10-27T19:53:12+00:00"
  });

  nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "10000",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Some Company LLC",
    "payer_first_name": "John",
    "payer_last_name": "Doe",
    "payer_city": "London",
    "payer_address": "27 Colmore Row",
    "payer_postcode": "W11 2BQ",
    "payer_state_or_province": "TX",
    "payer_country": "GB",
    "payer_date_of_birth": "1980-10-10",
    "payer_identification_type": "none",
    "conversion_id": "4a709856-2f20-472d-8ebf-9f2826cec174",
    "beneficiary_id": "15f75bad-2176-42b3-a3a5-a6f561c7a849"
  })
  .reply(200, {
    "id": "a13df79f-6e1c-4427-b2cc-614547c5486a",
    "amount": "10000.00",
    "beneficiary_id": "15f75bad-2176-42b3-a3a5-a6f561c7a849",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZGBRYR001",
    "conversion_id": "4a709856-2f20-472d-8ebf-9f2826cec174",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:13+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', 'amount=10000.00&beneficiary_id=236c6192-cd4c-47e8-8d27-230455a3b6a3&currency=EUR&reference=INVOICE%209876&reason=Salary%20for%20March&status=ready_to_send&creator_contact_id=8f639ab2-2b85-4327-9eb1-01ee4f0c77bc&payment_type=regular&payment_date=2017-10-29&transferred_at=&authorisation_steps_required=0&last_updater_contact_id=8f639ab2-2b85-4327-9eb1-01ee4f0c77bc&short_reference=151027-ZMNZZB001&conversion_id=e204e1da-0ed2-4098-b1d2-9a67f531ab32&failure_reason=&payer_id=e598308d-1829-430c-b3d8-662170811622&payer_details_source=payer&invoice_date=2023-07-27&invoice_number=123')
  .reply(200, {
    "id": "a13df79f-6e1c-4427-b2cc-614547c5486a",
    "amount": "10000.00",
    "currency": 'EUR',
    "reason": 'Salary for April',
    "reference": 'INVOICE 9876',
    "paymentType": 'regular',
    "payerEntityType": 'individual',
    "payerCompanyName": 'Some Company LLC',
    "payerFirstName": 'John',
    "payerLastName": 'Doe',
    "payerCity": 'London',
    "payerAddress": '27 Colmore Row',
    "payerPostcode": 'W11 2BQ',
    "payerStateOrProvince": 'TX',
    "payerCountry": 'GB',
    "payerDateOfBirth": '1980-10-10',
    "payerIdentificationType": 'none',
    "conversionId": 'e204e1da-0ed2-4098-b1d2-9a67f531ab32',
    "beneficiaryId": '236c6192-cd4c-47e8-8d27-230455a3b6a3',
    "invoiceDate": '2023-07-27',
    "invoiceNumber": '123',
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:13+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "e204e1da-0ed2-4098-b1d2-9a67f531ab32",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-CMCRZC",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:14+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {
    "bank_account_holder_name": "John Doe",
    "bank_country": "DE",
    "currency": "EUR",
    "name": "Employee Funds",
    "email": "john.doe@acme.com",
    "beneficiary_address": "23 Acacia Road",
    "beneficiary_country": "GB",
    "account_number": "13071472",
    "routing_code_type_1": "sort_code",
    "routing_code_value_1": "200605",
    "routing_code_type_2": "aba",
    "routing_code_value_2": "789",
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "bank_address": "4356 Wisteria Lane",
    "bank_name": "HSBC Bank",
    "bank_account_type": "checking",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none"
  })
  .reply(200, {
    "id": "236c6192-cd4c-47e8-8d27-230455a3b6a3",
    "bank_account_holder_name": "John Doe",
    "name": "Employee Funds",
    "email": null,
    "payment_types": ["priority", "regular"],
    "beneficiary_address": ["23 Acacia Road"],
    "beneficiary_country": "GB",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none",
    "beneficiary_identification_value": null,
    "bank_country": "DE",
    "bank_name": "COMMERZBANK AG",
    "bank_account_type": "checking",
    "currency": "EUR",
    "account_number": null,
    "routing_code_type_1": null,
    "routing_code_value_1": null,
    "routing_code_type_2": null,
    "routing_code_value_2": null,
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "bank_address": ["KAISERSTRASSE 16", "60261 FRANKFURT AM MAIN"],
    "created_at": "2017-10-27T19:53:15+00:00",
    "updated_at": "2017-10-27T19:53:15+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "10000",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Some Company LLC",
    "payer_first_name": "John",
    "payer_last_name": "Doe",
    "payer_city": "London",
    "payer_address": "27 Colmore Row",
    "payer_postcode": "W11 2BQ",
    "payer_state_or_province": "TX",
    "payer_country": "GB",
    "payer_date_of_birth": "1980-10-10",
    "payer_identification_type": "none",
    "conversion_id": "e204e1da-0ed2-4098-b1d2-9a67f531ab32",
    "beneficiary_id": "236c6192-cd4c-47e8-8d27-230455a3b6a3"
  })
  .reply(200, {
    "id": "c365b1b2-0451-40cb-a87a-2a299ba7c4ed",
    "amount": "10000.00",
    "beneficiary_id": "236c6192-cd4c-47e8-8d27-230455a3b6a3",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-CMCRZC001",
    "conversion_id": "e204e1da-0ed2-4098-b1d2-9a67f531ab32",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:16+00:00",
    "updated_at": "2017-10-27T19:53:16+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/c365b1b2-0451-40cb-a87a-2a299ba7c4ed')
  .reply(200, {
    "id": "c365b1b2-0451-40cb-a87a-2a299ba7c4ed",
    "amount": "10000.00",
    "beneficiary_id": "236c6192-cd4c-47e8-8d27-230455a3b6a3",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-CMCRZC001",
    "conversion_id": "e204e1da-0ed2-4098-b1d2-9a67f531ab32",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:16+00:00",
    "updated_at": "2017-10-27T19:53:16+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-ZMNZZB",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:17+00:00",
    "updated_at": "2017-10-27T19:53:17+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {
    "bank_account_holder_name": "John Doe",
    "bank_country": "DE",
    "currency": "EUR",
    "name": "Employee Funds",
    "email": "john.doe@acme.com",
    "beneficiary_address": "23 Acacia Road",
    "beneficiary_country": "GB",
    "account_number": "13071472",
    "routing_code_type_1": "sort_code",
    "routing_code_value_1": "200605",
    "routing_code_type_2": "aba",
    "routing_code_value_2": "789",
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "bank_address": "4356 Wisteria Lane",
    "bank_name": "HSBC Bank",
    "bank_account_type": "checking",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none"
  })
  .reply(200, {
    "id": "16d351fb-94ba-4c75-b554-49c793d69459",
    "bank_account_holder_name": "John Doe",
    "name": "Employee Funds",
    "email": null,
    "payment_types": ["priority", "regular"],
    "beneficiary_address": ["23 Acacia Road"],
    "beneficiary_country": "GB",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none",
    "beneficiary_identification_value": null,
    "bank_country": "DE",
    "bank_name": "COMMERZBANK AG",
    "bank_account_type": "checking",
    "currency": "EUR",
    "account_number": null,
    "routing_code_type_1": null,
    "routing_code_value_1": null,
    "routing_code_type_2": null,
    "routing_code_value_2": null,
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "bank_address": ["KAISERSTRASSE 16", "60261 FRANKFURT AM MAIN"],
    "created_at": "2017-10-27T19:53:18+00:00",
    "updated_at": "2017-10-27T19:53:18+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "10000",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Some Company LLC",
    "payer_first_name": "John",
    "payer_last_name": "Doe",
    "payer_city": "London",
    "payer_address": "27 Colmore Row",
    "payer_postcode": "W11 2BQ",
    "payer_state_or_province": "TX",
    "payer_country": "GB",
    "payer_date_of_birth": "1980-10-10",
    "payer_identification_type": "none",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459"
  })
  .reply(200, {
    "id": "48bf6096-8b17-4d9f-b8de-5a1c253f3bf8",
    "amount": "10000.00",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZMNZZB001",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:19+00:00",
    "updated_at": "2017-10-27T19:53:19+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/48bf6096-8b17-4d9f-b8de-5a1c253f3bf8', {
    "currency": "EUR",
    "amount": "0.23",
    "reason": "Prepayment of salary for April",
    "reference": "INVOICE 122/1",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Jens enskild firma",
    "payer_first_name": "Jennifer",
    "payer_last_name": "Waylon",
    "payer_city": "Stockholm",
    "payer_address": "22 Garvargatan",
    "payer_postcode": "12332",
    "payer_state_or_province": "Stockholm",
    "payer_country": "SE",
    "payer_date_of_birth": "1981-12-10",
    "payer_identification_type": "none",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459"
  })
  .reply(200, {
    "id": "48bf6096-8b17-4d9f-b8de-5a1c253f3bf8",
    "amount": "0.23",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459",
    "currency": "EUR",
    "reference": "INVOICE 122/1",
    "reason": "Prepayment of salary for April",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZMNZZB001",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "failure_reason": "",
    "payer_id": "9a234e2f-7d25-46f5-8fcf-b473e2b5b36d",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:19+00:00",
    "updated_at": "2017-10-27T19:53:21+00:00"
  });

  nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/70f693a4-27fe-4ea8-b363-9d6d28928d21', "currency=EUR&amount=0.23&reason=Prepayment%20of%20salary%20for%20April&reference=INVOICE%20122%2F1&payment_type=regular&payer_entity_type=individual&payer_company_name=Jens%20enskild%20firma&payer_first_name=Jennifer&payer_last_name=Waylon&payer_city=Stockholm&payer_address=22%20Garvargatan&payer_postcode=12332&payer_state_or_province=Stockholm&payer_country=SE&payer_date_of_birth=1981-12-10&payer_identification_type=none&conversion_id=5281b799-2af3-4a2d-a19c-ccbd376b0539&beneficiary_id=4ccce6cb-7ae4-4266-bea4-dbbb0acabf84")
  .reply(200, {
    "id": "70f693a4-27fe-4ea8-b363-9d6d28928d21",
    "amount": "0.23",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459",
    "currency": "EUR",
    "reference": "INVOICE 122/1",
    "reason": "Prepayment of salary for April",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZMNZZB001",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "failure_reason": "",
    "payer_id": "9a234e2f-7d25-46f5-8fcf-b473e2b5b36d",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:19+00:00",
    "updated_at": "2017-10-27T19:53:21+00:00"
  });

  nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/70f693a4-27fe-4ea8-b363-9d6d28928d21')
  .reply(200, {
    "id": "70f693a4-27fe-4ea8-b363-9d6d28928d21",
    "amount": "0.23",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459",
    "currency": "EUR",
    "reference": "INVOICE 122/1",
    "reason": "Prepayment of salary for April",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZMNZZB001",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "failure_reason": "",
    "payer_id": "9a234e2f-7d25-46f5-8fcf-b473e2b5b36d",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:19+00:00",
    "updated_at": "2017-10-27T19:53:21+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/48bf6096-8b17-4d9f-b8de-5a1c253f3bf8')
  .reply(200, {
    "id": "48bf6096-8b17-4d9f-b8de-5a1c253f3bf8",
    "amount": "10000.00",
    "beneficiary_id": "16d351fb-94ba-4c75-b554-49c793d69459",
    "currency": "EUR",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZMNZZB001",
    "conversion_id": "5c4716dc-42dd-4571-b4bf-0aa299fff928",
    "failure_reason": "",
    "payerId": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:19+00:00",
    "updatedAt": "2017-10-27T19:53:19+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "5281b799-2af3-4a2d-a19c-ccbd376b0539",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-KSCDQW",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:22+00:00",
    "updated_at": "2017-10-27T19:53:22+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {
    "bank_account_holder_name": "John Doe",
    "bank_country": "DE",
    "currency": "EUR",
    "name": "Employee Funds",
    "email": "john.doe@acme.com",
    "beneficiary_address": "23 Acacia Road",
    "beneficiary_country": "GB",
    "account_number": "13071472",
    "routing_code_type_1": "sort_code",
    "routing_code_value_1": "200605",
    "routing_code_type_2": "aba",
    "routing_code_value_2": "789",
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "bank_address": "4356 Wisteria Lane",
    "bank_name": "HSBC Bank",
    "bank_account_type": "checking",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none"
  })
  .reply(200, {
    "id": "4ccce6cb-7ae4-4266-bea4-dbbb0acabf84",
    "bank_account_holder_name": "John Doe",
    "name": "Employee Funds",
    "email": null,
    "payment_types": ["priority", "regular"],
    "beneficiary_address": ["23 Acacia Road"],
    "beneficiary_country": "GB",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none",
    "beneficiary_identification_value": null,
    "bank_country": "DE",
    "bank_name": "COMMERZBANK AG",
    "bank_account_type": "checking",
    "currency": "EUR",
    "account_number": null,
    "routing_code_type_1": null,
    "routing_code_value_1": null,
    "routing_code_type_2": null,
    "routing_code_value_2": null,
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "bank_address": ["KAISERSTRASSE 16", "60261 FRANKFURT AM MAIN"],
    "created_at": "2017-10-27T19:53:23+00:00",
    "updated_at": "2017-10-27T19:53:23+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "10000",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Some Company LLC",
    "payer_first_name": "John",
    "payer_last_name": "Doe",
    "payer_city": "London",
    "payer_address": "27 Colmore Row",
    "payer_postcode": "W11 2BQ",
    "payer_state_or_province": "TX",
    "payer_country": "GB",
    "payer_date_of_birth": "1980-10-10",
    "payer_identification_type": "none",
    "conversion_id": "5281b799-2af3-4a2d-a19c-ccbd376b0539",
    "beneficiary_id": "4ccce6cb-7ae4-4266-bea4-dbbb0acabf84"
  })
  .reply(200, {
    "id": "70f693a4-27fe-4ea8-b363-9d6d28928d21",
    "amount": "10000.00",
    "beneficiary_id": "4ccce6cb-7ae4-4266-bea4-dbbb0acabf84",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-KSCDQW001",
    "conversion_id": "5281b799-2af3-4a2d-a19c-ccbd376b0539",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:24+00:00",
    "updated_at": "2017-10-27T19:53:24+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/find')
  .query({
    "conversion_id": "5281b799-2af3-4a2d-a19c-ccbd376b0539",
    "beneficiary_id": "4ccce6cb-7ae4-4266-bea4-dbbb0acabf84"
  })
  .reply(200, {
    "payments": [{
      "id": "70f693a4-27fe-4ea8-b363-9d6d28928d21",
      "amount": "10000.00",
      "beneficiary_id": "4ccce6cb-7ae4-4266-bea4-dbbb0acabf84",
      "currency": "EUR",
      "reference": "INVOICE 9876",
      "reason": "Salary for March",
      "status": "ready_to_send",
      "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
      "payment_type": "regular",
      "payment_date": "2017-10-29",
      "transferred_at": "",
      "authorisation_steps_required": "0",
      "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
      "short_reference": "151027-KSCDQW001",
      "conversion_id": "5281b799-2af3-4a2d-a19c-ccbd376b0539",
      "failure_reason": "",
      "payer_id": "e598308d-1829-430c-b3d8-662170811622",
      "payer_details_source": "payer",
      "created_at": "2017-10-27T19:53:24+00:00",
      "updated_at": "2017-10-27T19:53:24+00:00"
    }],
    "pagination": {
      "total_entries": 1,
      "total_pages": 1,
      "current_page": 1,
      "per_page": 25,
      "previous_page": -1,
      "next_page": -1,
      "order": "created_at",
      "order_asc_desc": "asc"
    }
  });

  nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/find')
  .query({
    "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a"
  })
  .reply(200, {
    "payments": [{
      "id": "855fa573-1ace-4da2-a55b-912f10103055",
      "amount": "10000.00",
      "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a",
      "currency": "EUR",
      "reference": "INVOICE 9876",
      "reason": "Salary for March",
      "status": "ready_to_send",
      "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
      "payment_type": "regular",
      "payment_date": "2017-10-29",
      "transferred_at": "",
      "authorisation_steps_required": "0",
      "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
      "short_reference": "151027-BZMLHF001",
      "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
      "failure_reason": "",
      "payer_id": "e598308d-1829-430c-b3d8-662170811622",
      "payer_details_source": "payer",
      "created_at": "2017-10-27T19:53:27+00:00",
      "updated_at": "2017-10-27T19:53:28+00:00"
    }],
    "pagination": {
      "total_entries": 1,
      "total_pages": 1,
      "current_page": 1,
      "per_page": 25,
      "previous_page": -1,
      "next_page": -1,
      "order": "created_at",
      "order_asc_desc": "asc"
    }
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-BZMLHF",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:25+00:00",
    "updated_at": "2017-10-27T19:53:25+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {
    "bank_account_holder_name": "John Doe",
    "bank_country": "DE",
    "currency": "EUR",
    "name": "Employee Funds",
    "email": "john.doe@acme.com",
    "beneficiary_address": "23 Acacia Road",
    "beneficiary_country": "GB",
    "account_number": "13071472",
    "routing_code_type_1": "sort_code",
    "routing_code_value_1": "200605",
    "routing_code_type_2": "aba",
    "routing_code_value_2": "789",
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "bank_address": "4356 Wisteria Lane",
    "bank_name": "HSBC Bank",
    "bank_account_type": "checking",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none"
  })
  .reply(200, {
    "id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a",
    "bank_account_holder_name": "John Doe",
    "name": "Employee Funds",
    "email": null,
    "payment_types": ["priority", "regular"],
    "beneficiary_address": ["23 Acacia Road"],
    "beneficiary_country": "GB",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none",
    "beneficiary_identification_value": null,
    "bank_country": "DE",
    "bank_name": "COMMERZBANK AG",
    "bank_account_type": "checking",
    "currency": "EUR",
    "account_number": null,
    "routing_code_type_1": null,
    "routing_code_value_1": null,
    "routing_code_type_2": null,
    "routing_code_value_2": null,
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "bank_address": ["KAISERSTRASSE 16", "60261 FRANKFURT AM MAIN"],
    "created_at": "2017-10-27T19:53:26+00:00",
    "updated_at": "2017-10-27T19:53:26+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "10000",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Some Company LLC",
    "payer_first_name": "John",
    "payer_last_name": "Doe",
    "payer_city": "London",
    "payer_address": "27 Colmore Row",
    "payer_postcode": "W11 2BQ",
    "payer_state_or_province": "TX",
    "payer_country": "GB",
    "payer_date_of_birth": "1980-10-10",
    "payer_identification_type": "none",
    "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a"
  })
  .reply(200, {
    "id": "855fa573-1ace-4da2-a55b-912f10103055",
    "amount": "10000.00",
    "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-BZMLHF001",
    "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:27+00:00",
    "updated_at": "2017-10-27T19:53:28+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "0.23",
    "reason": "Prepayment of salary for April",
    "reference": "INVOICE 122/1",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Jens enskild firma",
    "payer_first_name": "Jennifer",
    "payer_last_name": "Waylon",
    "payer_city": "Stockholm",
    "payer_address": "22 Garvargatan",
    "payer_postcode": "12332",
    "payer_state_or_province": "Stockholm",
    "payer_country": "SE",
    "payer_date_of_birth": "1981-12-10",
    "payer_identification_type": "none",
    "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a"
  })
  .reply(200, {
    "id": "cc0933c9-0c16-467c-8a3b-2fa96b6cede3",
    "amount": "0.23",
    "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a",
    "currency": "EUR",
    "reference": "INVOICE 122/1",
    "reason": "Prepayment of salary for April",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-BZMLHF002",
    "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "failure_reason": "",
    "payer_id": "9a234e2f-7d25-46f5-8fcf-b473e2b5b36d",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:29+00:00",
    "updated_at": "2017-10-27T19:53:29+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/cc0933c9-0c16-467c-8a3b-2fa96b6cede3/delete')
  .reply(200, {
    "id": "cc0933c9-0c16-467c-8a3b-2fa96b6cede3",
    "amount": "0.23",
    "beneficiary_id": "85fd10c0-0b6d-460e-a93a-ce97108ef81a",
    "currency": "EUR",
    "reference": "INVOICE 122/1",
    "reason": "Prepayment of salary for April",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-BZMLHF002",
    "conversion_id": "1c200c1d-f53b-42eb-a4b4-f14a08d5851e",
    "failure_reason": "",
    "payer_id": "9a234e2f-7d25-46f5-8fcf-b473e2b5b36d",
    "payer_details_source": null,
    "created_at": "2017-10-27T19:53:29+00:00",
    "updated_at": "2017-10-27T19:53:29+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/cc0933c9-0c16-467c-8a3b-2fa96b6cede3')
  .reply(404, {
    "error_code": "payment_not_found",
    "error_messages": {
      "id": [{
        "code": "payment_not_found",
        "message": "Payment was not found for this id",
        "params": {}
      }]
    }
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "fixed_side": "buy",
    "amount": "10000.23",
    "reason": "Settling invoices",
    "term_agreement": "true"
  })
  .reply(200, {
    "id": "4db061b0-e81a-4c03-97f5-62efe82618be",
    "settlement_date": "2017-10-29T14:00:00+00:00",
    "conversion_date": "2017-10-29T00:00:00+00:00",
    "short_reference": "20171027-ZGBRYR",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7215.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7216",
    "core_rate": "0.7215",
    "partner_rate": "",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7215",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-27T19:53:10+00:00",
    "updated_at": "2017-10-27T19:53:11+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/beneficiaries/create', {
    "bank_account_holder_name": "John Doe",
    "bank_country": "DE",
    "currency": "EUR",
    "name": "Employee Funds",
    "email": "john.doe@acme.com",
    "beneficiary_address": "23 Acacia Road",
    "beneficiary_country": "GB",
    "account_number": "13071472",
    "routing_code_type_1": "sort_code",
    "routing_code_value_1": "200605",
    "routing_code_type_2": "aba",
    "routing_code_value_2": "789",
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "bank_address": "4356 Wisteria Lane",
    "bank_name": "HSBC Bank",
    "bank_account_type": "checking",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none"
  })
  .reply(200, {
    "id": "7b2989c5-c03e-44be-8f93-612cd2e90b10",
    "bank_account_holder_name": "John Doe",
    "name": "Employee Funds",
    "email": null,
    "payment_types": ["priority", "regular"],
    "beneficiary_address": ["23 Acacia Road"],
    "beneficiary_country": "GB",
    "beneficiary_entity_type": "company",
    "beneficiary_company_name": "Some Company LLC",
    "beneficiary_first_name": "John",
    "beneficiary_last_name": "Doe",
    "beneficiary_city": "London",
    "beneficiary_postcode": "W11 2BQ",
    "beneficiary_state_or_province": "TX",
    "beneficiary_date_of_birth": "1990-07-20",
    "beneficiary_identification_type": "none",
    "beneficiary_identification_value": null,
    "bank_country": "DE",
    "bank_name": "COMMERZBANK AG",
    "bank_account_type": "checking",
    "currency": "EUR",
    "account_number": null,
    "routing_code_type_1": null,
    "routing_code_value_1": null,
    "routing_code_type_2": null,
    "routing_code_value_2": null,
    "bic_swift": "COBADEFF",
    "iban": "DE89370400440532013000",
    "default_beneficiary": "true",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "bank_address": ["KAISERSTRASSE 16", "60261 FRANKFURT AM MAIN"],
    "created_at": "2017-10-27T19:53:11+00:00",
    "updated_at": "2017-10-27T19:53:12+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/payments/create', {
    "currency": "EUR",
    "amount": "10000",
    "reason": "Salary for March",
    "reference": "INVOICE 9876",
    "payment_type": "regular",
    "payer_entity_type": "individual",
    "payer_company_name": "Some Company LLC",
    "payer_first_name": "John",
    "payer_last_name": "Doe",
    "payer_city": "London",
    "payer_address": "27 Colmore Row",
    "payer_postcode": "W11 2BQ",
    "payer_state_or_province": "TX",
    "payer_country": "GB",
    "payer_date_of_birth": "1980-10-10",
    "payer_identification_type": "none",
    "conversion_id": "4db061b0-e81a-4c03-97f5-62efe82618be",
    "beneficiary_id": "7b2989c5-c03e-44be-8f93-612cd2e90b10"
  })
  .reply(200, {
    "id": "ca717500-c1c2-46f1-996f-5c282a4c6db4",
    "amount": "10000.00",
    "beneficiary_id": "7b2989c5-c03e-44be-8f93-612cd2e90b10",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-29",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151027-ZGBRYR001",
    "conversion_id": "4db061b0-e81a-4c03-97f5-62efe82618be",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-27T19:53:13+00:00",
    "updated_at": "2017-10-27T19:53:13+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/payments/ca717500-c1c2-46f1-996f-5c282a4c6db4/submission')
  .reply(200, {
    "mt103": "{1:F01TCCLGB20AXXX0090000004}{2:I103BARCGB22XXXXN}{4: :20:20160617-ZSYWVY :23B:CRED :32A:160617GBP3000,0 :33B:GBP3000,0 :50K:/150618-00026 PCOMAPNY address New-York Province 555222 GB :53B:/20060513071472 :57C://SC200605 :59:/200605000 First Name Last Name e03036bf6c325dd12c58 London GB :70:test reference Test reason Payment group: 0160617-ZSYWVY :71A:SHA -}",
    "status": "pending",
    "submission_ref": "MXGGYAGJULIIQKDV"
  });
  
nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
  .reply(200, {"id":"7dc88e47-a536-455c-99d3-8e9d5767ae90","settlement_date":"2018-07-24T13:00:00+00:00","conversion_date":"2018-07-24T00:00:00+00:00","short_reference":"20180720-MNLQTG","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","account_id":"9ada9453-a104-478a-b4d4-47aaa52b8710","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"8037.18","fixed_side":"buy","core_rate":"0.8037","partner_rate":"","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.8037","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"unallocated_funds":"0.00","unique_request_id":null,"created_at":"2018-07-20T10:25:56+00:00","updated_at":"2018-07-20T10:25:56+00:00","mid_market_rate":"0.8036"}, [ 'Date',
  'Fri, 20 Jul 2018 10:25:57 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=d14d7aff5fda84c0ba728485717b04f1e1532082356; expires=Sat, 20-Jul-19 10:25:56 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=ui1n8yTM4x+mBQC+/jq/CAl7zoCOZAyyXB0qi0SX+nALDRAvIJUTkm3MCRCQYW7W7YJaRblg3Ykk8+o/dfvbMQ4w1SW/i5YRPjD1CP41raP6Ej4jdvBY/0GmYQlj; Expires=Fri, 27 Jul 2018 10:25:56 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '2aa8f85c-c081-4656-bbca-625359b93f6c',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba066b513683-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/beneficiaries/create', "bank_account_holder_name=John%20Doe&bank_country=DE&currency=EUR&name=Employee%20Funds&email=john.doe%40acme.com&beneficiary_address=23%20Acacia%20Road&beneficiary_country=GB&account_number=13071472&routing_code_type_1=sort_code&routing_code_value_1=200605&routing_code_type_2=aba&routing_code_value_2=789&bic_swift=COBADEFF&iban=DE89370400440532013000&default_beneficiary=true&bank_address=4356%20Wisteria%20Lane&bank_name=HSBC%20Bank&bank_account_type=checking&beneficiary_entity_type=company&beneficiary_company_name=Some%20Company%20LLC&beneficiary_first_name=John&beneficiary_last_name=Doe&beneficiary_city=London&beneficiary_postcode=W11%202BQ&beneficiary_state_or_province=TX&beneficiary_date_of_birth=1990-07-20&beneficiary_identification_type=none")
  .reply(200, {"id":"2eacd8f9-4b53-4e2b-995b-1ccf2136c6ab","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"HSBC Bank","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","bank_address":["4356 Wisteria Lane"],"created_at":"2018-07-20T10:25:57+00:00","updated_at":"2018-07-20T10:25:57+00:00","beneficiary_external_reference":null}, [ 'Date',
  'Fri, 20 Jul 2018 10:25:57 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=d75eee728b175742fce6c1870fc4874531532082357; expires=Sat, 20-Jul-19 10:25:57 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=ygXRh6d2q4aj52/sYAzzBx+MTmQjyen/b0By5S/dKmx2FHI+E10rT3IgsRoN8/uTM1J1D67vveNz4wl/6BtYBl+ADVZnanvOxdhgBp9D9/U9nbIR0O4+M6M+cHum; Expires=Fri, 27 Jul 2018 10:25:57 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '5d26c35b-8e39-415b-b522-91f286563ff2',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba0bd83d3683-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/create', "currency=EUR&amount=10000&reason=Salary%20for%20March&reference=INVOICE%209876&payment_type=regular&payer_entity_type=individual&payer_company_name=Some%20Company%20LLC&payer_first_name=John&payer_last_name=Doe&payer_city=London&payer_address=27%20Colmore%20Row&payer_postcode=W11%202BQ&payer_state_or_province=TX&payer_country=GB&payer_date_of_birth=1980-10-10&payer_identification_type=none&conversion_id=7dc88e47-a536-455c-99d3-8e9d5767ae90&beneficiary_id=2eacd8f9-4b53-4e2b-995b-1ccf2136c6ab")
  .reply(200, {"id":"ca717500-c1c2-46f1-996f-5c282a4c6db4","amount":"10000.00","beneficiary_id":"2eacd8f9-4b53-4e2b-995b-1ccf2136c6ab","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"awaiting_authorisation","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","payment_type":"regular","payment_date":"2018-07-24","transferred_at":"","authorisation_steps_required":"1","last_updater_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","short_reference":"180720-MNLQTG001","conversion_id":"7dc88e47-a536-455c-99d3-8e9d5767ae90","failure_reason":"","payer_id":"be3a2a8f-9094-4f32-9692-72dfee61491f","payer_details_source":"payer","created_at":"2018-07-20T10:25:58+00:00","updated_at":"2018-07-20T10:25:58+00:00","payment_group_id":null,"unique_request_id":null,"failure_returned_amount":"0.00","ultimate_beneficiary_name":null}, [ 'Date',
  'Fri, 20 Jul 2018 10:25:58 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=d9b74d4c82f9383f7c878e791a15f83381532082357; expires=Sat, 20-Jul-19 10:25:57 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=8oEcB+lMemHhoNINwcLZkZbZ+Q4ue+vlf5PB4HSuJJU3FQ4x+jXqhISdpPBLy+Tdp5XJeSdMUKEoCpsF9g41PWL36kQUXCfm1+cv2PF+JyRKLPM2Sm5gpZx6lJTK; Expires=Fri, 27 Jul 2018 10:25:57 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '7d756fae-0b8f-4834-938d-39f516e5c258',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba0f0ff0362f-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/authorise', "payment_ids%5B%5D=91b1443d-8271-44ba-a902-f2ada263e0aa")
  .reply(200, {"authorisations":[{"payment_id":"91b1443d-8271-44ba-a902-f2ada263e0aa","payment_status":"awaiting_authorisation","updated":false,"error":"You cannot authorise this Payment as it was created by you.","auth_steps_taken":0,"auth_steps_required":1,"short_reference":"180720-MNLQTG001"}]}, [ 'Date',
  'Fri, 20 Jul 2018 10:25:58 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=da5e3928d2b1c08311dda690d0370d2c41532082358; expires=Sat, 20-Jul-19 10:25:58 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=htvHh/OhKiLToXsCWPlPYNOk6Rcogdrytm+esD+8iHWzAxgEAcd93A4aFIjnRjOY1LW0FU8aZKLuIfCfambmNy24mw/YF0E9Zm5RylVi3jMplM877G9udacRTYLC; Expires=Fri, 27 Jul 2018 10:25:58 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  'f513fe98-7710-4b7f-92f8-bf5ea0290239',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba1528c83683-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
  .reply(200, {"id":"b29d6ba8-52d2-4329-b46d-145f8fb37008","settlement_date":"2018-07-24T13:00:00+00:00","conversion_date":"2018-07-24T00:00:00+00:00","short_reference":"20180720-MBLHLN","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","account_id":"9ada9453-a104-478a-b4d4-47aaa52b8710","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"8037.18","fixed_side":"buy","core_rate":"0.8037","partner_rate":"","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.8037","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"unallocated_funds":"0.00","unique_request_id":null,"created_at":"2018-07-20T10:25:59+00:00","updated_at":"2018-07-20T10:25:59+00:00","mid_market_rate":"0.8036"}, [ 'Date',
  'Fri, 20 Jul 2018 10:25:59 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=de83b4429a1caccba6669b4fdecd1c55d1532082358; expires=Sat, 20-Jul-19 10:25:58 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=M74w6EZin9dJhtOQ2coskLIIPxkCRiU9lww1abwhAePM1b+3nwODk87SvflqCkrxdSRooOYKAZnLhIOy2/HNIiUjLI77F/BZ/HG2rQ6vxqWpSlci6e5C2oPm69zV; Expires=Fri, 27 Jul 2018 10:25:58 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '6961f301-85f2-4f7c-9198-334001ecdd9c',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba16cfba3629-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/beneficiaries/create', "bank_account_holder_name=John%20Doe&bank_country=DE&currency=EUR&name=Employee%20Funds&email=john.doe%40acme.com&beneficiary_address=23%20Acacia%20Road&beneficiary_country=GB&account_number=13071472&routing_code_type_1=sort_code&routing_code_value_1=200605&routing_code_type_2=aba&routing_code_value_2=789&bic_swift=COBADEFF&iban=DE89370400440532013000&default_beneficiary=true&bank_address=4356%20Wisteria%20Lane&bank_name=HSBC%20Bank&bank_account_type=checking&beneficiary_entity_type=company&beneficiary_company_name=Some%20Company%20LLC&beneficiary_first_name=John&beneficiary_last_name=Doe&beneficiary_city=London&beneficiary_postcode=W11%202BQ&beneficiary_state_or_province=TX&beneficiary_date_of_birth=1990-07-20&beneficiary_identification_type=none")
  .reply(200, {"id":"2753e95a-068b-47ea-afde-55995697ee75","bank_account_holder_name":"John Doe","name":"Employee Funds","email":null,"payment_types":["priority","regular"],"beneficiary_address":["23 Acacia Road"],"beneficiary_country":"GB","beneficiary_entity_type":"company","beneficiary_company_name":"Some Company LLC","beneficiary_first_name":"John","beneficiary_last_name":"Doe","beneficiary_city":"London","beneficiary_postcode":"W11 2BQ","beneficiary_state_or_province":"TX","beneficiary_date_of_birth":"1990-07-20","beneficiary_identification_type":"none","beneficiary_identification_value":null,"bank_country":"DE","bank_name":"HSBC Bank","bank_account_type":"checking","currency":"EUR","account_number":null,"routing_code_type_1":null,"routing_code_value_1":null,"routing_code_type_2":null,"routing_code_value_2":null,"bic_swift":"COBADEFF","iban":"DE89370400440532013000","default_beneficiary":"true","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","bank_address":["4356 Wisteria Lane"],"created_at":"2018-07-20T10:25:59+00:00","updated_at":"2018-07-20T10:25:59+00:00","beneficiary_external_reference":null}, [ 'Date',
  'Fri, 20 Jul 2018 10:25:59 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=df0677970e03fd7c17414ef6fed6eccd01532082359; expires=Sat, 20-Jul-19 10:25:59 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=IoUbjuGdrPTWM9WnCZODZzY6ohXb37bNbFj97Cjqoj1ZeJq4iYdWqMHIDINghEwlFw2ObeGLFclGG5G1QTRFaXuZE1jPIrp9GNEfdsxgBpgBc5/s9S5FwLXdzFi4; Expires=Fri, 27 Jul 2018 10:25:59 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '732f224c-dd66-46b2-bdcd-17ca4c58c862',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba1b6ecc3683-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/create', "currency=EUR&amount=10000&reason=Salary%20for%20March&reference=INVOICE%209876&payment_type=regular&payer_entity_type=individual&payer_company_name=Some%20Company%20LLC&payer_first_name=John&payer_last_name=Doe&payer_city=London&payer_address=27%20Colmore%20Row&payer_postcode=W11%202BQ&payer_state_or_province=TX&payer_country=GB&payer_date_of_birth=1980-10-10&payer_identification_type=none&conversion_id=b29d6ba8-52d2-4329-b46d-145f8fb37008&beneficiary_id=2753e95a-068b-47ea-afde-55995697ee75")
  .reply(200, {"id":"91b1443d-8271-44ba-a902-f2ada263e0aa","amount":"10000.00","beneficiary_id":"2753e95a-068b-47ea-afde-55995697ee75","currency":"EUR","reference":"INVOICE 9876","reason":"Salary for March","status":"awaiting_authorisation","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","payment_type":"regular","payment_date":"2018-07-24","transferred_at":"","authorisation_steps_required":"1","last_updater_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","short_reference":"180720-MBLHLN001","conversion_id":"b29d6ba8-52d2-4329-b46d-145f8fb37008","failure_reason":"","payer_id":"be3a2a8f-9094-4f32-9692-72dfee61491f","payer_details_source":"payer","created_at":"2018-07-20T10:26:00+00:00","updated_at":"2018-07-20T10:26:00+00:00","payment_group_id":null,"unique_request_id":null,"failure_returned_amount":"0.00","ultimate_beneficiary_name":null}, [ 'Date',
  'Fri, 20 Jul 2018 10:26:00 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=df0677970e03fd7c17414ef6fed6eccd01532082359; expires=Sat, 20-Jul-19 10:25:59 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=n8TPWfqHY1QrHiAP9+6UEiOblLFxhbdrwtj3PX8MpIp7G+MF7iOxW29T6UA8avatfQCxKlbw0UQt/fD2LDIy/mqck97X2P08zuGDqSNP6XUdGO4NRWr19CHQ/RLM; Expires=Fri, 27 Jul 2018 10:25:59 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '06d7999e-f1dd-4150-be15-247405546ee4',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba1d48b83683-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/create', "currency=EUR&amount=0.23&reason=Prepayment%20of%20salary%20for%20April&reference=INVOICE%20122%2F1&payment_type=regular&payer_entity_type=individual&payer_company_name=Jens%20enskild%20firma&payer_first_name=Jennifer&payer_last_name=Waylon&payer_city=Stockholm&payer_address=22%20Garvargatan&payer_postcode=12332&payer_state_or_province=Stockholm&payer_country=SE&payer_date_of_birth=1981-12-10&payer_identification_type=none&conversion_id=b29d6ba8-52d2-4329-b46d-145f8fb37008&beneficiary_id=2753e95a-068b-47ea-afde-55995697ee75")
  .reply(200, {"id":"9a4cb8ac-f9e0-4fab-9fe6-88e2fb5b5a69","amount":"0.23","beneficiary_id":"2753e95a-068b-47ea-afde-55995697ee75","currency":"EUR","reference":"INVOICE 122/1","reason":"Prepayment of salary for April","status":"awaiting_authorisation","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","payment_type":"regular","payment_date":"2018-07-24","transferred_at":"","authorisation_steps_required":"1","last_updater_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","short_reference":"180720-MBLHLN002","conversion_id":"b29d6ba8-52d2-4329-b46d-145f8fb37008","failure_reason":"","payer_id":"6f225be4-682c-41f1-9b0d-3957794d704e","payer_details_source":"payer","created_at":"2018-07-20T10:26:01+00:00","updated_at":"2018-07-20T10:26:01+00:00","payment_group_id":null,"unique_request_id":null,"failure_returned_amount":"0.00","ultimate_beneficiary_name":null}, [ 'Date',
  'Fri, 20 Jul 2018 10:26:02 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=d9b2551cdddb069c28363751d837e73671532082361; expires=Sat, 20-Jul-19 10:26:01 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=OPT/rUr9RbtSQuQrN06g8JKG5ugKOPa9SvHwuaIEMrm6eiX1oRPEYAR2K8Faa0S8VMgvJNZQEB94Xki6s2F7El/vamTWDCbzVN3JQwSc2c9Y4pHsYeqWhlvNWKej; Expires=Fri, 27 Jul 2018 10:26:01 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '98f2740d-9cde-4c71-8031-8056465e4e53',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba24aab73659-MAN' ]);

  nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/create', "currency=EUR&amount=0.23&reason=Prepayment%20of%20salary%20for%20April&reference=INVOICE%20122%2F1&payment_type=regular&payer_entity_type=individual&payer_company_name=Jens%20enskild%20firma&payer_first_name=Jennifer&payer_last_name=Waylon&payer_city=Stockholm&payer_address=22%20Garvargatan&payer_postcode=12332&payer_state_or_province=Stockholm&payer_country=SE&payer_date_of_birth=1981-12-10&payer_identification_type=none&conversion_id=4db061b0-e81a-4c03-97f5-62efe82618be&beneficiary_id=7b2989c5-c03e-44be-8f93-612cd2e90b10")
  .reply(200, {"id":"cc0933c9-0c16-467c-8a3b-2fa96b6cede3","amount":"0.23","beneficiary_id":"2753e95a-068b-47ea-afde-55995697ee75","currency":"EUR","reference":"INVOICE 122/1","reason":"Prepayment of salary for April","status":"awaiting_authorisation","creator_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","payment_type":"regular","payment_date":"2018-07-24","transferred_at":"","authorisation_steps_required":"1","last_updater_contact_id":"871b9f2f-f8a3-4010-b084-43e48ab4f404","short_reference":"180720-MBLHLN002","conversion_id":"b29d6ba8-52d2-4329-b46d-145f8fb37008","failure_reason":"","payer_id":"6f225be4-682c-41f1-9b0d-3957794d704e","payer_details_source":"payer","created_at":"2018-07-20T10:26:01+00:00","updated_at":"2018-07-20T10:26:01+00:00","payment_group_id":null,"unique_request_id":null,"failure_returned_amount":"0.00","ultimate_beneficiary_name":null});


nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/authenticate/api', "login_id=development%2Bauthorisation2%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
  .reply(200, {"auth_token":"ce43b83eb01c42259b9861cda8586493"}, [ 'Date',
  'Fri, 20 Jul 2018 10:26:03 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=d1315e24d7fe3aa46e22954b23873d76e1532082362; expires=Sat, 20-Jul-19 10:26:02 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=YUUB9DG7O9Ju4i+vrfON7by/OlgSpxtdJwkg7aY0oTQk9/btPc7QCixJzbZ398fVZyBzZBBFSaxC9+sB2i0KkRQ9+2eOi2Nvr+WCRTP/NqYCOXXxsBXKbP2D9LbP; Expires=Fri, 27 Jul 2018 10:26:02 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '2410a405-ee6e-4e19-a9a1-700b68c778d3',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba2c19f33629-MAN' ]);

  nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/conversions/create', "buy_currency=EUR&sell_currency=GBP&fixed_side=buy&amount=10000.23&reason=Settling%20invoices&term_agreement=true")
  .reply(200, {"id":"7dc88e47-a536-455c-99d3-8e9d5767ae90"});


nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/beneficiaries/create', "bank_account_holder_name=John%20Doe&bank_country=DE&currency=EUR&name=Employee%20Funds&email=john.doe%40acme.com&beneficiary_address=23%20Acacia%20Road&beneficiary_country=GB&account_number=13071472&routing_code_type_1=sort_code&routing_code_value_1=200605&routing_code_type_2=aba&routing_code_value_2=789&bic_swift=COBADEFF&iban=DE89370400440532013000&default_beneficiary=true&bank_address=4356%20Wisteria%20Lane&bank_name=HSBC%20Bank&bank_account_type=checking&beneficiary_entity_type=company&beneficiary_company_name=Some%20Company%20LLC&beneficiary_first_name=John&beneficiary_last_name=Doe&beneficiary_city=London&beneficiary_postcode=W11%202BQ&beneficiary_state_or_province=TX&beneficiary_date_of_birth=1990-07-20&beneficiary_identification_type=none")
  .reply(200, {"id":"7dc88e47-a536-455c-99d3-8e9d5767ae90"});

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/create', "currency=EUR&amount=10000&reason=Salary%20for%20March&reference=INVOICE%209876&payment_type=regular&payer_entity_type=individual&payer_company_name=Some%20Company%20LLC&payer_first_name=John&payer_last_name=Doe&payer_city=London&payer_address=27%20Colmore%20Row&payer_postcode=W11%202BQ&payer_state_or_province=TX&payer_country=GB&payer_date_of_birth=1980-10-10&payer_identification_type=none&conversion_id=7dc88e47-a536-455c-99d3-8e9d5767ae90&beneficiary_id=7dc88e47-a536-455c-99d3-8e9d5767ae90")
  .reply(200, {"id":"7dc88e47-a536-455c-99d3-8e9d5767ae90"});


nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/create', "currency=EUR&amount=0.23&reason=Prepayment%20of%20salary%20for%20April&reference=INVOICE%20122%2F1&payment_type=regular&payer_entity_type=individual&payer_company_name=Jens%20enskild%20firma&payer_first_name=Jennifer&payer_last_name=Waylon&payer_city=Stockholm&payer_address=22%20Garvargatan&payer_postcode=12332&payer_state_or_province=Stockholm&payer_country=SE&payer_date_of_birth=1981-12-10&payer_identification_type=none&conversion_id=7dc88e47-a536-455c-99d3-8e9d5767ae90&beneficiary_id=7dc88e47-a536-455c-99d3-8e9d5767ae90")
  .reply(200, {"id":"7dc88e47-a536-455c-99d3-8e9d5767ae90"});


nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/payments/authorise', "payment_ids%5B%5D=7dc88e47-a536-455c-99d3-8e9d5767ae90&payment_ids%5B%5D=7dc88e47-a536-455c-99d3-8e9d5767ae90")
  .reply(200, {"authorisations":[{"payment_id":"7dc88e47-a536-455c-99d3-8e9d5767ae90","payment_status":"authorised","updated":true,"error":null,"auth_steps_taken":1,"auth_steps_required":1,"short_reference":"180720-MBLHLN001"},{"payment_id":"7dc88e47-a536-455c-99d3-8e9d5767ae90","payment_status":"authorised","updated":true,"error":null,"auth_steps_taken":1,"auth_steps_required":1,"short_reference":"180720-MBLHLN002"}]}, [ 'Date',
  'Fri, 20 Jul 2018 10:26:04 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Set-Cookie',
  '__cfduid=d1b66edf65d48c8cecf75b789e632b87c1532082363; expires=Sat, 20-Jul-19 10:26:03 GMT; path=/; domain=.currencycloud.com; HttpOnly',
  'Set-Cookie',
  'AWSALB=cVEgwhiyL2RpzeMsKRk6L8Qoimj2jTCoGbfuMwgAIgkrWSMz6YBcA8wPtEct+l+TY1FBRZGPnmwtlpkUm9hEypHTzpFdXCCbmJn1y0GNxMfxljP9xyx73XHlpaOS; Expires=Fri, 27 Jul 2018 10:26:04 GMT; Path=/',
  'Access-Control-Allow-Origin',
  '*',
  'X-Request-Id',
  '7120d5fc-d9c0-4dd9-ba82-219a140fa55f',
  'Access-Control-Allow-Methods',
  'POST',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin',
  'Access-Control-Allow-Headers',
  'authorization,Access-Control-Allow-Origin,Content-Type,SOAPAction,X-Auth-Token,Origin,Authority',
  'Expect-CT',
  'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
  'Server',
  'cloudflare',
  'CF-RAY',
  '43d4ba36fd39366b-MAN' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/payments/ffbe0bcb-1cc0-43b8-b931-c40691cf09d9/confirmation')
    .query({"id": "ffbe0bcb-1cc0-43b8-b931-c40691cf09d9"})
    .reply(200, {
        "id": "c4b36894-c9e9-4679-abb2-eb5ee82ea155",
        "payment_id": "ffbe0bcb-1cc0-43b8-b931-c40691cf09d9",
        "account_id": "c0ea266f-b969-4d61-9ca0-e790c79072e5",
        "short_reference": "PC-3674681-TFWLCJ",
        "status": "failed",
        "confirmation_url": "",
        "created_at": "2018-10-24T14:03:39+00:00",
        "updated_at": "2018-10-24T14:03:40+00:00",
        "expires_at": null
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
  .get('/v2/payments/payment_delivery_date')
  .query({"payment_date": "2018-01-01", "payment_type": "regular", "currency": "EUR", "bank_country": "IT" })
  .reply(200, {
    "payment_date": "2018-01-01",
    "payment_delivery_date": "2018-01-01T00:00:00+00:00",
    "payment_cutoff_time": "2018-01-02T14:30:00+00:00",
    "payment_type": "regular",
    "currency": "EUR",
    "bank_country": "IT"
  });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/payments/quote_payment_fee')
    .query({"payment_currency":"USD","payment_destination_country":"US","payment_type":"regular" })
    .reply(200, {"account_id": "0534aaf2-2egg-0134-2f36-10b11cd33cfb",
        "payment_currency": "USD",
        "payment_destination_country": "US",
        "payment_type": "regular",
        "charge_type": null,
        "fee_amount": "10.00",
        "fee_currency": "EUR" });


nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .get('/v2/payments/46ed4827-7b6f-4491-a06f-b548d5a7512d/tracking_info')
    .reply(200, {
        "uetr": "46ed4827-7b6f-4491-a06f-b548d5a7512d",
        "transaction_status": {
            "status": "processing",
            "reason": "transferred_and_tracked"
        },
        "initiation_time": "2019-07-09T13:20:30+00:00",
        "completion_time": null,
        "last_update_time": "2019-07-10T15:39:08+00:00",
        "payment_events": [
            {
                "tracker_event_type": "customer_credit_transfer_payment_cancellation_request",
                "valid": true,
                "transaction_status": null,
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": null,
                "serial_parties": null,
                "sender_acknowledgement_receipt": "2019-07-10T15:39:08+00:00",
                "instructed_amount": null,
                "confirmed_amount": null,
                "interbank_settlement_amount": null,
                "interbank_settlement_date": null,
                "charge_amount": null,
                "charge_type": null,
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-10T15:39:08+00:00"
            },
            {
                "tracker_event_type": "customer_credit_transfer_payment_cancellation_request",
                "valid": true,
                "transaction_status": null,
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": null,
                "serial_parties": null,
                "sender_acknowledgement_receipt": "2019-07-10T14:22:41+00:00",
                "instructed_amount": null,
                "confirmed_amount": null,
                "interbank_settlement_amount": null,
                "interbank_settlement_date": null,
                "charge_amount": null,
                "charge_type": null,
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-10T14:22:41+00:00"
            },
            {
                "tracker_event_type": "credit_transfer_payment_cancellation_request",
                "valid": true,
                "transaction_status": null,
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": "BANABEBBXXX",
                "serial_parties": null,
                "sender_acknowledgement_receipt": "2019-07-10T14:22:41+00:00",
                "instructed_amount": null,
                "confirmed_amount": null,
                "interbank_settlement_amount": {
                    "currency": "USD",
                    "amount": "745437.57"
                },
                "interbank_settlement_date": "2019-07-09T00:00:00+00:00",
                "charge_amount": null,
                "charge_type": null,
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-10T14:22:41+00:00"
            },
            {
                "tracker_event_type": "customer_credit_transfer_payment_cancellation_request",
                "valid": true,
                "transaction_status": null,
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": null,
                "serial_parties": null,
                "sender_acknowledgement_receipt": "2019-07-10T14:22:41+00:00",
                "instructed_amount": null,
                "confirmed_amount": null,
                "interbank_settlement_amount": null,
                "interbank_settlement_date": null,
                "charge_amount": null,
                "charge_type": null,
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-10T14:22:41+00:00"
            },
            {
                "tracker_event_type": "customer_credit_transfer_payment_cancellation_request",
                "valid": true,
                "transaction_status": null,
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": null,
                "serial_parties": null,
                "sender_acknowledgement_receipt": "2019-07-10T14:22:41+00:00",
                "instructed_amount": null,
                "confirmed_amount": null,
                "interbank_settlement_amount": null,
                "interbank_settlement_date": null,
                "charge_amount": null,
                "charge_type": null,
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-10T14:22:41+00:00"
            },
            {
                "tracker_event_type": "credit_transfer_payment_cancellation_request",
                "valid": true,
                "transaction_status": null,
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": null,
                "serial_parties": null,
                "sender_acknowledgement_receipt": "2019-07-10T14:17:39+00:00",
                "instructed_amount": null,
                "confirmed_amount": null,
                "interbank_settlement_amount": null,
                "interbank_settlement_date": null,
                "charge_amount": null,
                "charge_type": null,
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-10T14:22:41+00:00"
            },
            {
                "tracker_event_type": "customer_credit_transfer_payment",
                "valid": true,
                "transaction_status": {
                    "status": "processing",
                    "reason": "transferred_and_tracked"
                },
                "funds_available": null,
                "forwarded_to_agent": null,
                "from": "BANABEBBXXX",
                "to": "BANAUS33XXX",
                "originator": "BANABEBBXXX",
                "serial_parties": {
                    "debtor": null,
                    "debtor_agent": "GPMRCH30",
                    "intermediary_agent1": null,
                    "instructing_reimbursement_agent": null,
                    "creditor_agent": "GPMRQAJ0",
                    "creditor": null
                },
                "sender_acknowledgement_receipt": "2019-07-09T13:20:30+00:00",
                "instructed_amount": {
                    "currency": "USD",
                    "amount": "745437.57"
                },
                "confirmed_amount": null,
                "interbank_settlement_amount": {
                    "currency": "USD",
                    "amount": "745437.57"
                },
                "interbank_settlement_date": "2019-07-09T00:00:00+00:00",
                "charge_amount": null,
                "charge_type": "shared",
                "foreign_exchange_details": null,
                "last_update_time": "2019-07-09T13:20:50+00:00"
            }
        ]
    });



  
nock('https://devapi.currencycloud.com:443')
    .post('/v2/payments/validate', {
        "currency": "GBP",
        "amount": "100",
        "reason": "validate_unit_test",
        "reference": "validate123",
        "beneficiary_id": "46ed4827-7b6f-4491-a06f-b548d5a7512d"
    })
    .reply(200, {
        "validation_result": "success"
    });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
