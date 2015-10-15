'use strict';

var client = require('../lib/client')();

var JSONschema = function(schema) {
  var schema = schema;

  this.validate = function(obj) {
    for(var prop in schema) {
      if(schema.hasOwnProperty(prop) && !obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };
};

module.exports = function () {
  return {
    setup: {
      login: function() {
        return client.authenticate({
          environment: 'demo', 
          loginId: 'test.it.now@mailinator.com', 
          apiKey: 'f6761d15ca6a205b40af2592fb0515af370f929b549ae845b9f3ed09befe269d',
          authUrl: '/v2/authenticate/api'
        });
      }
    },
    
    teardown: {
      logout: function() {
        return client.request({
          url: '/v2/authenticate/close_session',
          method: 'POST'
        });
      }
    },
    
    mock: {
      accounts: {
        account1: {
          accountName: 'Acme Ltd.',
          legalEntityType: 'company',
          yourReference: 'POS-UID-23523',
          status: 'enabled',
          street: '164 Bishops Gate',
          city: 'London',
          stateOrProvince: 'Ontario',
          postalCode: 'CR4 3RZ',
          country: 'GB',
          spreadTable: 'no_markup',
          identificationType: 'none'
        },
        account2: {
          accountName: 'Company PLC',
          legalEntityType: 'company',
          yourReference: '0012345564ABC',
          status: 'enabled',
          street: '1 London Road',
          city: 'London',
          stateOrProvince: '',
          postalCode: 'AB12 CD1',
          country: 'GB',
          spreadTable: 'flat_0.5_percent',
          identificationType: 'green_card',
          identificationValue: '19900303-8998'
        },
        schema: new JSONschema({
          id: 'UUID',
          legalEntityType: 'string',
          accountName: 'string',
          brand: 'string',
          yourReference: 'string',
          status: 'string',
          street: 'string',
          city: 'string',
          stateOrProvince: 'string',
          country: 'string',
          postalCode: 'string',
          spreadTable: 'string',
          createdAt: 'date',
          updatedAt: 'date',
          identificationType: 'string',
          identificationValue: 'string',
          shortReference: 'string'
        })
      },
      
      beneficiaries: {
        beneficiary1: {
          bankAccountHolderName: 'John Doe',
          bankCountry: 'DE',
          currency:	'EUR',
          name: 'Employee Funds',
          email: 'john.doe@acme.com',
          beneficiaryAddress: '23 Acacia Road',
          beneficiaryCountry: 'GB',
          accountNumber: '13071472',
          routingCodeType1: 'sort_code',
          routingCodeValue1: '200605',
          routingCodeType2: 'aba',
          routingCodeValue2: '789',  
          bicSwift: 'COBADEFF',
          iban: 'DE89370400440532013000',
          defaultBeneficiary: true,
          bankAddress: '4356 Wisteria Lane',
          bankName: 'HSBC Bank',
          bankAccountType: 'checking',
          beneficiaryEntityType: 'company',
          beneficiaryCompanyName: 'Some Company LLC',
          beneficiaryFirstName: 'John',
          beneficiaryLastName: 'Doe',
          beneficiaryCity: 'London',
          beneficiaryPostcode: 'W11 2BQ',
          beneficiaryStateOrProvince: 'TX',
          beneficiaryDateOfBirth: '1990-07-20',
          beneficiaryIdentificationType: 'none'
        },
        schema: new JSONschema({
          id: 'UUID',
          bankAccountHolderName: 'string',
          bankCountry: 'string',
          currency:	'string',
          name: 'string',
          email: 'string',
          paymentTypes: 'array',
          beneficiaryAddress: 'array',
          beneficiaryCountry: 'string',
          accountNumber: 'string',
          routingCodeType1: 'string',
          routingCodeValue1: 'string',
          routingCodeType2: 'string',
          routingCodeValue2: 'string',  
          bicSwift: 'string',
          iban: 'string',
          defaultBeneficiary: 'boolean',
          bankAddress: 'array',
          bankName: 'string',
          bankAccountType: 'string',
          beneficiaryEntityType: 'string',
          beneficiaryCompanyName: 'string',
          beneficiaryFirstName: 'string',
          beneficiaryLastName: 'string',
          beneficiaryCity: 'string',
          beneficiaryPostcode: 'string',
          beneficiaryStateOrProvince: 'string',
          beneficiaryDateOfBirth: 'date',
          beneficiaryIdentificationType: 'string',
          creatorContactId: 'UUID',
          createdAt: 'date',
          updatedAt: 'date'
        })
      },
      
      contacts: {
        contact1: {
          accountId: '87077161-91de-012f-e284-1e0030c7f352',
          firstName: 'John',
          lastName: 'Smith',
          emailAddress: 'john.smith@company.com',  
          phoneNumber: '06554 87845',
          yourReference: 'ACME12345',
          mobilePhoneNumber: '07564 534 54',
          loginId: 'john.smith',
          status: 'enabled',
          locale: 'en-US',
          timezone: 'Europe/London',
          dateOfBirth: '1980-01-22' 
        },
        schema: new JSONschema({
          loginId: 'string',
          id: 'UUID',
          yourReference: 'string',
          firstName: 'string',
          lastName: 'string',
          accountId: 'UUID',
          accountName: 'string',
          status: 'string',
          phoneNumber: 'string',
          mobilePhoneNumber: 'string',
          locale: 'string',
          timezone: 'string',
          emailAddress: 'string',
          dateOfBirth: 'date',
          createdAt: 'date',
          updatedAt: 'date'
        })               
      },
      
      conversions: {
        conversion1: {
          buyCurrency: 'EUR',
          sellCurrency: 'GBP',
          fixedSide: 'buy',
          amount: 10000.23,
          reason: 'Settling invoices',
          termAgreement: true
        },
        schema: new JSONschema({
          id: 'UUID',
          accountId: 'UUID',
          creatorContactId: 'UUID',
          settlementDate: 'date',
          conversionDate: 'date',
          buyCurrency: 'string',
          sellCurrency: 'string',
          fixedSide: 'string',
          shortReference: 'string',
          status: 'string',
          partnerStatus: 'string',
          currencyPair: 'string',
          partnerBuyAmount: 'number',
          partnerSellAmount: 'number',
          clientBuyAmount: 'number',
          clientSellAmount: 'number',
          midMarketRate: 'number',
          coreRate: 'number',
          partnerRate: 'number',
          clientRate: 'number',
          depositRequired: 'boolean',
          depositAmount: 'number',
          depositCurrency: 'string',
          depositStatus: 'string',
          depositRequiredAt: 'date',
          paymentIds: 'array',
          createdAt: 'date',
          updatedAt: 'date'  
        })
      },
      
      payers: {
        schema: new JSONschema({
          id: 'UUID',
          legalEntityType: 'string',
          companyName: 'string',
          firstName: 'string',
          lastName: 'string',
          address: 'array',
          city: 'string',
          stateOrProvince: 'string',
          country: 'string',
          identificationType: 'string',
          identificationValue: 'string',
          postcode: 'string',
          dateOfBirth: 'date',
          createdAt: 'date',
          updatedAt: 'date'
        })
      },
      
      payments: {
        payment1: {
          currency: 'EUR',
          amount: 10000,
          reason: 'Salary for March',
          reference: 'INVOICE 9876',
          paymentType: 'regular',
          payerEntityType: 'individual',
          payerCompanyName: 'Some Company LLC',
          payerFirstName: 'John',
          payerLastName: 'Doe',
          payerCity: 'London',
          payerAddress: '27 Colmore Row',
          payerPostcode: 'W11 2BQ',
          payerStateOrProvince: 'TX',
          payerCountry: 'GB',
          payerDateOfBirth: '1980-10-10',
          payerIdentificationType: 'none'
        },  
        schema: new JSONschema({
          id: 'UUID',
          shortReference: 'string',
          beneficiaryId: 'UUID',
          conversionId: 'UUID',
          amount: 'number',
          currency: 'string',
          status: 'string',
          paymentType: 'string',
          reference: 'string',
          reason: 'string',
          paymentDate: 'date',
          transferredAt: 'date',
          authorisationStepsRequired: 'number',
          creatorContactId: 'UUID',
          lastUpdaterContactId: 'UUID',
          failureReason: 'string',
          payerId: 'UUID',
          createdAt: 'date',
          updatedAt: 'date'  
        })  
      },
      
      settlements: {
        settlement1: {
          type: 'net'
        },
        schema: new JSONschema({
          id: 'UUID',
          shortReference: 'string',
          status: 'string',
          conversionIds: 'array',
          entries: 'object',
          createdAt: 'date',
          updatedAt: 'date',
          releasedAt: 'date'
        })
      }
    }
  };
};