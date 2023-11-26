function passwordValidation(pass) {
    let pattern =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return pattern.test(pass);
}

module.exports = passwordValidation;
