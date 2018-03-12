var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "602d1ac3855a0477b3c05d2fc840bd2e"});

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
    "id": "877b9759-a0f2-46b9-bc6b-bb5a35025096",
    "settlement_date": "2017-10-23T14:00:00+00:00",
    "conversion_date": "2017-10-23T00:00:00+00:00",
    "short_reference": "20171021-JHXRLT",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "account_id": "78618e58-da3c-447f-ad59-1796accfeff9",
    "currency_pair": "EURGBP",
    "status": "awaiting_funds",
    "buy_currency": "EUR",
    "sell_currency": "GBP",
    "client_buy_amount": "10000.23",
    "client_sell_amount": "7353.17",
    "fixed_side": "buy",
    "mid_market_rate": "0.7354",
    "core_rate": "0.7353",
    "partner_rate": "",
    "partner_status": "funds_arrived",
    "partner_buy_amount": "0.00",
    "partner_sell_amount": "0.00",
    "client_rate": "0.7353",
    "deposit_required": false,
    "deposit_amount": "0.00",
    "deposit_currency": "",
    "deposit_status": "not_required",
    "deposit_required_at": "",
    "payment_ids": [],
    "created_at": "2017-10-21T20:55:02+00:00",
    "updated_at": "2017-10-21T20:55:02+00:00"
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
    "id": "a7b278cb-ed4f-418b-973a-3c985ae53256",
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
    "created_at": "2017-10-21T20:55:03+00:00",
    "updated_at": "2017-10-21T20:55:03+00:00"
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
    "conversion_id": "877b9759-a0f2-46b9-bc6b-bb5a35025096",
    "beneficiary_id": "a7b278cb-ed4f-418b-973a-3c985ae53256"
  })
  .reply(200, {
    "id": "f7635dd6-eeb4-4401-b9f5-e835d91a43c9",
    "amount": "10000.00",
    "beneficiary_id": "a7b278cb-ed4f-418b-973a-3c985ae53256",
    "currency": "EUR",
    "reference": "INVOICE 9876",
    "reason": "Salary for March",
    "status": "ready_to_send",
    "creator_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "payment_type": "regular",
    "payment_date": "2017-10-23",
    "transferred_at": "",
    "authorisation_steps_required": "0",
    "last_updater_contact_id": "8f639ab2-2b85-4327-9eb1-01ee4f0c77bc",
    "short_reference": "151021-JHXRLT001",
    "conversion_id": "877b9759-a0f2-46b9-bc6b-bb5a35025096",
    "failure_reason": "",
    "payer_id": "e598308d-1829-430c-b3d8-662170811622",
    "payer_details_source": "payer",
    "created_at": "2017-10-21T20:55:05+00:00",
    "updated_at": "2017-10-21T20:55:05+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/payers/e598308d-1829-430c-b3d8-662170811622')
  .reply(200, {
    "id": "e598308d-1829-430c-b3d8-662170811622",
    "legal_entity_type": "individual",
    "company_name": "Some Company LLC",
    "first_name": "John",
    "last_name": "Doe",
    "address": "27 Colmore Row",
    "city": "London",
    "state_or_province": "TX",
    "country": "GB",
    "postcode": "W11 2BQ",
    "date_of_birth": "1980-10-10",
    "identification_type": "none",
    "identification_value": null,
    "created_at": "2017-10-15T00:39:24+00:00",
    "updated_at": "2017-10-21T04:15:20+00:00"
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
