var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"development@currencycloud.com","api_key":"deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token":"48ab0f6892356c4ed57277418fcc4d43"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2017-10-13T11:47:30+00:00","updated_at":"2017-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/contacts/create', {"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.1","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.1","id":"601cb2ed-52a2-48cf-a3f5-912bc64d8050","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2017-10-27T18:34:42+00:00","updated_at":"2017-10-27T18:34:42+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2017-10-13T11:47:30+00:00","updated_at":"2017-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/contacts/create', {"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.2","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.2","id":"1c9f4b28-656e-4087-a6c9-d8d92735892f","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2017-10-27T18:34:43+00:00","updated_at":"2017-10-27T18:34:43+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/contacts/1c9f4b28-656e-4087-a6c9-d8d92735892f')
  .reply(200, {"login_id":"john.2","id":"1c9f4b28-656e-4087-a6c9-d8d92735892f","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2017-10-27T18:34:43+00:00","updated_at":"2017-10-27T18:34:43+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/accounts/current')
  .reply(200, {"id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","brand":"currencycloud","your_reference":null,"status":"enabled","street":null,"city":null,"state_or_province":null,"country":null,"postal_code":null,"spread_table":"fxcg_rfx_default","legal_entity_type":null,"created_at":"2017-10-13T11:47:30+00:00","updated_at":"2017-10-14T15:29:22+00:00","identification_type":null,"identification_value":null,"short_reference":"151013-00006"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/contacts/create', {"first_name":"John","last_name":"Smith","email_address":"john.smith@company.com","phone_number":"06554 87845","your_reference":"ACME12345","mobile_phone_number":"07564 534 54","login_id":"john.3","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1980-01-22","account_id":"78618e58-da3c-447f-ad59-1796accfeff9"})
  .reply(200, {"login_id":"john.3","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124","first_name":"John","last_name":"Smith","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"john.smith@company.com","mobile_phone_number":"07564 534 54","phone_number":"06554 87845","your_reference":"ACME12345","date_of_birth":"1980-01-22","created_at":"2017-10-27T18:34:44+00:00","updated_at":"2017-10-27T18:34:44+00:00"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/contacts/7673d3c7-cbe2-4e2e-be33-85a0cd9bc124', {"first_name":"Emmet","last_name":"Brown","email_address":"dr.emmet.brown@company.com","phone_number":"073 789 1661","your_reference":"doc","mobile_phone_number":"073 789 1661","login_id":"emmet.4","status":"enabled","locale":"en-US","timezone":"Europe/London","date_of_birth":"1960-01-29"})
  .reply(200, {"login_id":"emmet.4","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124","first_name":"Emmet","last_name":"Brown","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"dr.emmet.brown@company.com","mobile_phone_number":"073 789 1661","phone_number":"073 789 1661","your_reference":"doc","date_of_birth":"1960-01-29","created_at":"2017-10-27T18:34:44+00:00","updated_at":"2017-10-27T18:34:44+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/contacts/7673d3c7-cbe2-4e2e-be33-85a0cd9bc124')
  .reply(200, {"login_id":"emmet.4","id":"7673d3c7-cbe2-4e2e-be33-85a0cd9bc124","first_name":"Emmet","last_name":"Brown","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en-US","timezone":"Europe/London","email_address":"dr.emmet.brown@company.com","mobile_phone_number":"073 789 1661","phone_number":"073 789 1661","your_reference":"doc","date_of_birth":"1960-01-29","created_at":"2017-10-27T18:34:44+00:00","updated_at":"2017-10-27T18:34:44+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/contacts/current')
  .reply(200, {"login_id":"development@currencycloud.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Development","last_name":"Currencycloud","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"development@currencycloud.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2017-10-13T11:47:30+00:00","updated_at":"2017-10-13T11:47:30+00:00"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/contacts/find')
  .post({"login_id":"development@currencycloud.com","order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"contacts":[{"login_id":"development@currencycloud.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Development","last_name":"Currencycloud","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"development@currencycloud.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2017-10-13T11:47:30+00:00","updated_at":"2017-10-13T11:47:30+00:00"}],"pagination":{"total_entries":1,"total_pages":1,"current_page":1,"per_page":5,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"desc"}});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/contacts/current')
  .reply(200, {"login_id":"development@currencycloud.com","id":"8f639ab2-2b85-4327-9eb1-01ee4f0c77bc","first_name":"Development","last_name":"Currencycloud","account_id":"78618e58-da3c-447f-ad59-1796accfeff9","account_name":"Currencycloud","status":"enabled","locale":"en","timezone":"Europe/London","email_address":"development@currencycloud.com","mobile_phone_number":null,"phone_number":null,"your_reference":null,"date_of_birth":null,"created_at":"2017-10-13T11:47:30+00:00","updated_at":"2017-10-13T11:47:30+00:00"});

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
