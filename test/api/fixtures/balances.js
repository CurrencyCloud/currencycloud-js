var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"05c8d5ae9ac6315f7ed9bf09c6c355bc"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/balances/GBP')
  .reply(200, {"id":"07ee18e7-430e-4743-a42e-676061718a41","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency":"GBP","amount":"0.00","created_at":"2017-10-30T13:51:11+00:00","updated_at":"2017-10-30T13:51:11+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/balances/find')
  .reply(200, {"balances":[{"id":"70167fc4-c099-4fa2-bc98-495c6917d2ff","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency":"EUR","amount":"0.00","created_at":"2017-10-30T13:51:11+00:00","updated_at":"2017-10-30T13:51:11+00:00"},{"id":"07ee18e7-430e-4743-a42e-676061718a41","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency":"GBP","amount":"0.00","created_at":"2017-10-30T13:51:11+00:00","updated_at":"2017-10-30T13:51:11+00:00"}],"pagination":{"total_entries":2,"total_pages":1,"current_page":1,"per_page":25,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"asc"}});

nock('https://devapi.currencycloud.com:443')
    .post('/v2/balances/top_up_margin', {
        "currency": "GBP",
        "amount": "450"
    })
    .reply(200, {
        "account_id": "6c046c51-2387-4004-8e87-4bf97102e36d",
        "currency": "GBP",
        "transferred_amount": "450.0",
        "transfer_completed_at": "2007-11-19T08:37:48-06:00"
    });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
