var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"9d55a821b4f695b43252c24ac45d159b"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:46 GMT',
  'x-request-id': '2902033723426882669',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/reference/beneficiary_required_details')
  .query({"currency":"GBP","bank_account_country":"GB","beneficiary_country":"GB"})
  .reply(200, {"details":[{"payment_type":"priority","beneficiary_entity_type":"individual","beneficiary_address":"^.{1,255}","beneficiary_city":"^.{1,255}","beneficiary_country":"^[A-z]{2}$","beneficiary_first_name":"^.{1,255}","beneficiary_last_name":"^.{1,255}","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$"},{"payment_type":"priority","beneficiary_entity_type":"company","beneficiary_address":"^.{1,255}","beneficiary_city":"^.{1,255}","beneficiary_country":"^[A-z]{2}$","beneficiary_company_name":"^.{1,255}","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$"},{"payment_type":"regular","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$","beneficiary_entity_type":"individual"},{"payment_type":"regular","acct_number":"^[0-9A-Z]{1,50}$","sort_code":"^\\d{6}$","beneficiary_entity_type":"company"}]}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:50 GMT',
  'x-request-id': '2902033759850205296',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '809' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/reference/conversion_dates')
  .query({"conversion_pair":"USDGBP"})
  .reply(200, {"invalid_conversion_dates":{"2015-10-24":"No trading on Saturday","2015-10-25":"No trading on Sunday","2015-10-31":"No trading on Saturday","2015-11-01":"No trading on Sunday","2015-11-07":"No trading on Saturday","2015-11-08":"No trading on Sunday","2015-11-11":"Public Holiday","2015-11-14":"No trading on Saturday","2015-11-15":"No trading on Sunday","2015-11-21":"No trading on Saturday","2015-11-22":"No trading on Sunday","2015-11-26":"Public Holiday","2015-11-28":"No trading on Saturday","2015-11-29":"No trading on Sunday","2015-12-05":"No trading on Saturday","2015-12-06":"No trading on Sunday","2015-12-12":"No trading on Saturday","2015-12-13":"No trading on Sunday","2015-12-19":"No trading on Saturday","2015-12-20":"No trading on Sunday","2015-12-25":"Public Holiday","2015-12-26":"No trading on Saturday","2015-12-27":"No trading on Sunday","2015-12-28":"Public Holiday","2016-01-01":"Public Holiday","2016-01-02":"No trading on Saturday","2016-01-03":"No trading on Sunday","2016-01-09":"No trading on Saturday","2016-01-10":"No trading on Sunday","2016-01-16":"No trading on Saturday","2016-01-17":"No trading on Sunday","2016-01-18":"Public Holiday","2016-01-23":"No trading on Saturday","2016-01-24":"No trading on Sunday","2016-01-30":"No trading on Saturday","2016-01-31":"No trading on Sunday","2016-02-06":"No trading on Saturday","2016-02-07":"No trading on Sunday","2016-02-13":"No trading on Saturday","2016-02-14":"No trading on Sunday","2016-02-15":"Public Holiday","2016-02-20":"No trading on Saturday","2016-02-21":"No trading on Sunday","2016-02-27":"No trading on Saturday","2016-02-28":"No trading on Sunday","2016-03-05":"No trading on Saturday","2016-03-06":"No trading on Sunday","2016-03-12":"No trading on Saturday","2016-03-13":"No trading on Sunday","2016-03-19":"No trading on Saturday","2016-03-20":"No trading on Sunday","2016-03-25":"Public Holiday","2016-03-26":"No trading on Saturday","2016-03-27":"No trading on Sunday","2016-03-28":"Public Holiday","2016-04-02":"No trading on Saturday","2016-04-03":"No trading on Sunday","2016-04-09":"No trading on Saturday","2016-04-10":"No trading on Sunday","2016-04-16":"No trading on Saturday","2016-04-17":"No trading on Sunday","2016-04-23":"No trading on Saturday","2016-04-24":"No trading on Sunday","2016-04-30":"No trading on Saturday","2016-05-01":"No trading on Sunday","2016-05-02":"Public Holiday","2016-05-07":"No trading on Saturday","2016-05-08":"No trading on Sunday","2016-05-14":"No trading on Saturday","2016-05-15":"No trading on Sunday","2016-05-21":"No trading on Saturday","2016-05-22":"No trading on Sunday","2016-05-28":"No trading on Saturday","2016-05-29":"No trading on Sunday","2016-05-30":"Public Holiday","2016-06-04":"No trading on Saturday","2016-06-05":"No trading on Sunday","2016-06-11":"No trading on Saturday","2016-06-12":"No trading on Sunday","2016-06-18":"No trading on Saturday","2016-06-19":"No trading on Sunday","2016-06-25":"No trading on Saturday","2016-06-26":"No trading on Sunday","2016-07-02":"No trading on Saturday","2016-07-03":"No trading on Sunday","2016-07-04":"Public Holiday","2016-07-09":"No trading on Saturday","2016-07-10":"No trading on Sunday","2016-07-16":"No trading on Saturday","2016-07-17":"No trading on Sunday","2016-07-23":"No trading on Saturday","2016-07-24":"No trading on Sunday","2016-07-30":"No trading on Saturday","2016-07-31":"No trading on Sunday","2016-08-06":"No trading on Saturday","2016-08-07":"No trading on Sunday","2016-08-13":"No trading on Saturday","2016-08-14":"No trading on Sunday","2016-08-20":"No trading on Saturday","2016-08-21":"No trading on Sunday","2016-08-27":"No trading on Saturday","2016-08-28":"No trading on Sunday","2016-08-29":"Public Holiday","2016-09-03":"No trading on Saturday","2016-09-04":"No trading on Sunday","2016-09-05":"Public Holiday","2016-09-10":"No trading on Saturday","2016-09-11":"No trading on Sunday","2016-09-17":"No trading on Saturday","2016-09-18":"No trading on Sunday","2016-09-24":"No trading on Saturday","2016-09-25":"No trading on Sunday","2016-10-01":"No trading on Saturday","2016-10-02":"No trading on Sunday","2016-10-08":"No trading on Saturday","2016-10-09":"No trading on Sunday","2016-10-10":"Public Holiday","2016-10-15":"No trading on Saturday","2016-10-16":"No trading on Sunday","2016-10-22":"No trading on Saturday","2016-10-23":"No trading on Sunday","2016-10-29":"No trading on Saturday","2016-10-30":"No trading on Sunday","2016-11-05":"No trading on Saturday","2016-11-06":"No trading on Sunday","2016-11-11":"Public Holiday","2016-11-12":"No trading on Saturday","2016-11-13":"No trading on Sunday","2016-11-19":"No trading on Saturday","2016-11-20":"No trading on Sunday"},"first_conversion_date":"2015-10-22","default_conversion_date":"2015-10-22"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:53 GMT',
  'x-request-id': '2902033762450685041',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '4804' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/reference/currencies')
  .reply(200, {"currencies":[{"code":"AED","decimal_places":2,"name":"United Arab Emirates Dirham"},{"code":"AUD","decimal_places":2,"name":"Australian Dollar"},{"code":"BGN","decimal_places":2,"name":"Bulgarian Lev"},{"code":"CAD","decimal_places":2,"name":"Canadian Dollar"},{"code":"CHF","decimal_places":2,"name":"Swiss Franc"},{"code":"CZK","decimal_places":2,"name":"Czech Koruna"},{"code":"DKK","decimal_places":2,"name":"Danish Krone"},{"code":"EUR","decimal_places":2,"name":"Euro"},{"code":"GBP","decimal_places":2,"name":"Pound Sterling"},{"code":"HKD","decimal_places":2,"name":"Hong Kong Dollar"},{"code":"HUF","decimal_places":2,"name":"Hungarian Forint"},{"code":"ILS","decimal_places":2,"name":"Israeli New Sheqel"},{"code":"JPY","decimal_places":0,"name":"Japanese Yen"},{"code":"MXN","decimal_places":2,"name":"Mexican Peso"},{"code":"NOK","decimal_places":2,"name":"Norwegian Krone"},{"code":"NZD","decimal_places":2,"name":"New Zealand Dollar"},{"code":"PLN","decimal_places":2,"name":"Polish Zloty"},{"code":"QAR","decimal_places":2,"name":"Qatari Rial"},{"code":"RON","decimal_places":2,"name":"Romanian New Leu"},{"code":"SAR","decimal_places":2,"name":"Saudi Riyal"},{"code":"SEK","decimal_places":2,"name":"Swedish Krona"},{"code":"SGD","decimal_places":2,"name":"Singapore Dollar"},{"code":"THB","decimal_places":2,"name":"Thai Baht"},{"code":"TRY","decimal_places":2,"name":"Turkish Lira"},{"code":"USD","decimal_places":2,"name":"United States Dollar"},{"code":"ZAR","decimal_places":2,"name":"South African Rand"}]}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:54 GMT',
  'x-request-id': '2902033788707034229',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1530' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/reference/payment_dates')
  .query({"currency":"USD"})
  .reply(200, {"invalid_payment_dates":{"2015-10-24":"No trading on Saturday","2015-10-25":"No trading on Sunday","2015-10-31":"No trading on Saturday","2015-11-01":"No trading on Sunday","2015-11-07":"No trading on Saturday","2015-11-08":"No trading on Sunday","2015-11-11":"","2015-11-14":"No trading on Saturday","2015-11-15":"No trading on Sunday","2015-11-21":"No trading on Saturday","2015-11-22":"No trading on Sunday","2015-11-26":"","2015-11-28":"No trading on Saturday","2015-11-29":"No trading on Sunday","2015-12-05":"No trading on Saturday","2015-12-06":"No trading on Sunday","2015-12-12":"No trading on Saturday","2015-12-13":"No trading on Sunday","2015-12-19":"No trading on Saturday","2015-12-20":"No trading on Sunday"},"first_payment_date":"2015-10-22"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:54 GMT',
  'x-request-id': '2902033791567546486',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '759' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/reference/settlement_accounts')
  .query({"currency":"EUR"})
  .reply(200, {"settlement_accounts":[{"bank_account_holder_name":"The Currency Cloud EUR - Client Seg A/C\t","beneficiary_address":"","beneficiary_country":"","bank_name":"Barclays Bank plc","bank_address":[],"bank_country":"","currency":"EUR","bic_swift":"BARCGB22","iban":"GB05 BARC 2006 0574 7412 77","account_number":"74741277","routing_code_type_1":"sort_code","routing_code_value_1":"200605","routing_code_type_2":"","routing_code_value_2":""}]}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:54 GMT',
  'x-request-id': '2902033794344165495',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '438' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:56:55 GMT',
  'x-request-id': '2902033797414408312',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
