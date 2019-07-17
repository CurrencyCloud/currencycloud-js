var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
  .reply(200, {"auth_token":"65360fb297f8dea3a68d83499b9545a4"}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '49',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  'a26be5d6-8012-4224-b288-6d852b1bae5c',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/beneficiary_required_details')
  .query({"currency":"GBP","bank_account_country":"GB","beneficiary_country":"GB"})
  .reply(200, {"details":[{"payment_type":"regular","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$","beneficiary_entity_type":"individual"},{"payment_type":"regular","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$","beneficiary_entity_type":"company"},{"payment_type":"priority","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$","beneficiary_entity_type":"individual"},{"payment_type":"priority","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$","beneficiary_entity_type":"company"}]}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '497',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  'c70dda9e-4e20-458d-9c85-2eb2ee07eae0',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/conversion_dates')
  .query({"conversion_pair":"USDGBP"})
  .reply(200, {"invalid_conversion_dates":{"2018-07-21":"No trading on Saturday","2018-07-22":"No trading on Sunday","2018-07-28":"No trading on Saturday","2018-07-29":"No trading on Sunday","2018-08-04":"No trading on Saturday","2018-08-05":"No trading on Sunday","2018-08-11":"No trading on Saturday","2018-08-12":"No trading on Sunday","2018-08-18":"No trading on Saturday","2018-08-19":"No trading on Sunday","2018-08-25":"No trading on Saturday","2018-08-26":"No trading on Sunday","2018-08-27":"Public Holiday","2018-09-01":"No trading on Saturday","2018-09-02":"No trading on Sunday","2018-09-03":"Public Holiday","2018-09-08":"No trading on Saturday","2018-09-09":"No trading on Sunday","2018-09-15":"No trading on Saturday","2018-09-16":"No trading on Sunday","2018-09-22":"No trading on Saturday","2018-09-23":"No trading on Sunday","2018-09-29":"No trading on Saturday","2018-09-30":"No trading on Sunday","2018-10-06":"No trading on Saturday","2018-10-07":"No trading on Sunday","2018-10-08":"Public Holiday","2018-10-13":"No trading on Saturday","2018-10-14":"No trading on Sunday","2018-10-20":"No trading on Saturday","2018-10-21":"No trading on Sunday","2018-10-27":"No trading on Saturday","2018-10-28":"No trading on Sunday","2018-11-03":"No trading on Saturday","2018-11-04":"No trading on Sunday","2018-11-10":"No trading on Saturday","2018-11-11":"No trading on Sunday","2018-11-12":"Public Holiday","2018-11-17":"No trading on Saturday","2018-11-18":"No trading on Sunday","2018-11-22":"Public Holiday","2018-11-24":"No trading on Saturday","2018-11-25":"No trading on Sunday","2018-12-01":"No trading on Saturday","2018-12-02":"No trading on Sunday","2018-12-08":"No trading on Saturday","2018-12-09":"No trading on Sunday","2018-12-15":"No trading on Saturday","2018-12-16":"No trading on Sunday","2018-12-22":"No trading on Saturday","2018-12-23":"No trading on Sunday","2018-12-25":"Public Holiday","2018-12-26":"Public Holiday","2018-12-29":"No trading on Saturday","2018-12-30":"No trading on Sunday","2019-01-05":"No trading on Saturday","2019-01-06":"No trading on Sunday","2019-01-12":"No trading on Saturday","2019-01-13":"No trading on Sunday","2019-01-19":"No trading on Saturday","2019-01-20":"No trading on Sunday","2019-01-26":"No trading on Saturday","2019-01-27":"No trading on Sunday","2019-02-02":"No trading on Saturday","2019-02-03":"No trading on Sunday","2019-02-09":"No trading on Saturday","2019-02-10":"No trading on Sunday","2019-02-16":"No trading on Saturday","2019-02-17":"No trading on Sunday","2019-02-23":"No trading on Saturday","2019-02-24":"No trading on Sunday","2019-03-02":"No trading on Saturday","2019-03-03":"No trading on Sunday","2019-03-09":"No trading on Saturday","2019-03-10":"No trading on Sunday","2019-03-16":"No trading on Saturday","2019-03-17":"No trading on Sunday","2019-03-23":"No trading on Saturday","2019-03-24":"No trading on Sunday","2019-03-30":"No trading on Saturday","2019-03-31":"No trading on Sunday","2019-04-06":"No trading on Saturday","2019-04-07":"No trading on Sunday","2019-04-13":"No trading on Saturday","2019-04-14":"No trading on Sunday","2019-04-20":"No trading on Saturday","2019-04-21":"No trading on Sunday","2019-04-27":"No trading on Saturday","2019-04-28":"No trading on Sunday","2019-05-04":"No trading on Saturday","2019-05-05":"No trading on Sunday","2019-05-11":"No trading on Saturday","2019-05-12":"No trading on Sunday","2019-05-18":"No trading on Saturday","2019-05-19":"No trading on Sunday","2019-05-25":"No trading on Saturday","2019-05-26":"No trading on Sunday","2019-06-01":"No trading on Saturday","2019-06-02":"No trading on Sunday","2019-06-08":"No trading on Saturday","2019-06-09":"No trading on Sunday","2019-06-15":"No trading on Saturday","2019-06-16":"No trading on Sunday","2019-06-22":"No trading on Saturday","2019-06-23":"No trading on Sunday","2019-06-29":"No trading on Saturday","2019-06-30":"No trading on Sunday","2019-07-06":"No trading on Saturday","2019-07-07":"No trading on Sunday","2019-07-13":"No trading on Saturday","2019-07-14":"No trading on Sunday","2019-07-20":"No trading on Saturday","2019-07-21":"No trading on Sunday","2019-07-27":"No trading on Saturday","2019-07-28":"No trading on Sunday","2019-08-03":"No trading on Saturday","2019-08-04":"No trading on Sunday","2019-08-10":"No trading on Saturday","2019-08-11":"No trading on Sunday","2019-08-17":"No trading on Saturday","2019-08-18":"No trading on Sunday","2019-08-24":"No trading on Saturday","2019-08-25":"No trading on Sunday","2019-08-31":"No trading on Saturday","2019-09-01":"No trading on Sunday","2019-09-07":"No trading on Saturday","2019-09-08":"No trading on Sunday","2019-09-14":"No trading on Saturday","2019-09-15":"No trading on Sunday","2019-09-21":"No trading on Saturday","2019-09-22":"No trading on Sunday","2019-09-28":"No trading on Saturday","2019-09-29":"No trading on Sunday","2019-10-05":"No trading on Saturday","2019-10-06":"No trading on Sunday","2019-10-12":"No trading on Saturday","2019-10-13":"No trading on Sunday","2019-10-19":"No trading on Saturday","2019-10-20":"No trading on Sunday","2019-10-26":"No trading on Saturday","2019-10-27":"No trading on Sunday","2019-11-02":"No trading on Saturday","2019-11-03":"No trading on Sunday","2019-11-09":"No trading on Saturday","2019-11-10":"No trading on Sunday","2019-11-16":"No trading on Saturday","2019-11-17":"No trading on Sunday","2019-11-23":"No trading on Saturday","2019-11-24":"No trading on Sunday","2019-11-30":"No trading on Saturday","2019-12-01":"No trading on Sunday","2019-12-07":"No trading on Saturday","2019-12-08":"No trading on Sunday","2019-12-14":"No trading on Saturday","2019-12-15":"No trading on Sunday","2019-12-21":"No trading on Saturday","2019-12-22":"No trading on Sunday","2019-12-28":"No trading on Saturday","2019-12-29":"No trading on Sunday","2020-01-04":"No trading on Saturday","2020-01-05":"No trading on Sunday","2020-01-11":"No trading on Saturday","2020-01-12":"No trading on Sunday","2020-01-18":"No trading on Saturday","2020-01-19":"No trading on Sunday","2020-01-25":"No trading on Saturday","2020-01-26":"No trading on Sunday","2020-02-01":"No trading on Saturday","2020-02-02":"No trading on Sunday","2020-02-08":"No trading on Saturday","2020-02-09":"No trading on Sunday","2020-02-15":"No trading on Saturday","2020-02-16":"No trading on Sunday","2020-02-22":"No trading on Saturday","2020-02-23":"No trading on Sunday","2020-02-29":"No trading on Saturday","2020-03-01":"No trading on Sunday","2020-03-07":"No trading on Saturday","2020-03-08":"No trading on Sunday","2020-03-14":"No trading on Saturday","2020-03-15":"No trading on Sunday","2020-03-21":"No trading on Saturday","2020-03-22":"No trading on Sunday","2020-03-28":"No trading on Saturday","2020-03-29":"No trading on Sunday","2020-04-04":"No trading on Saturday","2020-04-05":"No trading on Sunday","2020-04-11":"No trading on Saturday","2020-04-12":"No trading on Sunday","2020-04-18":"No trading on Saturday","2020-04-19":"No trading on Sunday","2020-04-25":"No trading on Saturday","2020-04-26":"No trading on Sunday","2020-05-02":"No trading on Saturday","2020-05-03":"No trading on Sunday","2020-05-09":"No trading on Saturday","2020-05-10":"No trading on Sunday","2020-05-16":"No trading on Saturday","2020-05-17":"No trading on Sunday","2020-05-23":"No trading on Saturday","2020-05-24":"No trading on Sunday","2020-05-30":"No trading on Saturday","2020-05-31":"No trading on Sunday","2020-06-06":"No trading on Saturday","2020-06-07":"No trading on Sunday","2020-06-13":"No trading on Saturday","2020-06-14":"No trading on Sunday","2020-06-20":"No trading on Saturday","2020-06-21":"No trading on Sunday","2020-06-27":"No trading on Saturday","2020-06-28":"No trading on Sunday","2020-07-04":"No trading on Saturday","2020-07-05":"No trading on Sunday","2020-07-11":"No trading on Saturday","2020-07-12":"No trading on Sunday"},"first_conversion_date":"2018-07-17","default_conversion_date":"2018-07-18"}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '8012',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  'f7cace2f-0827-428c-b03e-ecd9cbd0fcba',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/currencies')
  .reply(200, {"currencies":[{"code":"AED","decimal_places":2,"name":"United Arab Emirates Dirham","online_trading":true},{"code":"AUD","decimal_places":2,"name":"Australian Dollar","online_trading":true},{"code":"BGN","decimal_places":2,"name":"Bulgarian Lev","online_trading":true},{"code":"BHD","decimal_places":2,"name":"Bahraini Dinar","online_trading":true},{"code":"CAD","decimal_places":2,"name":"Canadian Dollar","online_trading":true},{"code":"CHF","decimal_places":2,"name":"Swiss Franc","online_trading":true},{"code":"CNY","decimal_places":2,"name":"Chinese Yuan","online_trading":true},{"code":"CZK","decimal_places":2,"name":"Czech Koruna","online_trading":true},{"code":"DKK","decimal_places":2,"name":"Danish Krone","online_trading":true},{"code":"EUR","decimal_places":2,"name":"Euro","online_trading":true},{"code":"GBP","decimal_places":2,"name":"British Pound","online_trading":true},{"code":"HKD","decimal_places":2,"name":"Hong Kong Dollar","online_trading":true},{"code":"HRK","decimal_places":2,"name":"Croatian Kuna","online_trading":true},{"code":"HUF","decimal_places":2,"name":"Hungarian Forint","online_trading":true},{"code":"ILS","decimal_places":2,"name":"Israeli New Sheqel","online_trading":true},{"code":"INR","decimal_places":2,"name":"Indian Rupee","online_trading":true},{"code":"JMD","decimal_places":2,"name":"Jamaican Dollar","online_trading":false},{"code":"JPY","decimal_places":0,"name":"Japanese Yen","online_trading":true},{"code":"KES","decimal_places":2,"name":"Kenyan Shilling","online_trading":true},{"code":"KWD","decimal_places":2,"name":"Kuwaiti Dinar","online_trading":true},{"code":"MXN","decimal_places":2,"name":"Mexican Peso","online_trading":true},{"code":"NOK","decimal_places":2,"name":"Norwegian Krone","online_trading":true},{"code":"NZD","decimal_places":2,"name":"New Zealand Dollar","online_trading":true},{"code":"OMR","decimal_places":2,"name":"Omani Rial","online_trading":true},{"code":"PLN","decimal_places":2,"name":"Polish Zloty","online_trading":true},{"code":"QAR","decimal_places":2,"name":"Qatari Rial","online_trading":true},{"code":"RON","decimal_places":2,"name":"Romanian New Leu","online_trading":true},{"code":"SAR","decimal_places":2,"name":"Saudi Riyal","online_trading":true},{"code":"SEK","decimal_places":2,"name":"Swedish Krona","online_trading":true},{"code":"SGD","decimal_places":2,"name":"Singapore Dollar","online_trading":true},{"code":"THB","decimal_places":2,"name":"Thai Baht","online_trading":true},{"code":"TRY","decimal_places":2,"name":"Turkish Lira","online_trading":true},{"code":"UGX","decimal_places":0,"name":"Ugandan Shilling","online_trading":true},{"code":"USD","decimal_places":2,"name":"United States Dollar","online_trading":true},{"code":"ZAR","decimal_places":2,"name":"South African Rand","online_trading":true}]}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '2816',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  '172c4315-b8a7-41af-a90c-e50ffa9921f9',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/payment_dates')
  .query({"currency":"USD"})
  .reply(200, {"invalid_payment_dates":{"2018-07-21":"No trading on Saturday","2018-07-22":"No trading on Sunday","2018-07-28":"No trading on Saturday","2018-07-29":"No trading on Sunday","2018-08-04":"No trading on Saturday","2018-08-05":"No trading on Sunday","2018-08-11":"No trading on Saturday","2018-08-12":"No trading on Sunday","2018-08-18":"No trading on Saturday","2018-08-19":"No trading on Sunday","2018-08-25":"No trading on Saturday","2018-08-26":"No trading on Sunday","2018-09-01":"No trading on Saturday","2018-09-02":"No trading on Sunday","2018-09-03":"","2018-09-08":"No trading on Saturday","2018-09-09":"No trading on Sunday","2018-09-15":"No trading on Saturday","2018-09-16":"No trading on Sunday"},"first_payment_date":"2018-07-16"}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '743',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  'd9ff23ed-2d00-45db-817e-46a87ccfc7e5',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/settlement_accounts')
  .query({"currency":"EUR"})
  .reply(200, {"settlement_accounts":[{"bank_account_holder_name":"The Currency Cloud EUR - Client Seg A/C\t","beneficiary_address":"","beneficiary_country":"","bank_name":"Barclays Bank plc","bank_address":[],"bank_country":"","currency":"EUR","bic_swift":"BARCGB22","iban":"GB05 BARC 2006 0574 7412 77","account_number":"74741277","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"","routing_code_value_2":""}]}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '438',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  'bada9bdd-bbb5-48d5-bc4c-c5c6e2d64ca3',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/payer_required_details')
  .query({"payer_country":"GB"})
  .reply(200, {"details":[{"payer_entity_type":"company","payment_type":"priority","required_fields":[{"name":"payer_country","validation_rule":"^[A-z]{2}$"},{"name":"payer_city","validation_rule":"^.{1,255}"},{"name":"payer_address","validation_rule":"^.{1,255}"},{"name":"payer_company_name","validation_rule":"^.{1,255}"},{"name":"payer_identification_value","validation_rule":"^.{1,255}"}],"payer_identification_type":"incorporation_number"},{"payer_entity_type":"individual","payment_type":"priority","required_fields":[{"name":"payer_country","validation_rule":"^[A-z]{2}$"},{"name":"payer_city","validation_rule":"^.{1,255}"},{"name":"payer_address","validation_rule":"^.{1,255}"},{"name":"payer_first_name","validation_rule":"^.{1,255}"},{"name":"payer_last_name","validation_rule":"^.{1,255}"},{"name":"payer_date_of_birth","validation_rule":"/A([+-]?d{4}(?!d{2}\b))((-?)((0[1-9]|1[0-2])(\u0003([12]d|0[1-9]|3[01]))?|W([0-4]d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]d|[12]d{2}|3([0-5]d|6[1-6])))([T ]((([01]d|2[0-3])((:?)[0-5]d)?|24:?00)([.,]d+(?!:))?)?(\u000f[0-5]d([.,]d+)?)?([zZ]|([+-])([01]d|2[0-3]):?([0-5]d)?)?)?)?Z/"}]},{"payer_entity_type":"company","payment_type":"regular","required_fields":[{"name":"payer_country","validation_rule":"^[A-z]{2}$"},{"name":"payer_city","validation_rule":"^.{1,255}"},{"name":"payer_address","validation_rule":"^.{1,255}"},{"name":"payer_company_name","validation_rule":"^.{1,255}"}]},{"payer_entity_type":"individual","payment_type":"regular","required_fields":[{"name":"payer_country","validation_rule":"^[A-z]{2}$"},{"name":"payer_city","validation_rule":"^.{1,255}"},{"name":"payer_address","validation_rule":"^.{1,255}"},{"name":"payer_first_name","validation_rule":"^.{1,255}"},{"name":"payer_last_name","validation_rule":"^.{1,255}"},{"name":"payer_date_of_birth","validation_rule":"/A([+-]?d{4}(?!d{2}\b))((-?)((0[1-9]|1[0-2])(\u0003([12]d|0[1-9]|3[01]))?|W([0-4]d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]d|[12]d{2}|3([0-5]d|6[1-6])))([T ]((([01]d|2[0-3])((:?)[0-5]d)?|24:?00)([.,]d+(?!:))?)?(\u000f[0-5]d([.,]d+)?)?([zZ]|([+-])([01]d|2[0-3]):?([0-5]d)?)?)?)?Z/"}]}]}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:26 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '2098',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  '988d9412-94ca-4fe3-82d9-de16e6de66e3',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .get('/v2/reference/payment_purpose_codes')
  .query({"currency":"CNY"})
  .reply(200, {"purpose_codes":[{"currency":"CNY","entity_type":"company","purpose_code":"current_account_payment","purpose_description":"Payment to Current Account"},{"currency":"CNY","entity_type":"company","purpose_code":"services","purpose_description":"Trade Settlement for Services"},{"currency":"CNY","entity_type":"company","purpose_code":"donations","purpose_description":"Charity Donation"},{"currency":"CNY","entity_type":"company","purpose_code":"goods","purpose_description":"Trade Settlement for Goods"},{"currency":"CNY","entity_type":"company","purpose_code":"capital_account_payment","purpose_description":"Payment to Capital Account"}]}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:27 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '640',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  '669f74a9-f731-4d32-b7d6-3013d9365d7a',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .get('/v2/reference/bank_details')
    .query({"identifier_type":"iban","identifier_value":"GB19TCCL00997901654515"})
    .reply(200, {"identifier_value":"GB19TCCL00997901654515","identifier_type":"iban","account_number":"GB19TCCL00997901654515","bic_swift":"TCCLGB22XXX","bank_name":"THE CURRENCY CLOUD LIMITED","bank_branch":"","bank_address":"12 STEWARD STREET  THE STEWARD BUILDING FLOOR 0","bank_city":"LONDON","bank_state":"LONDON","bank_post_code":"E1 6FQ","bank_country":"UNITED KINGDOM","bank_country_ISO":"GB","currency":null}, [ 'Date',
      'Mon, 16 Jul 2018 16:24:27 GMT',
      'Content-Type',
      'application/json;charset=utf-8',
      'Content-Length',
      '640',
      'Connection',
      'close',
      'Server',
      'nginx',
      'X-Request-Id',
      '669f74a9-f731-4d32-b7d6-3013d9365d7a',
      'X-Content-Type-Options',
      'nosniff',
      'Vary',
      'Origin' ]);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
  .post('/v2/authenticate/close_session')
  .reply(200, {}, [ 'Date',
  'Mon, 16 Jul 2018 16:24:27 GMT',
  'Content-Type',
  'application/json;charset=utf-8',
  'Content-Length',
  '2',
  'Connection',
  'close',
  'Server',
  'nginx',
  'X-Request-Id',
  '5b0fc7e0-049c-4633-9731-c5adba26e94a',
  'X-Content-Type-Options',
  'nosniff',
  'Vary',
  'Origin' ]);
