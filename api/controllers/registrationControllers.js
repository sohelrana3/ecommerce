const User = require("../model/userSchema");
const registration = (req, res) => {
    let { username, email, password } = req.body;
    let user = new User({
        username: username,
        email: email,
        password: password,
    });
    user.save();
    res.send(user)
};

module.exports = registration;
