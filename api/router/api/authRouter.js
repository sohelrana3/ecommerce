const express = require("express");
const _ = express.Router();
const registration = require("../../controllers/registrationControllers.js");

_.post("/registration", registration);

module.exports = _;
