const mongoose = require("mongoose");
let {USER_NAME,PASSWORD,DATABASE_NAME}=process.env

function dbConnection() {
    mongoose
        .connect(`mongodb+srv://sohel:sohel@mern-state.ier4ijb.mongodb.net/mern-state?retryWrites=true&w=majority`)
        .then(() => console.log("Database Connected!"));
}

module.exports = dbConnection;
