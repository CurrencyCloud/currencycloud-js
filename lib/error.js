/**
 * @module error
 */

'use strict';

var process = require('process');
var utils = require('./utils');

class APIerror extends Error {
  /**
   * Creates a new APIerror.
   * @param {Error} err API request error
   * @constructor
   */
  constructor(err) {
    super();

    this.name = this.constructor.name;

    this.platform = process.browser ? 'browser' : 'node ' + process.version;

    this.request = {
      parameters: utils.camelize(err.config.params),
      verb: err.config.method,
      url: err.config.url
    };
    this.response = {
      statusCode: err.response.status,
      date: err.response.headers.date,
      requestId: err.response.headers['x-request-id']
    };
    this.errors = [];

    var errorMessages;

    if (typeof err.response.data === 'object') { // Response data successfully parsed
      errorMessages = utils.camelize(err.response.data).errorMessages;
    } else {
      errorMessages = {
        base: {
          code: 'badly_formatted_error_response',
          message: err.message
        }
      };
    }

    for (var field of Object.keys(errorMessages)) {
      if (typeof errorMessages[field][Symbol.iterator] === 'function') {
        for (var fieldError of errorMessages[field]) {
          this.errors.push({
            field: field,
            code: fieldError.code,
            message: fieldError.message,
            params: fieldError.params
          });
        }
      } else {
        this.errors.push({
          field: field,
          code: errorMessages[field].code,
          message: errorMessages[field].message,
          params: errorMessages[field].params
        });
      }
    }
  }

  /**
   * Creates YAML representation of the API error.
   * @returns {String} YAML string
   */
  toYAML() {
    var err = Object.assign({}, this);
    delete err.name;

    return this.name + '\n' + utils.toYAML(err);
  }
}

class BadRequestError extends APIerror {
}

class AuthenticationError extends APIerror {
}

class ForbiddenError extends APIerror {
}

class NotFoundError extends APIerror {
}

class TooManyRequestsError extends APIerror {
}

class InternalApplicationError extends APIerror {
}

class UndefinedError extends APIerror {
}

module.exports = function (err) {
  if (!err.status) {
    return err;
  }

  switch (err.status) {
    case 400:
      return new BadRequestError(err);
    case 401:
      return new AuthenticationError(err);
    case 403:
      return new ForbiddenError(err);
    case 404:
      return new NotFoundError(err);
    case 429:
      return new TooManyRequestsError(err);
    case 500:
      return new InternalApplicationError(err);
    default:
      return new UndefinedError(err);
  }
};
module.exports.APIerror = APIerror;
module.exports.AuthenticationError = AuthenticationError;
module.exports.BadRequestError = BadRequestError;
module.exports.ForbiddenError = ForbiddenError;
module.exports.NotFoundError = NotFoundError;
module.exports.TooManyRequestsError = TooManyRequestsError;
module.exports.InternalApplicationError = InternalApplicationError;
module.exports.UndefinedError = UndefinedError;