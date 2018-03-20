var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id": "development@currencycloud.com",
    "api_key": "deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
  })
  .reply(200, {"auth_token": "29eb8f703856439f96c7648247638be3"});

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/beneficiary_required_details')
  .query({"currency": "GBP", "bank_account_country": "GB", "beneficiary_country": "GB"})
  .reply(200, {
    "details": [{
      "payment_type": "priority",
      "beneficiary_entity_type": "individual",
      "beneficiary_address": "^.{1,255}",
      "beneficiary_city": "^.{1,255}",
      "beneficiary_country": "^[A-z]{2}$",
      "beneficiary_first_name": "^.{1,255}",
      "beneficiary_last_name": "^.{1,255}",
      "acct_number": "^[0-9A-Z]{1,50}$",
      "sort_code": "^\\d{6}$"
    }, {
      "payment_type": "priority",
      "beneficiary_entity_type": "company",
      "beneficiary_address": "^.{1,255}",
      "beneficiary_city": "^.{1,255}",
      "beneficiary_country": "^[A-z]{2}$",
      "beneficiary_company_name": "^.{1,255}",
      "acct_number": "^[0-9A-Z]{1,50}$",
      "sort_code": "^\\d{6}$"
    }, {
      "payment_type": "regular",
      "acct_number": "^[0-9A-Z]{1,50}$",
      "sort_code": "^\\d{6}$",
      "beneficiary_entity_type": "individual"
    }, {
      "payment_type": "regular",
      "acct_number": "^[0-9A-Z]{1,50}$",
      "sort_code": "^\\d{6}$",
      "beneficiary_entity_type": "company"
    }]
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/conversion_dates')
  .query({"conversion_pair": "USDGBP"})
  .reply(200, {
    "invalid_conversion_dates": {
      "2018-02-19": "Public Holiday",
      "2018-02-24": "No trading on Saturday",
      "2018-02-25": "No trading on Sunday",
      "2018-03-03": "No trading on Saturday",
      "2018-03-04": "No trading on Sunday",
      "2018-03-10": "No trading on Saturday",
      "2018-03-11": "No trading on Sunday",
      "2018-03-17": "No trading on Saturday",
      "2018-03-18": "No trading on Sunday",
      "2018-03-24": "No trading on Saturday",
      "2018-03-25": "No trading on Sunday",
      "2018-03-30": "Public Holiday",
      "2018-03-31": "No trading on Saturday",
      "2018-04-01": "No trading on Sunday",
      "2018-04-02": "Public Holiday",
      "2018-04-07": "No trading on Saturday",
      "2018-04-08": "No trading on Sunday",
      "2018-04-14": "No trading on Saturday",
      "2018-04-15": "No trading on Sunday",
      "2018-04-21": "No trading on Saturday",
      "2018-04-22": "No trading on Sunday",
      "2018-04-28": "No trading on Saturday",
      "2018-04-29": "No trading on Sunday",
      "2018-05-05": "No trading on Saturday",
      "2018-05-06": "No trading on Sunday",
      "2018-05-07": "Public Holiday",
      "2018-05-12": "No trading on Saturday",
      "2018-05-13": "No trading on Sunday",
      "2018-05-19": "No trading on Saturday",
      "2018-05-20": "No trading on Sunday",
      "2018-05-26": "No trading on Saturday",
      "2018-05-27": "No trading on Sunday",
      "2018-05-28": "Public Holiday",
      "2018-06-02": "No trading on Saturday",
      "2018-06-03": "No trading on Sunday",
      "2018-06-09": "No trading on Saturday",
      "2018-06-10": "No trading on Sunday",
      "2018-06-16": "No trading on Saturday",
      "2018-06-17": "No trading on Sunday",
      "2018-06-23": "No trading on Saturday",
      "2018-06-24": "No trading on Sunday",
      "2018-06-30": "No trading on Saturday",
      "2018-07-01": "No trading on Sunday",
      "2018-07-04": "Public Holiday",
      "2018-07-07": "No trading on Saturday",
      "2018-07-08": "No trading on Sunday",
      "2018-07-14": "No trading on Saturday",
      "2018-07-15": "No trading on Sunday",
      "2018-07-21": "No trading on Saturday",
      "2018-07-22": "No trading on Sunday",
      "2018-07-28": "No trading on Saturday",
      "2018-07-29": "No trading on Sunday",
      "2018-08-04": "No trading on Saturday",
      "2018-08-05": "No trading on Sunday",
      "2018-08-11": "No trading on Saturday",
      "2018-08-12": "No trading on Sunday",
      "2018-08-18": "No trading on Saturday",
      "2018-08-19": "No trading on Sunday",
      "2018-08-25": "No trading on Saturday",
      "2018-08-26": "No trading on Sunday",
      "2018-08-27": "Public Holiday",
      "2018-09-01": "No trading on Saturday",
      "2018-09-02": "No trading on Sunday",
      "2018-09-03": "Public Holiday",
      "2018-09-08": "No trading on Saturday",
      "2018-09-09": "No trading on Sunday",
      "2018-09-15": "No trading on Saturday",
      "2018-09-16": "No trading on Sunday",
      "2018-09-22": "No trading on Saturday",
      "2018-09-23": "No trading on Sunday",
      "2018-09-29": "No trading on Saturday",
      "2018-09-30": "No trading on Sunday",
      "2018-10-06": "No trading on Saturday",
      "2018-10-07": "No trading on Sunday",
      "2018-10-08": "Public Holiday",
      "2018-10-13": "No trading on Saturday",
      "2018-10-14": "No trading on Sunday",
      "2018-10-20": "No trading on Saturday",
      "2018-10-21": "No trading on Sunday",
      "2018-10-27": "No trading on Saturday",
      "2018-10-28": "No trading on Sunday",
      "2018-11-03": "No trading on Saturday",
      "2018-11-04": "No trading on Sunday",
      "2018-11-10": "No trading on Saturday",
      "2018-11-11": "No trading on Sunday",
      "2018-11-12": "Public Holiday",
      "2018-11-17": "No trading on Saturday",
      "2018-11-18": "No trading on Sunday",
      "2018-11-22": "Public Holiday",
      "2018-11-24": "No trading on Saturday",
      "2018-11-25": "No trading on Sunday",
      "2018-12-01": "No trading on Saturday",
      "2018-12-02": "No trading on Sunday",
      "2018-12-08": "No trading on Saturday",
      "2018-12-09": "No trading on Sunday",
      "2018-12-15": "No trading on Saturday",
      "2018-12-16": "No trading on Sunday",
      "2018-12-22": "No trading on Saturday",
      "2018-12-23": "No trading on Sunday",
      "2018-12-29": "No trading on Saturday",
      "2018-12-30": "No trading on Sunday",
      "2019-01-05": "No trading on Saturday",
      "2019-01-06": "No trading on Sunday",
      "2019-01-12": "No trading on Saturday",
      "2019-01-13": "No trading on Sunday",
      "2019-01-19": "No trading on Saturday",
      "2019-01-20": "No trading on Sunday",
      "2019-01-26": "No trading on Saturday",
      "2019-01-27": "No trading on Sunday",
      "2019-02-02": "No trading on Saturday",
      "2019-02-03": "No trading on Sunday",
      "2019-02-09": "No trading on Saturday",
      "2019-02-10": "No trading on Sunday",
      "2019-02-16": "No trading on Saturday",
      "2019-02-17": "No trading on Sunday",
      "2019-02-23": "No trading on Saturday",
      "2019-02-24": "No trading on Sunday",
      "2019-03-02": "No trading on Saturday",
      "2019-03-03": "No trading on Sunday",
      "2019-03-09": "No trading on Saturday",
      "2019-03-10": "No trading on Sunday",
      "2019-03-16": "No trading on Saturday",
      "2019-03-17": "No trading on Sunday",
      "2019-03-23": "No trading on Saturday",
      "2019-03-24": "No trading on Sunday",
      "2019-03-30": "No trading on Saturday",
      "2019-03-31": "No trading on Sunday",
      "2019-04-06": "No trading on Saturday",
      "2019-04-07": "No trading on Sunday",
      "2019-04-13": "No trading on Saturday",
      "2019-04-14": "No trading on Sunday",
      "2019-04-20": "No trading on Saturday",
      "2019-04-21": "No trading on Sunday",
      "2019-04-27": "No trading on Saturday",
      "2019-04-28": "No trading on Sunday",
      "2019-05-04": "No trading on Saturday",
      "2019-05-05": "No trading on Sunday",
      "2019-05-11": "No trading on Saturday",
      "2019-05-12": "No trading on Sunday",
      "2019-05-18": "No trading on Saturday",
      "2019-05-19": "No trading on Sunday",
      "2019-05-25": "No trading on Saturday",
      "2019-05-26": "No trading on Sunday",
      "2019-06-01": "No trading on Saturday",
      "2019-06-02": "No trading on Sunday",
      "2019-06-08": "No trading on Saturday",
      "2019-06-09": "No trading on Sunday",
      "2019-06-15": "No trading on Saturday",
      "2019-06-16": "No trading on Sunday",
      "2019-06-22": "No trading on Saturday",
      "2019-06-23": "No trading on Sunday",
      "2019-06-29": "No trading on Saturday",
      "2019-06-30": "No trading on Sunday",
      "2019-07-06": "No trading on Saturday",
      "2019-07-07": "No trading on Sunday",
      "2019-07-13": "No trading on Saturday",
      "2019-07-14": "No trading on Sunday",
      "2019-07-20": "No trading on Saturday",
      "2019-07-21": "No trading on Sunday",
      "2019-07-27": "No trading on Saturday",
      "2019-07-28": "No trading on Sunday",
      "2019-08-03": "No trading on Saturday",
      "2019-08-04": "No trading on Sunday",
      "2019-08-10": "No trading on Saturday",
      "2019-08-11": "No trading on Sunday",
      "2019-08-17": "No trading on Saturday",
      "2019-08-18": "No trading on Sunday",
      "2019-08-24": "No trading on Saturday",
      "2019-08-25": "No trading on Sunday",
      "2019-08-31": "No trading on Saturday",
      "2019-09-01": "No trading on Sunday",
      "2019-09-07": "No trading on Saturday",
      "2019-09-08": "No trading on Sunday",
      "2019-09-14": "No trading on Saturday",
      "2019-09-15": "No trading on Sunday",
      "2019-09-21": "No trading on Saturday",
      "2019-09-22": "No trading on Sunday",
      "2019-09-28": "No trading on Saturday",
      "2019-09-29": "No trading on Sunday",
      "2019-10-05": "No trading on Saturday",
      "2019-10-06": "No trading on Sunday",
      "2019-10-12": "No trading on Saturday",
      "2019-10-13": "No trading on Sunday",
      "2019-10-19": "No trading on Saturday",
      "2019-10-20": "No trading on Sunday",
      "2019-10-26": "No trading on Saturday",
      "2019-10-27": "No trading on Sunday",
      "2019-11-02": "No trading on Saturday",
      "2019-11-03": "No trading on Sunday",
      "2019-11-09": "No trading on Saturday",
      "2019-11-10": "No trading on Sunday",
      "2019-11-16": "No trading on Saturday",
      "2019-11-17": "No trading on Sunday",
      "2019-11-23": "No trading on Saturday",
      "2019-11-24": "No trading on Sunday",
      "2019-11-30": "No trading on Saturday",
      "2019-12-01": "No trading on Sunday",
      "2019-12-07": "No trading on Saturday",
      "2019-12-08": "No trading on Sunday",
      "2019-12-14": "No trading on Saturday",
      "2019-12-15": "No trading on Sunday",
      "2019-12-21": "No trading on Saturday",
      "2019-12-22": "No trading on Sunday",
      "2019-12-28": "No trading on Saturday",
      "2019-12-29": "No trading on Sunday",
      "2020-01-04": "No trading on Saturday",
      "2020-01-05": "No trading on Sunday",
      "2020-01-11": "No trading on Saturday",
      "2020-01-12": "No trading on Sunday",
      "2020-01-18": "No trading on Saturday",
      "2020-01-19": "No trading on Sunday",
      "2020-01-25": "No trading on Saturday",
      "2020-01-26": "No trading on Sunday",
      "2020-02-01": "No trading on Saturday",
      "2020-02-02": "No trading on Sunday",
      "2020-02-08": "No trading on Saturday",
      "2020-02-09": "No trading on Sunday",
      "2020-02-15": "No trading on Saturday",
      "2020-02-16": "No trading on Sunday"
    }, "first_conversion_date": "2018-02-20", "default_conversion_date": "2018-02-21"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/currencies')
  .reply(200, {
    "currencies": [{
      "code": "AED",
      "decimal_places": 2,
      "name": "United Arab Emirates Dirham"
    }, {"code": "AUD", "decimal_places": 2, "name": "Australian Dollar"}, {
      "code": "BGN",
      "decimal_places": 2,
      "name": "Bulgarian Lev"
    }, {"code": "CAD", "decimal_places": 2, "name": "Canadian Dollar"}, {
      "code": "CHF",
      "decimal_places": 2,
      "name": "Swiss Franc"
    }, {"code": "CZK", "decimal_places": 2, "name": "Czech Koruna"}, {
      "code": "DKK",
      "decimal_places": 2,
      "name": "Danish Krone"
    }, {"code": "EUR", "decimal_places": 2, "name": "Euro"}, {
      "code": "GBP",
      "decimal_places": 2,
      "name": "Pound Sterling"
    }, {"code": "HKD", "decimal_places": 2, "name": "Hong Kong Dollar"}, {
      "code": "HUF",
      "decimal_places": 2,
      "name": "Hungarian Forint"
    }, {"code": "ILS", "decimal_places": 2, "name": "Israeli New Sheqel"}, {
      "code": "JPY",
      "decimal_places": 0,
      "name": "Japanese Yen"
    }, {"code": "MXN", "decimal_places": 2, "name": "Mexican Peso"}, {
      "code": "NOK",
      "decimal_places": 2,
      "name": "Norwegian Krone"
    }, {"code": "NZD", "decimal_places": 2, "name": "New Zealand Dollar"}, {
      "code": "PLN",
      "decimal_places": 2,
      "name": "Polish Zloty"
    }, {"code": "QAR", "decimal_places": 2, "name": "Qatari Rial"}, {
      "code": "RON",
      "decimal_places": 2,
      "name": "Romanian New Leu"
    }, {"code": "SAR", "decimal_places": 2, "name": "Saudi Riyal"}, {
      "code": "SEK",
      "decimal_places": 2,
      "name": "Swedish Krona"
    }, {"code": "SGD", "decimal_places": 2, "name": "Singapore Dollar"}, {
      "code": "THB",
      "decimal_places": 2,
      "name": "Thai Baht"
    }, {"code": "TRY", "decimal_places": 2, "name": "Turkish Lira"}, {
      "code": "USD",
      "decimal_places": 2,
      "name": "United States Dollar"
    }, {"code": "ZAR", "decimal_places": 2, "name": "South African Rand"}]
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/payment_dates')
  .query({"currency": "USD"})
  .reply(200, {
    "invalid_payment_dates": {
      "2018-02-19": "",
      "2018-02-24": "No trading on Saturday",
      "2018-02-25": "No trading on Sunday",
      "2018-03-03": "No trading on Saturday",
      "2018-03-04": "No trading on Sunday",
      "2018-03-10": "No trading on Saturday",
      "2018-03-11": "No trading on Sunday",
      "2018-03-17": "No trading on Saturday",
      "2018-03-18": "No trading on Sunday",
      "2018-03-24": "No trading on Saturday",
      "2018-03-25": "No trading on Sunday",
      "2018-03-31": "No trading on Saturday",
      "2018-04-01": "No trading on Sunday",
      "2018-04-07": "No trading on Saturday",
      "2018-04-08": "No trading on Sunday",
      "2018-04-14": "No trading on Saturday",
      "2018-04-15": "No trading on Sunday"
    }, "first_payment_date": "2018-02-20"
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/settlement_accounts')
  .query({"currency": "EUR"})
  .reply(200, {
    "settlement_accounts": [{
      "bank_account_holder_name": "The Currency Cloud EUR - Client Seg A/C\t",
      "beneficiary_address": "",
      "beneficiary_country": "",
      "bank_name": "Barclays Bank plc",
      "bank_address": [],
      "bank_country": "",
      "currency": "EUR",
      "bic_swift": "BARCGB22",
      "iban": "GB05 BARC 2006 0574 7412 77",
      "account_number": "74741277",
      "routing_code_type_1": "sort_code",
      "routing_code_value_1": "200605",
      "routing_code_type_2": "",
      "routing_code_value_2": ""
    }]
  });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/reference/payer_required_details')
  .query({"payer_country": "GB"})
  .reply(200, {
    "details": [{
      "payer_entity_type": "company",
      "payment_type": "priority",
      "required_fields": [{"name": "payer_country", "validation_rule": "^[A-z]{2}$"}, {
        "name": "payer_city",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_address", "validation_rule": "^.{1,255}"}, {
        "name": "payer_company_name",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_identification_value", "validation_rule": "^.{1,255}"}],
      "payer_identification_type": "incorporation_number"
    }, {
      "payer_entity_type": "individual",
      "payment_type": "priority",
      "required_fields": [{"name": "payer_country", "validation_rule": "^[A-z]{2}$"}, {
        "name": "payer_city",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_address", "validation_rule": "^.{1,255}"}, {
        "name": "payer_first_name",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_last_name", "validation_rule": "^.{1,255}"}, {
        "name": "payer_date_of_birth",
        "validation_rule": "/A([+-]?d{4}(?!d{2}\b))((-?)((0[1-9]|1[0-2])(\u0003([12]d|0[1-9]|3[01]))?|W([0-4]d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]d|[12]d{2}|3([0-5]d|6[1-6])))([T ]((([01]d|2[0-3])((:?)[0-5]d)?|24:?00)([.,]d+(?!:))?)?(\u000f[0-5]d([.,]d+)?)?([zZ]|([+-])([01]d|2[0-3]):?([0-5]d)?)?)?)?Z/"
      }]
    }, {
      "payer_entity_type": "company",
      "payment_type": "regular",
      "required_fields": [{"name": "payer_country", "validation_rule": "^[A-z]{2}$"}, {
        "name": "payer_city",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_address", "validation_rule": "^.{1,255}"}, {
        "name": "payer_company_name",
        "validation_rule": "^.{1,255}"
      }]
    }, {
      "payer_entity_type": "individual",
      "payment_type": "regular",
      "required_fields": [{"name": "payer_country", "validation_rule": "^[A-z]{2}$"}, {
        "name": "payer_city",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_address", "validation_rule": "^.{1,255}"}, {
        "name": "payer_first_name",
        "validation_rule": "^.{1,255}"
      }, {"name": "payer_last_name", "validation_rule": "^.{1,255}"}, {
        "name": "payer_date_of_birth",
        "validation_rule": "/A([+-]?d{4}(?!d{2}\b))((-?)((0[1-9]|1[0-2])(\u0003([12]d|0[1-9]|3[01]))?|W([0-4]d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]d|[12]d{2}|3([0-5]d|6[1-6])))([T ]((([01]d|2[0-3])((:?)[0-5]d)?|24:?00)([.,]d+(?!:))?)?(\u000f[0-5]d([.,]d+)?)?([zZ]|([+-])([01]d|2[0-3]):?([0-5]d)?)?)?)?Z/"
      }]
    }]
  });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {});
