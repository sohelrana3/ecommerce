const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnection = require("./confiq/dbConfiq.js");
const route  = require("./router");
dotenv.config();

// app use

app.use(express.json());
dbConnection();
app.use(route );
//  server runing
app.listen(8000, function () {
    console.log("server is runing");
});
