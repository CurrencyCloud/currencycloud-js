var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"5e6e69d610c9c57878e275430a324edc"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:26 GMT',
  'x-request-id': '2902031547229027978',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"aefb8019-5733-4603-ba39-e0e22214e355","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-SMVQZH","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:52:27+00:00","updated_at":"2015-10-21T20:52:27+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:27 GMT',
  'x-request-id': '2902031550467047051',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"1d2f377a-1bb0-45f0-99fe-e0cb5839b200","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-TDNNCS","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:52:28+00:00","updated_at":"2015-10-21T20:52:28+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:28 GMT',
  'x-request-id': '2902031559350580876',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/conversions/1d2f377a-1bb0-45f0-99fe-e0cb5839b200')
  .query({"id":"1d2f377a-1bb0-45f0-99fe-e0cb5839b200"})
  .reply(200, {"id":"1d2f377a-1bb0-45f0-99fe-e0cb5839b200","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-TDNNCS","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:52:28+00:00","updated_at":"2015-10-21T20:52:28+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:30 GMT',
  'x-request-id': '2902031571203678865',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"070fb3bb-babc-4573-b3e3-734f2b665337","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-PYCZVJ","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:52:30+00:00","updated_at":"2015-10-21T20:52:30+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:30 GMT',
  'x-request-id': '2902031577226686098',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/conversions/find')
  .query({"conversion_ids[]":"070fb3bb-babc-4573-b3e3-734f2b665337"})
  .reply(200, {"conversions":[{"id":"070fb3bb-babc-4573-b3e3-734f2b665337","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-PYCZVJ","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:52:30+00:00","updated_at":"2015-10-21T20:52:30+00:00"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":25,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"asc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:32 GMT',
  'x-request-id': '2902031584356997781',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1042' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:52:32 GMT',
  'x-request-id': '2902031595002156694',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
