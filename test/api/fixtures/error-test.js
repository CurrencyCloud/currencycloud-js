var nock = require('nock');

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .post('/v2/authenticate/api', "login_id=development%40currencycloud.com&api_key=deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef")
    .reply(200, {"auth_token":"65360fb297f8dea3a68d83499b9545a4"});

nock('https://devapi.currencycloud.com:443')
    .post('/v2/payments/abc/delete')
    .reply(400, {
        "error_code": "payment_delete_failed",
        "error_messages": {
            "id": [
                {
                    "code": "id_is_not_valid_uuid",
                    "message": "id should be in UUID format",
                    "params": {}
                }
            ],
            "on_behalf_of": [
                {
                    "code": "on_behalf_of_is_not_valid_uuid",
                    "message": "on_behalf_of should be in UUID format",
                    "params": {}
                }
            ]
        }
    },[ 'Date','Thu, 18 Jun 2020 08:46:55 GMT','X-Request-Id', 'df217539-1ccc-467c-ba3c-675fef035885']);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .get('/v2/reference/bank_details')
    .query({"identifier_type":"iban","identifier_value":"123"})
    .reply(400, {
        "error_code": "invalid_iban",
        "error_messages": {
            "base": {
                "code": "invalid_iban",
                "message": "IBAN is invalid.",
                "params": {}
            }
        }
    }, [ 'Date','Thu, 18 Jun 2020 10:10:18 GMT','X-Request-Id', '887d4999-d021-4333-8593-34a3f27587dc']);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});
