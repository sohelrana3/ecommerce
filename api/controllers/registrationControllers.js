const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const emailValidation = require("../helpers/emailValidation ");
const passwordValidation = require("../helpers/passwordValidation");
const registration = async (req, res) => {
    let { username, email, password } = req.body;

    const existingUser = await User.find({ email: email });

    if (existingUser.length == 0) {
        if (!username) {
            res.send("Username Required");
        } else if (!email) {
            res.send("Email required");
        } else if (!password) {
            res.send("Password Required");
        } else {
            // email validation regex
            if (email) {
                if (!emailValidation(email)) {
                    return res.send(" valid Email Required");
                }
            }

            if (password) {
                if (!passwordValidation(password)) {
                    return res.send(
                        " Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                    );
                }
            }
            // bcrypt password
            bcrypt.hash(password, 10, function (err, hash) {
                let user = new User({
                    username: username,
                    email: email,
                    password: hash,
                });
                user.save();
                res.send("User created successfully!");
            });
        }
    } else {
        res.send("Email Already Exits");
    }
};

module.exports = registration;
