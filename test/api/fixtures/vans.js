var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
    .post('/v2/authenticate/api', {
        "login_id": "development@currencycloud.com",
        "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
    })
    .reply(200, {"auth_token": "3e7c564909890f97bb0e5548325d73ea"});

nock('https://devapi.currencycloud.com:443')
    .get('/v2/virtual_accounts')
    .reply(200, {
        "virtual_accounts": [{
            "id": "00d272ee-fae5-4f97-b425-993a2d6e3a46",
            "account_id": "2090939e-b2f7-3f2b-1363-4d235b3f58af",
            "virtual_account_number": "8303723297",
            "account_holder_name": "Account-ZXOANNAMKPRQ",
            "bank_institution_name": "Community Federal Savings Bank",
            "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
            "bank_institution_country": "United States",
            "routing_code": "026073150",
            "created_at": "2014-01-12T00:00:00+00:00",
            "updated_at": "2014-01-12T00:00:00+00:00"
        }],
        "pagination": {
            "total_entries": 1,
            "total_pages": 1,
            "current_page": 1,
            "per_page": 25,
            "previous_page": -1,
            "next_page": 2,
            "order": "created_at",
            "order_asc_desc": "asc"
        }
    });

nock('https://devapi.currencycloud.com:443')
    .get('/v2/virtual_accounts/find')
    .reply(200, {
        "virtual_accounts": [
            {
                "id": "041d1d00-c3d1-480f-a3f5-e55270c4a8fb",
                "account_id": "c954bde3-4847-4cb0-bc23-011b8d2e1430",
                "virtual_account_number": "0335076678",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-06T15:07:45+00:00",
                "updated_at": "2018-11-06T15:07:45+00:00"
            },
            {
                "id": "d4865200-bfc5-46f5-b09f-f4a6d0e8d387",
                "account_id": "c8353b19-9531-4b6b-9b0e-1482d5993a9b",
                "virtual_account_number": "0335468247",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-06T15:17:55+00:00",
                "updated_at": "2018-11-06T15:17:55+00:00"
            },
            {
                "id": "f70bbbd5-da7f-4bfb-a2d1-37ac78394377",
                "account_id": "a963f2c7-28b1-4470-8239-ef416538e10f",
                "virtual_account_number": "0335392421",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-09T13:06:40+00:00",
                "updated_at": "2018-11-09T13:06:40+00:00"
            },
            {
                "id": "656beb14-ebe7-46b0-af10-6b0c8a7a9e39",
                "account_id": "3486643b-c643-44ef-aeab-74599c10a9ff",
                "virtual_account_number": "0339913024",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-09T13:12:26+00:00",
                "updated_at": "2018-11-09T13:12:26+00:00"
            },
            {
                "id": "d8d0321e-3ca2-40b6-95bb-aec6492edc3f",
                "account_id": "ace39055-57e5-47a5-bf3c-2715944cedee",
                "virtual_account_number": "0331015276",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-09T13:13:29+00:00",
                "updated_at": "2018-11-09T13:13:29+00:00"
            },
            {
                "id": "b0ac9594-968b-498a-a5d6-6af774060ee8",
                "account_id": "e385b40b-da9f-47a6-8618-1bf2b12b38e7",
                "virtual_account_number": "0337129483",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-09T14:11:13+00:00",
                "updated_at": "2018-11-09T14:11:13+00:00"
            },
            {
                "id": "55239f5f-3c69-45fe-a0ad-78429000113f",
                "account_id": "07907a4a-f687-49e6-a173-fde3f60de1aa",
                "virtual_account_number": "0337066352",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-13T11:35:56+00:00",
                "updated_at": "2018-11-13T11:35:56+00:00"
            },
            {
                "id": "5d3e85ea-8072-48ba-a39c-0b9492cd3a17",
                "account_id": "597af13c-7230-4682-a7ed-a1dfa6356366",
                "virtual_account_number": "0331325976",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-13T15:25:50+00:00",
                "updated_at": "2018-11-13T15:25:50+00:00"
            },
            {
                "id": "f32cfe31-5969-4133-8769-cf8f8aec7ef2",
                "account_id": "530e47c6-496e-473c-9528-ded3265f6980",
                "virtual_account_number": "0338379294",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-15T11:54:56+00:00",
                "updated_at": "2018-11-15T11:54:56+00:00"
            },
            {
                "id": "bcfcd6a1-7bb3-4d6a-a609-9cfef607c6c0",
                "account_id": "0f1636b3-39f6-4847-9fdc-8197b01707af",
                "virtual_account_number": "0332246101",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-15T14:05:24+00:00",
                "updated_at": "2018-11-15T14:05:24+00:00"
            },
            {
                "id": "0495aaaa-8b72-451c-b063-f4bd6e1508b6",
                "account_id": "4d367728-dea4-41f6-b90d-0fbe4f88d0cc",
                "virtual_account_number": "0339459852",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-15T14:05:55+00:00",
                "updated_at": "2018-11-15T14:05:55+00:00"
            },
            {
                "id": "ebb7c5e4-e676-4a92-8dcd-b09e5745cbf0",
                "account_id": "b57672b0-e01f-47e7-96ad-88ee62b6ed2d",
                "virtual_account_number": "0337985392",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-15T14:06:47+00:00",
                "updated_at": "2018-11-15T14:06:47+00:00"
            },
            {
                "id": "a3db1664-3ae0-4842-be07-4453402f04e9",
                "account_id": "e3c088f9-2174-449f-96f6-ade79f0817cf",
                "virtual_account_number": "0334099190",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-15T14:07:13+00:00",
                "updated_at": "2018-11-15T14:07:13+00:00"
            },
            {
                "id": "6b3130f5-643f-43d7-83a9-724cb8b64b84",
                "account_id": "61cff935-90c4-4826-9efe-1ff30bacdb1f",
                "virtual_account_number": "0334712780",
                "account_holder_name": "My Example Account",
                "bank_institution_name": "Community Federal Savings Bank",
                "bank_institution_address": "Seventh Avenue, New York, NY 10019, US",
                "bank_institution_country": "United States",
                "routing_code": "026073150",
                "created_at": "2018-11-15T14:07:50+00:00",
                "updated_at": "2018-11-15T14:07:50+00:00"
            }
        ],
        "pagination": {
            "total_entries": 14,
            "total_pages": 1,
            "current_page": 1,
            "per_page": 25,
            "previous_page": -1,
            "next_page": -1,
            "order": "created_at",
            "order_asc_desc": "asc"
        }
    });

nock('https://devapi.currencycloud.com:443', {"encodedQueryParams": true})
    .post('/v2/authenticate/close_session')
    .reply(200, {});