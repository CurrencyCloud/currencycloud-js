var nock = require('nock');

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/api')
  .query({"login_id":"test.it.now@mailinator.com","api_key":"f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d"})
  .reply(200, {"auth_token":"c23247ceab18eafc4957e2dc6403eff6"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:20 GMT',
  'x-request-id': '2902034006433341585',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"db737cac-d828-4d7f-a1ac-347239e51a0d","status":"open","short_reference":"20151021-FTYVKJ","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:20+00:00","updated_at":"2015-10-21T20:57:20+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:20 GMT',
  'x-request-id': '2902034010342445202',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"be9ae070-f606-460f-a3d4-dac62300693f","status":"open","short_reference":"20151021-LRZJBH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:20+00:00","updated_at":"2015-10-21T20:57:20+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:20 GMT',
  'x-request-id': '2902034013530106005',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/settlements/be9ae070-f606-460f-a3d4-dac62300693f')
  .query({"id":"be9ae070-f606-460f-a3d4-dac62300693f"})
  .reply(200, {"id":"be9ae070-f606-460f-a3d4-dac62300693f","status":"open","short_reference":"20151021-LRZJBH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:20+00:00","updated_at":"2015-10-21T20:57:20+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:21 GMT',
  'x-request-id': '2902034016516456598',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"4ec68623-5ba8-47fa-95e6-06d9d1a84dc1","status":"open","short_reference":"20151021-WTQZGK","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:21+00:00","updated_at":"2015-10-21T20:57:21+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:21 GMT',
  'x-request-id': '2902034019737701527',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/settlements/find')
  .query({"order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"settlements":[{"id":"4ec68623-5ba8-47fa-95e6-06d9d1a84dc1","status":"open","short_reference":"20151021-WTQZGK","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:21+00:00","updated_at":"2015-10-21T20:57:21+00:00","released_at":""},{"id":"be9ae070-f606-460f-a3d4-dac62300693f","status":"open","short_reference":"20151021-LRZJBH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:20+00:00","updated_at":"2015-10-21T20:57:20+00:00","released_at":""},{"id":"db737cac-d828-4d7f-a1ac-347239e51a0d","status":"open","short_reference":"20151021-FTYVKJ","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:20+00:00","updated_at":"2015-10-21T20:57:20+00:00","released_at":""},{"id":"ed715b89-541c-4854-bf31-e0c43797c2a7","status":"open","short_reference":"20151021-NBLVQB","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:30:51+00:00","updated_at":"2015-10-21T20:30:51+00:00","released_at":""},{"id":"1632ad7b-0af8-40b6-9d1f-d2433053a4e8","status":"open","short_reference":"20151021-NQVDKB","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:29:48+00:00","updated_at":"2015-10-21T20:29:48+00:00","released_at":""}],"pagination":{"total_entries":32,"total_pages":7,"current_page":1,"per_page":5,"previous_page":-1,"next_page":2,"order":"created_at","order_asc_desc":"desc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:21 GMT',
  'x-request-id': '2902034022724038808',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '1390' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"60924c1c-40f9-4a9e-9816-2376fc987819","status":"open","short_reference":"20151021-SCCCYT","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:22+00:00","updated_at":"2015-10-21T20:57:22+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:22 GMT',
  'x-request-id': '2902034026071095449',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/60924c1c-40f9-4a9e-9816-2376fc987819/delete')
  .query({"id":"60924c1c-40f9-4a9e-9816-2376fc987819"})
  .reply(200, {"id":"60924c1c-40f9-4a9e-9816-2376fc987819","status":"open","short_reference":"20151021-SCCCYT","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:22+00:00","updated_at":"2015-10-21T20:57:22+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:22 GMT',
  'x-request-id': '2902034029090991258',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .get('/v2/settlements/60924c1c-40f9-4a9e-9816-2376fc987819')
  .query({"id":"60924c1c-40f9-4a9e-9816-2376fc987819"})
  .reply(404, {"error_code":"settlement_not_found","error_messages":{"id":[{"code":"settlement_not_found","message":"Settlement was not found for this id","params":{}}]}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:23 GMT',
  'x-request-id': '2902034032412874907',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '156' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"a2d81b1b-27c9-496f-b028-2099353cd301","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-ZGRLHN","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:57:23+00:00","updated_at":"2015-10-21T20:57:23+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:24 GMT',
  'x-request-id': '2902034035113997470',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"5fe93b8b-d0f1-45b5-b67a-310c4cb9a7fb","status":"open","short_reference":"20151021-DWNCMT","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:24+00:00","updated_at":"2015-10-21T20:57:24+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:24 GMT',
  'x-request-id': '2902034046925184163',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/5fe93b8b-d0f1-45b5-b67a-310c4cb9a7fb/add_conversion')
  .query({"id":"5fe93b8b-d0f1-45b5-b67a-310c4cb9a7fb","conversion_id":"a2d81b1b-27c9-496f-b028-2099353cd301"})
  .reply(200, {"id":"5fe93b8b-d0f1-45b5-b67a-310c4cb9a7fb","status":"open","short_reference":"20151021-DWNCMT","type":"net","conversion_ids":["a2d81b1b-27c9-496f-b028-2099353cd301"],"entries":[{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}},{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}}],"created_at":"2015-10-21T20:57:24+00:00","updated_at":"2015-10-21T20:57:24+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:25 GMT',
  'x-request-id': '2902034050263835812',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '396' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"1ef15333-a4d1-4ae9-8782-73c40d2bb495","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-GCXRQY","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:57:25+00:00","updated_at":"2015-10-21T20:57:26+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:26 GMT',
  'x-request-id': '2902034054634312869',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"7860c59a-72e1-47a8-9e6d-086bb936a38b","status":"open","short_reference":"20151021-NNQFQK","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:26+00:00","updated_at":"2015-10-21T20:57:26+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:26 GMT',
  'x-request-id': '2902034062511184042',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/7860c59a-72e1-47a8-9e6d-086bb936a38b/add_conversion')
  .query({"id":"7860c59a-72e1-47a8-9e6d-086bb936a38b","conversion_id":"1ef15333-a4d1-4ae9-8782-73c40d2bb495"})
  .reply(200, {"id":"7860c59a-72e1-47a8-9e6d-086bb936a38b","status":"open","short_reference":"20151021-NNQFQK","type":"net","conversion_ids":["1ef15333-a4d1-4ae9-8782-73c40d2bb495"],"entries":[{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}},{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}}],"created_at":"2015-10-21T20:57:26+00:00","updated_at":"2015-10-21T20:57:26+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:27 GMT',
  'x-request-id': '2902034066151849131',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '396' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/7860c59a-72e1-47a8-9e6d-086bb936a38b/remove_conversion')
  .query({"id":"7860c59a-72e1-47a8-9e6d-086bb936a38b","conversion_id":"1ef15333-a4d1-4ae9-8782-73c40d2bb495"})
  .reply(200, {"id":"7860c59a-72e1-47a8-9e6d-086bb936a38b","status":"open","short_reference":"20151021-NNQFQK","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:26+00:00","updated_at":"2015-10-21T20:57:26+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:27 GMT',
  'x-request-id': '2902034071369569452',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"e8c35042-a414-40a9-82fb-76f0cc053e79","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-FVLCTP","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:57:28+00:00","updated_at":"2015-10-21T20:57:28+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:29 GMT',
  'x-request-id': '2902034076620824749',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"3cacc390-c410-44dc-9d87-970a5af78b09","status":"open","short_reference":"20151021-QCKCLV","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:29+00:00","updated_at":"2015-10-21T20:57:29+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:29 GMT',
  'x-request-id': '2902034085957376176',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/3cacc390-c410-44dc-9d87-970a5af78b09/add_conversion')
  .query({"id":"3cacc390-c410-44dc-9d87-970a5af78b09","conversion_id":"e8c35042-a414-40a9-82fb-76f0cc053e79"})
  .reply(200, {"id":"3cacc390-c410-44dc-9d87-970a5af78b09","status":"open","short_reference":"20151021-QCKCLV","type":"net","conversion_ids":["e8c35042-a414-40a9-82fb-76f0cc053e79"],"entries":[{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}},{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}}],"created_at":"2015-10-21T20:57:29+00:00","updated_at":"2015-10-21T20:57:29+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:30 GMT',
  'x-request-id': '2902034088750753969',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '396' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/3cacc390-c410-44dc-9d87-970a5af78b09/release')
  .query({"id":"3cacc390-c410-44dc-9d87-970a5af78b09"})
  .reply(200, {"id":"3cacc390-c410-44dc-9d87-970a5af78b09","status":"released","short_reference":"20151021-QCKCLV","type":"net","conversion_ids":["e8c35042-a414-40a9-82fb-76f0cc053e79"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}},{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}}],"created_at":"2015-10-21T20:57:29+00:00","updated_at":"2015-10-21T20:57:30+00:00","released_at":"2015-10-21T20:57:30+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:30 GMT',
  'x-request-id': '2902034093456771250',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '425' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/conversions/create')
  .query({"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"854c51a2-bdd4-42a8-b2a3-24de8d49cccb","settlement_date":"2015-10-23T14:00:00+00:00","conversion_date":"2015-10-23T00:00:00+00:00","short_reference":"20151021-ZYRNBT","creator_contact_id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7353.17","fixed_side":"buy","mid_market_rate":"0.7354","core_rate":"0.7353","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7353","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-10-21T20:57:31+00:00","updated_at":"2015-10-21T20:57:31+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:31 GMT',
  'x-request-id': '2902034099093926069',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/create')
  .query({"type":"net"})
  .reply(200, {"id":"3ef578ee-5795-4ef7-9505-4e312108746f","status":"open","short_reference":"20151021-ZXZDDQ","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-10-21T20:57:31+00:00","updated_at":"2015-10-21T20:57:31+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:31 GMT',
  'x-request-id': '2902034106316519606',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/3ef578ee-5795-4ef7-9505-4e312108746f/add_conversion')
  .query({"id":"3ef578ee-5795-4ef7-9505-4e312108746f","conversion_id":"854c51a2-bdd4-42a8-b2a3-24de8d49cccb"})
  .reply(200, {"id":"3ef578ee-5795-4ef7-9505-4e312108746f","status":"open","short_reference":"20151021-ZXZDDQ","type":"net","conversion_ids":["854c51a2-bdd4-42a8-b2a3-24de8d49cccb"],"entries":[{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}},{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}}],"created_at":"2015-10-21T20:57:31+00:00","updated_at":"2015-10-21T20:57:31+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:32 GMT',
  'x-request-id': '2902034109705516215',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '396' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/3ef578ee-5795-4ef7-9505-4e312108746f/release')
  .query({"id":"3ef578ee-5795-4ef7-9505-4e312108746f"})
  .reply(200, {"id":"3ef578ee-5795-4ef7-9505-4e312108746f","status":"released","short_reference":"20151021-ZXZDDQ","type":"net","conversion_ids":["854c51a2-bdd4-42a8-b2a3-24de8d49cccb"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}},{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}}],"created_at":"2015-10-21T20:57:31+00:00","updated_at":"2015-10-21T20:57:33+00:00","released_at":"2015-10-21T20:57:34+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:34 GMT',
  'x-request-id': '2902034123144064184',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '425' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/settlements/3ef578ee-5795-4ef7-9505-4e312108746f/unrelease')
  .query({"id":"3ef578ee-5795-4ef7-9505-4e312108746f"})
  .reply(200, {"id":"3ef578ee-5795-4ef7-9505-4e312108746f","status":"open","short_reference":"20151021-ZXZDDQ","type":"net","conversion_ids":["854c51a2-bdd4-42a8-b2a3-24de8d49cccb"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"7353.17"}},{"EUR":{"receive_amount":"10000.23","send_amount":"0.00"}}],"created_at":"2015-10-21T20:57:31+00:00","updated_at":"2015-10-21T20:57:34+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:35 GMT',
  'x-request-id': '2902034130551200955',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '396' });

nock('https://devapi.thecurrencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Wed, 21 Oct 2015 20:57:35 GMT',
  'x-request-id': '2902034135651482813',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
