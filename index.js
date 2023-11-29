require("dotenv").config();
const express = require("express");
const app = express();
const dbConnection = require("./confiq/dbConfiq.js");
const route = require("./router");

// app use

app.use(express.json());
dbConnection();
app.use(route);
//  server runing
app.listen(8000, function () {
    console.log("server is runing");
});
