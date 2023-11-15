const mongoose = require("mongoose");

function dbConnection() {
    mongoose
        .connect(process.env.MONGOURL)
        .then(() => console.log("mongodb connect"))
        .catch((err) => console.log(err));
}

module.exports = dbConnection;
