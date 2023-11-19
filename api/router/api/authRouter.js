const express = require("express");
const _ = express.Router();
const registration = require("../../controllers/registrationControllers.js");
const otpSend = require("../../controllers/otpController.js")

_.post("/registration", registration);
_.post("/otp", otpSend);

module.exports = _;
