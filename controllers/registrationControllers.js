const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator")
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
            // otp 
            let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: true });
            // bcrypt password
            bcrypt.hash(password, 10, async function (err, hash) {
                let user = new User({
                    username: username,
                    email: email,
                    password: hash,
                    otp: otp,
                });
                user.save();
                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                        user: "expartdesigns5@gmail.com",
                        pass: "aolz berp jnou uhkb",
                    },
                });
                const info = await transporter.sendMail({
                    from: 'expartdesigns5@gmail.com', 
                    to: "sohel.pabna628@gmail.com", 
                    subject: "Verify your Email", 
                    html: `<div style="display: flex;width: 600px;height: 200px;"> <div style="width: 50%;height: 100px;">Please Verify your email by click on this button <a href="https://www.figma.com/">Verify</a>${otp}</div></div>`,
                });
                res.send(user);
            });
        }
    } else {
        res.send("Email Already Exits");
    }
};

module.exports = registration;
