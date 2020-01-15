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
    .get('/v2/funding_accounts/find')
    .query({"currency":"GBP","per_page":"5"})
    .reply(200, {"funding_accounts":[{"id":"b7981972-8e29-485b-8a4a-9643fc6ae3sa","account_id":"8d98bdc8-e8e3-47dc-bd08-3dd0f4f7ea7b","account_number":"012345678","account_number_type":"account_number","account_holder_name":"Jon Doe","bank_name":"Starling","bank_address":"3rd floor, 2 Finsbury Avenue, London, EC2M 2PP, GB","bank_country":"UK","currency":"GBP","payment_type":"regular","regular_routing_code":"010203","regular_routing_code_type":"sort_code","priority_routing_code":"","priority_routing_code_type":"","created_at":"2018-05-14T14:18:30+00:00","updated_at":"2018-05-14T14:19:30+00:00"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":5,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"desc"}}, [ 'Date',
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

