/**
 * @module demo
 */

"use strict";

var client = require("../client");

module.exports = {
  /**
   * Emulates inbound funds in demo environment
   * @param {Object} params Object, which contains parameters to emulate inbound funds
   * @param {String} params.id Id of account to be funded, required
   * @return {Promise} Promise; if fulfilled returns object, which contains the newly created transaction, if rejected returns APIerror.
   */
  emulateInboundFunds: function (params) {
    params = params || {};
    const required = ["id", "receiverAccountNumber", "amount", "currency"];
    required.forEach((prop) => {
      if (params.hasOwnProperty(prop)) {
        return;
      }
      throw new Error(`${prop} is required`);
    });

    var url = "/v2/demo/funding/create";

    var promise = client.request({
      url: url,
      method: "POST",
      qs: params,
    });

    return promise;
  },
};
