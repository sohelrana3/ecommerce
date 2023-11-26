const User = require("../model/userSchema");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
    const { email, password } = req.body;
    let existingUser = await User.find({ email: email });
    if (existingUser.length == 0) {
        res.send({ error: "Credencial is not valid" });
    } else if (existingUser[0].verify == false) {
        res.send({ error: "User is not verify" });
    } else {
        bcrypt.compare(
            password,
            existingUser[0].password,
            function (err, result) {
                result == true;
                if (result) {
                    const { password: pass, ...rest } = existingUser[0]._doc;
                    res.send(rest);
                } else {
                    res.send({ error: "Credencial is not valid" });
                }
            }
        );
    }
};

module.exports = Login;
