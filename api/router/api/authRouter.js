const express = require("express");
const _ = express.Router();
const registration = require("../../controllers/registrationControllers.js");
const otpSend = require("../../controllers/otpController.js")
const Login = require("../../controllers/loginController.js")

_.post("/registration", registration);
_.post("/otp", otpSend);
_.post("/login", Login);

module.exports = _;
