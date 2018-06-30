/*
Copyright (c) 2014 IndigoUnited
With additions and modifications by Currencycloud, 2018

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */

/**
 * @module backoff
 */

'use strict';

let backoffRetry = require('retry');
let errorType = require('./error');

const defaultOpts = {
  retries: 7,
  factor: 2,
  minTimeout: Math.random() * 750,
  maxTimeout: Math.random() * 60000 + 30000,
  randomize: true,
  log: false
};

let  isRetryError = (err) => {
  return (err instanceof errorType.TooManyRequestsError);
};

let retry = (fn, options, name) => {
  options = (typeof options === 'undefined') ? defaultOpts : options;
  name = (typeof name === 'undefined') ? "Backoff Policy" : name;
  let operation = backoffRetry.operation(options);

  return new Promise((resolve, reject) => {
    operation.attempt((number) => {
      Promise.resolve()
        .then(() => {
          return fn((err) => {
            throw err;
          }, number);
        })
        .then(resolve, (err) => {
          if (isRetryError(err)) {
            options.log && (number > 1) && console.log(`[${name}] - Retry ${number - 1}`);
            if (operation.retry(err || new Error())) {
              return;
            }
          }

          options.log && console.log(`[${name}] - Rejecting`);
          reject(err);
        });
    });
  });
};

module.exports = retry;
