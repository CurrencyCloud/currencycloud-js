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
.post('/v2/reference/bank_details/find', {"identifier_type":"iban","identifier_value":"123"})
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

nock('https://devapi.currencycloud.com:443')
    .post('/v2/payments/create', {
        "on_behalf_of": "4224b460-f6c3-4d4d-842f-67c5fbe5461b",
        "beneficiary_id": "0ebad221-e846-420a-8abc-9a4136b7a500",
        "currency": "EUR",
        "amount": "1.00",
        "reason": "Test Good Error Response",
        "payment_type": "priority",
        "reference": "3a4bca96-8f59-4eef-bbfc-6592744609c3"
    })
    .reply(500, {
        "error_code":"missing_translation",
        "error_messages":
            {
                "base":[
                    {
                        "code":"missing_translation",
                        "message":"Sorry there is an internal error",
                        "params":{}
                    }
                ]
            }
        }, [ 'Date','Thu, 24 Jun 2022 14:15:11 GMT','X-Request-Id', '95fbb651-42d4-429f-a74f-6e75ef06864f']);


nock('https://devapi.currencycloud.com:443')
    .post('/v2/payments/create', {
        "on_behalf_of": "4224b460-f6c3-4d4d-842f-67c5fbe5461b",
        "beneficiary_id": "0ebad221-e846-420a-8abc-9a4136b7a500",
        "currency": "EUR",
        "amount": "1.00",
        "reason": "Test Bad Error Response",
        "payment_type": "priority",
        "reference": "53db7778-75a9-447d-baf0-d09deb9a4ba6"
    })
    .reply(500, {
        "error_code":"internal_server_error",
         "error_messages":{
            "base":{
                "code":"internal_server_error",
                "message":"Internal Server Error"
            }
        }
    }, [ 'Date','Thu, 24 Jun 2022 14:23:44 GMT','X-Request-Id', '4efab12e-b166-472e-9c9d-852943d4124c']);


nock('https://devapi.currencycloud.com:443')
    .post('/v2/payments/create', {
        "on_behalf_of": "4224b460-f6c3-4d4d-842f-67c5fbe5461b",
        "beneficiary_id": "0ebad221-e846-420a-8abc-9a4136b7a500",
        "currency": "EUR",
        "amount": "1.00",
        "reason": "Test Really Bad Error Response",
        "payment_type": "priority",
        "reference": "99d5d977-0c6a-4d31-a328-e9e51384db45"
    })
    .reply(500, '{"error_code":"internal_server_error","error_messages":{"base":{"code":"internal_server_error","message":"Internal Server Err', [ 'Date','Thu, 24 Jun 2022 14:31:01 GMT','X-Request-Id', '9b722600-f511-484e-98f0-07a6d665e98f']);

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams":true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});
