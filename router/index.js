const express = require("express");
const _ = express.Router();
const authRoutes = require("./api/authRouter.js");
const api = process.env.BASE_URL;

_.use(api, authRoutes);
_.use(api, (req, res) => res.json("No Api Found On This Route"));
module.exports = _;
