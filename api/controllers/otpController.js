const User = require("../model/userSchema");

const otpSend = async (req, res) => {
    const { email, otp } = req.body;
    const data = await User.find({ email: email });
    console.log(data[0].otp);

    if (data[0].otp == otp) {
        await User.findOneAndUpdate({otp: "", verify:"true"});
    }
};

module.exports = otpSend;
