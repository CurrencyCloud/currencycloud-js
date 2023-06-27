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
  .reply(200, {"first_conversion_cutoff_datetime": "2020-11-10T23:19:00+00:00",
    "first_conversion_date": "2020-11-10",
    "default_conversion_date": "2020-11-12",
    "optimize_liquidity_conversion_date": "2020-11-12",
    "invalid_conversion_dates": {
      "2020-11-14": "No trading on Saturday",
      "2020-11-15": "No trading on Sunday",
      "2020-11-21": "No trading on Saturday",
      "2020-11-22": "No trading on Sunday",
      "2020-11-26": "Thanksgiving",
      "2020-11-28": "No trading on Saturday",
      "2020-11-29": "No trading on Sunday",
      "2020-12-05": "No trading on Saturday",
      "2020-12-06": "No trading on Sunday",
      "2020-12-12": "No trading on Saturday",
      "2020-12-13": "No trading on Sunday",
      "2020-12-19": "No trading on Saturday",
      "2020-12-20": "No trading on Sunday",
      "2020-12-25": "Christmas",
      "2020-12-26": "No trading on Saturday",
      "2020-12-27": "No trading on Sunday",
      "2020-12-28": "Boxing Day OBS",
      "2021-01-01": "New Year's Day",
      "2021-01-02": "No trading on Saturday",
      "2021-01-03": "No trading on Sunday",
      "2021-01-09": "No trading on Saturday",
      "2021-01-10": "No trading on Sunday",
      "2021-01-16": "No trading on Saturday",
      "2021-01-17": "No trading on Sunday",
      "2021-01-18": "Martin Luther King Jr. Day",
      "2021-01-23": "No trading on Saturday",
      "2021-01-24": "No trading on Sunday",
      "2021-01-30": "No trading on Saturday",
      "2021-01-31": "No trading on Sunday",
      "2021-02-06": "No trading on Saturday",
      "2021-02-07": "No trading on Sunday",
      "2021-02-13": "No trading on Saturday",
      "2021-02-14": "No trading on Sunday",
      "2021-02-15": "Presidents' Day",
      "2021-02-20": "No trading on Saturday",
      "2021-02-21": "No trading on Sunday",
      "2021-02-27": "No trading on Saturday",
      "2021-02-28": "No trading on Sunday",
      "2021-03-06": "No trading on Saturday",
      "2021-03-07": "No trading on Sunday",
      "2021-03-13": "No trading on Saturday",
      "2021-03-14": "No trading on Sunday",
      "2021-03-20": "No trading on Saturday",
      "2021-03-21": "No trading on Sunday",
      "2021-03-27": "No trading on Saturday",
      "2021-03-28": "No trading on Sunday",
      "2021-04-02": "Good Friday",
      "2021-04-03": "No trading on Saturday",
      "2021-04-04": "No trading on Sunday",
      "2021-04-05": "Easter Monday",
      "2021-04-10": "No trading on Saturday",
      "2021-04-11": "No trading on Sunday",
      "2021-04-17": "No trading on Saturday",
      "2021-04-18": "No trading on Sunday",
      "2021-04-24": "No trading on Saturday",
      "2021-04-25": "No trading on Sunday",
      "2021-05-01": "No trading on Saturday",
      "2021-05-02": "No trading on Sunday",
      "2021-05-03": "Early May Bank Holiday",
      "2021-05-08": "No trading on Saturday",
      "2021-05-09": "No trading on Sunday",
      "2021-05-15": "No trading on Saturday",
      "2021-05-16": "No trading on Sunday",
      "2021-05-22": "No trading on Saturday",
      "2021-05-23": "No trading on Sunday",
      "2021-05-29": "No trading on Saturday",
      "2021-05-30": "No trading on Sunday",
      "2021-05-31": "Late May Bank Holiday",
      "2021-06-05": "No trading on Saturday",
      "2021-06-06": "No trading on Sunday",
      "2021-06-12": "No trading on Saturday",
      "2021-06-13": "No trading on Sunday",
      "2021-06-19": "No trading on Saturday",
      "2021-06-20": "No trading on Sunday",
      "2021-06-26": "No trading on Saturday",
      "2021-06-27": "No trading on Sunday",
      "2021-07-03": "No trading on Saturday",
      "2021-07-04": "No trading on Sunday",
      "2021-07-05": "Independence Day OBS",
      "2021-07-10": "No trading on Saturday",
      "2021-07-11": "No trading on Sunday",
      "2021-07-17": "No trading on Saturday",
      "2021-07-18": "No trading on Sunday",
      "2021-07-24": "No trading on Saturday",
      "2021-07-25": "No trading on Sunday",
      "2021-07-31": "No trading on Saturday",
      "2021-08-01": "No trading on Sunday",
      "2021-08-07": "No trading on Saturday",
      "2021-08-08": "No trading on Sunday",
      "2021-08-14": "No trading on Saturday",
      "2021-08-15": "No trading on Sunday",
      "2021-08-21": "No trading on Saturday",
      "2021-08-22": "No trading on Sunday",
      "2021-08-28": "No trading on Saturday",
      "2021-08-29": "No trading on Sunday",
      "2021-08-30": "Summer Bank Holiday",
      "2021-09-04": "No trading on Saturday",
      "2021-09-05": "No trading on Sunday",
      "2021-09-06": "Labor Day",
      "2021-09-11": "No trading on Saturday",
      "2021-09-12": "No trading on Sunday",
      "2021-09-18": "No trading on Saturday",
      "2021-09-19": "No trading on Sunday",
      "2021-09-25": "No trading on Saturday",
      "2021-09-26": "No trading on Sunday",
      "2021-10-02": "No trading on Saturday",
      "2021-10-03": "No trading on Sunday",
      "2021-10-09": "No trading on Saturday",
      "2021-10-10": "No trading on Sunday",
      "2021-10-11": "Columbus Day",
      "2021-10-16": "No trading on Saturday",
      "2021-10-17": "No trading on Sunday",
      "2021-10-23": "No trading on Saturday",
      "2021-10-24": "No trading on Sunday",
      "2021-10-30": "No trading on Saturday",
      "2021-10-31": "No trading on Sunday",
      "2021-11-06": "No trading on Saturday",
      "2021-11-07": "No trading on Sunday",
      "2021-11-11": "Veterans' Day",
      "2021-11-13": "No trading on Saturday",
      "2021-11-14": "No trading on Sunday",
      "2021-11-20": "No trading on Saturday",
      "2021-11-21": "No trading on Sunday",
      "2021-11-25": "Thanksgiving",
      "2021-11-27": "No trading on Saturday",
      "2021-11-28": "No trading on Sunday",
      "2021-12-04": "No trading on Saturday",
      "2021-12-05": "No trading on Sunday",
      "2021-12-11": "No trading on Saturday",
      "2021-12-12": "No trading on Sunday",
      "2021-12-18": "No trading on Saturday",
      "2021-12-19": "No trading on Sunday",
      "2021-12-25": "No trading on Saturday",
      "2021-12-26": "No trading on Sunday",
      "2021-12-27": "Christmas OBS",
      "2021-12-28": "Boxing Day OBS",
      "2022-01-01": "No trading on Saturday",
      "2022-01-02": "No trading on Sunday",
      "2022-01-03": "New Year's Day OBS",
      "2022-01-08": "No trading on Saturday",
      "2022-01-09": "No trading on Sunday",
      "2022-01-15": "No trading on Saturday",
      "2022-01-16": "No trading on Sunday",
      "2022-01-17": "Martin Luther King Jr. Day",
      "2022-01-22": "No trading on Saturday",
      "2022-01-23": "No trading on Sunday",
      "2022-01-29": "No trading on Saturday",
      "2022-01-30": "No trading on Sunday",
      "2022-02-05": "No trading on Saturday",
      "2022-02-06": "No trading on Sunday",
      "2022-02-12": "No trading on Saturday",
      "2022-02-13": "No trading on Sunday",
      "2022-02-19": "No trading on Saturday",
      "2022-02-20": "No trading on Sunday",
      "2022-02-21": "Presidents' Day",
      "2022-02-26": "No trading on Saturday",
      "2022-02-27": "No trading on Sunday",
      "2022-03-05": "No trading on Saturday",
      "2022-03-06": "No trading on Sunday",
      "2022-03-12": "No trading on Saturday",
      "2022-03-13": "No trading on Sunday",
      "2022-03-19": "No trading on Saturday",
      "2022-03-20": "No trading on Sunday",
      "2022-03-26": "No trading on Saturday",
      "2022-03-27": "No trading on Sunday",
      "2022-04-02": "No trading on Saturday",
      "2022-04-03": "No trading on Sunday",
      "2022-04-09": "No trading on Saturday",
      "2022-04-10": "No trading on Sunday",
      "2022-04-15": "Good Friday",
      "2022-04-16": "No trading on Saturday",
      "2022-04-17": "No trading on Sunday",
      "2022-04-18": "Easter Monday",
      "2022-04-23": "No trading on Saturday",
      "2022-04-24": "No trading on Sunday",
      "2022-04-30": "No trading on Saturday",
      "2022-05-01": "No trading on Sunday",
      "2022-05-02": "Early May Bank Holiday",
      "2022-05-07": "No trading on Saturday",
      "2022-05-08": "No trading on Sunday",
      "2022-05-14": "No trading on Saturday",
      "2022-05-15": "No trading on Sunday",
      "2022-05-21": "No trading on Saturday",
      "2022-05-22": "No trading on Sunday",
      "2022-05-28": "No trading on Saturday",
      "2022-05-29": "No trading on Sunday",
      "2022-05-30": "Late May Bank Holiday",
      "2022-06-04": "No trading on Saturday",
      "2022-06-05": "No trading on Sunday",
      "2022-06-11": "No trading on Saturday",
      "2022-06-12": "No trading on Sunday",
      "2022-06-18": "No trading on Saturday",
      "2022-06-19": "No trading on Sunday",
      "2022-06-25": "No trading on Saturday",
      "2022-06-26": "No trading on Sunday",
      "2022-07-02": "No trading on Saturday",
      "2022-07-03": "No trading on Sunday",
      "2022-07-04": "Independence Day",
      "2022-07-09": "No trading on Saturday",
      "2022-07-10": "No trading on Sunday",
      "2022-07-16": "No trading on Saturday",
      "2022-07-17": "No trading on Sunday",
      "2022-07-23": "No trading on Saturday",
      "2022-07-24": "No trading on Sunday",
      "2022-07-30": "No trading on Saturday",
      "2022-07-31": "No trading on Sunday",
      "2022-08-06": "No trading on Saturday",
      "2022-08-07": "No trading on Sunday",
      "2022-08-13": "No trading on Saturday",
      "2022-08-14": "No trading on Sunday",
      "2022-08-20": "No trading on Saturday",
      "2022-08-21": "No trading on Sunday",
      "2022-08-27": "No trading on Saturday",
      "2022-08-28": "No trading on Sunday",
      "2022-08-29": "Summer Bank Holiday",
      "2022-09-03": "No trading on Saturday",
      "2022-09-04": "No trading on Sunday",
      "2022-09-05": "Labor Day",
      "2022-09-10": "No trading on Saturday",
      "2022-09-11": "No trading on Sunday",
      "2022-09-17": "No trading on Saturday",
      "2022-09-18": "No trading on Sunday",
      "2022-09-24": "No trading on Saturday",
      "2022-09-25": "No trading on Sunday",
      "2022-10-01": "No trading on Saturday",
      "2022-10-02": "No trading on Sunday",
      "2022-10-08": "No trading on Saturday",
      "2022-10-09": "No trading on Sunday",
      "2022-10-10": "Columbus Day",
      "2022-10-15": "No trading on Saturday",
      "2022-10-16": "No trading on Sunday",
      "2022-10-22": "No trading on Saturday",
      "2022-10-23": "No trading on Sunday",
      "2022-10-29": "No trading on Saturday",
      "2022-10-30": "No trading on Sunday",
      "2022-11-05": "No trading on Saturday",
      "2022-11-06": "No trading on Sunday",
      "2022-11-11": "Veterans' Day",
      "2022-11-24": "Thanksgiving",
      "2022-12-26": "Christmas OBS",
      "2022-12-27": "Boxing Day OBS"
    }}, [ 'Date',
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
  'Tue, 10 Nov 2020 15:41:45 GMT',
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
    .post('/v2/reference/bank_details/find')
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
    .get('/v2/reference/payment_fee_rules')
    .reply(200, {"payment_fee_rules": [{"payment_type": "priority","charge_type": "shared","fee_amount": "2.00","fee_currency": "AED"},{"payment_type": "regular","charge_type": "shared","fee_amount": "12.00","fee_currency": "USD"},{"payment_type": "priority","charge_type": "ours","fee_amount": "5.25","fee_currency": "GBP"}]}, [ 'Date',
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
