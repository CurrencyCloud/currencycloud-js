'use strict';

var JSONschema = function (schema) {
    this.validate = function (obj) {
        for (var prop in schema) {
            if (schema.hasOwnProperty(prop) && !obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    };
};

module.exports = {
  authentication: {
    credentials: {
      environment: 'demo',
      loginId: 'development@currencycloud.com',
      apiKey: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
      authUrl: '/v2/authenticate/api'
    },
    paymentAuthorisationCredentials: {
      environment: 'demo',
      loginId: 'development+authorisation2@currencycloud.com',
      apiKey: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
      authUrl: '/v2/authenticate/api'
    }
  },

    accounts: {
        account1: function () {
            return {
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
            };
        },
        account2: function () {
            return {
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
                identificationType: 'none'
            };
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

    balances: {
        schema: new JSONschema({
            id: 'UUID',
            accountId: 'string',
            currency: 'string',
            amount: 'number',
            createdAt: 'date',
            updatedAt: 'date'
        })
    },

    beneficiaries: {
        beneficiary1: function () {
            return {
                bankAccountHolderName: 'John Doe',
                bankCountry: 'DE',
                currency: 'EUR',
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
            };
        },
        beneficiary2: function () {
            return {
                bankAccountHolderName: 'Martin McFly',
                bankCountry: 'US',
                currency: 'USD',
                name: 'Employee Funds',
                email: 'martin@mcfly.com',
                beneficiaryAddress: '9303 Roslyndale Ave.',
                beneficiaryCountry: 'US',
                accountNumber: '13071472',
                routingCodeType1: 'sort_code',
                routingCodeValue1: '200606',
                routingCodeType2: 'aba',
                routingCodeValue2: '780',
                bicSwift: 'COBADEFF',
                iban: 'US89370400440532013000',
                defaultBeneficiary: true,
                bankAddress: '1 Courthouse Square',
                bankName: 'Emmet Bank',
                bankAccountType: 'checking',
                beneficiaryEntityType: 'company',
                beneficiaryCompanyName: 'Back to the Future',
                beneficiaryFirstName: 'Martin',
                beneficiaryLastName: 'McFly',
                beneficiaryCity: 'Hill Valley',
                beneficiaryPostcode: '91331',
                beneficiaryStateOrProvince: 'CA',
                beneficiaryDateOfBirth: '1968-06-09',
                beneficiaryIdentificationType: 'none'
            };
        },
        schema: new JSONschema({
            id: 'UUID',
            bankAccountHolderName: 'string',
            bankCountry: 'string',
            currency: 'string',
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

    contacts: function () {
        var suffix = 0;

        return {
            contact1: function () {
                return {
                    firstName: 'John',
                    lastName: 'Smith',
                    emailAddress: 'john.smith@company.com',
                    phoneNumber: '06554 87845',
                    yourReference: 'ACME12345',
                    mobilePhoneNumber: '07564 534 54',
                    loginId: 'john.'.concat(++suffix),
                    status: 'enabled',
                    locale: 'en-US',
                    timezone: 'Europe/London',
                    dateOfBirth: '1980-01-22'
                };
            },
            contact2: function () {
                return {
                    firstName: 'Emmet',
                    lastName: 'Brown',
                    emailAddress: 'dr.emmet.brown@company.com',
                    phoneNumber: '073 789 1661',
                    yourReference: 'doc',
                    mobilePhoneNumber: '073 789 1661',
                    loginId: 'emmet.'.concat(++suffix),
                    status: 'enabled',
                    locale: 'en-US',
                    timezone: 'Europe/London',
                    dateOfBirth: '1960-01-29'
                };
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
        };
    },

    conversions: {
        conversion1: function () {
            return {
                buyCurrency: 'EUR',
                sellCurrency: 'GBP',
                fixedSide: 'buy',
                amount: 10000.23,
                reason: 'Settling invoices',
                termAgreement: true
            };
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

    ibans: {
        schema: new JSONschema({
            id: 'UUID',
            accountId: 'UUID',
            ibanCode: 'string',
            currency: 'string',
            accountHolderName: 'string',
            bankInstitutionName: 'string',
            bankInstitutionAddress: 'string',
            bankInstitutionCountry: 'string',
            bicSwift: 'string',
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
        payment1: function () {
            return {
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
            };
        },
        payment2: function () {
            return {
                currency: 'EUR',
                amount: 0.23,
                reason: 'Prepayment of salary for April',
                reference: 'INVOICE 122/1',
                paymentType: 'regular',
                payerEntityType: 'individual',
                payerCompanyName: 'Jens enskild firma',
                payerFirstName: 'Jennifer',
                payerLastName: 'Waylon',
                payerCity: 'Stockholm',
                payerAddress: '22 Garvargatan',
                payerPostcode: '12332',
                payerStateOrProvince: 'Stockholm',
                payerCountry: 'SE',
                payerDateOfBirth: '1981-12-10',
                payerIdentificationType: 'none'
            };
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

    rates: {
        schema: new JSONschema({
            settlementCutOffTime: 'date',
            currencyPair: 'string',
            clientBuyCurrency: 'string',
            clientSellCurrency: 'string',
            clientBuyAmount: 'number',
            clientSellAmount: 'number',
            fixedSide: 'string',
            midMarketRate: 'number',
            coreRate: 'number',
            partnerRate: 'number',
            clientRate: 'number',
            depositRequired: 'boolean',
            depositAmount: 'number',
            depositCurrency: 'string'
        })
    },

    settlements: {
        settlement1: function () {
            return {
                type: 'net'
            };
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
    },

    transactions: {
        schema: new JSONschema({
            id: 'UUID',
            balanceId: 'UUID',
            accountId: 'UUID',
            currency: 'string',
            amount: 'number',
            balanceAmount: 'number',
            type: 'string',
            action: 'string',
            relatedEntityType: 'string',
            relatedEntityId: 'UUID',
            relatedEntityShortReference: 'string',
            status: 'string',
            reason: 'string',
            settlesAt: 'date',
            createdAt: 'date',
            updatedAt: 'date',
            completedAt: 'date'
        })
    },

    transfers: {
        transfer1: function () {
            return {
                sourceAccountId: 'a7117404-e150-11e6-a5af-080027a79e8f',
                destinationAccountId: '946f2d58-e150-11e6-a5af-080027a79e8f',
                currency: 'GBP',
                amount: 12.5,
                reason: 'Transfer test'
            };
        },
        schema: new JSONschema({
            id: 'UUID',
            shortReference: 'string',
            sourceAccountId: 'UUID',
            destinationAccountId: 'UUID',
            currency: 'string',
            amount: 'number',
            status: 'string',
            createdAt: 'date',
            updatedAt: 'date',
            completedAt: 'date',
            creatorAccountId: 'UUID',
            creatorContactId: 'UUID',
            reason: 'string'
        }),
    },

    vans: {
        schema: new JSONschema({
            id: 'UUID',
            accountId: 'UUID',
            virtualAccountNumber: 'string',
            accountHolderName : 'string',
            bankInstitutionName: 'string',
            bankInstitutionAddress: 'string',
            bankInstitutionCountry: 'string',
            routingCode: 'string',
            createdAt: 'date',
            updatedAt: 'date',
        })
    },

    pagination: {
        schema: new JSONschema({
            totalEntries: 'number',
            totalPages: 'number',
            currentPage: 'number',
            previousPage: 'number',
            nextPage: 'number',
            perPage: 'number',
            order: 'string',
            orderAscDesc: 'string'
        })
    },

    reports: {
        report1: function () {
            return {
                buyCurrency: 'EUR',
                sellCurrency: 'GBP',
            };
        },
        report2: function () {
          return {
              description: 'TESTING REPORT FOR PAYMENTS',
              currency: 'GBP',
              amountFrom: '1000',
              amountTo: '10000'
          };
        },
        schema: new JSONschema({
            id: 'UUID',
            shortReference: 'string',
            searchParams: {
                buyCurrency: 'string',
                sellCurrency: 'string',
                scope: 'string'
            },
            reportType: 'string',
            status: 'string',
            reportUrl: '',
            accountId: 'UUID',
            contactId: 'UUID',
            createdAt: 'date',
            updatedAt: 'date'
        })
    }
};
