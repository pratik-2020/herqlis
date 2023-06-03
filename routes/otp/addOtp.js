const otpModel = require('../../models/otp');
const otpgen = require('otp-generator');
const addOtp = (req, res) => {
    const otpNum = otpgen.generate(6, { upperCaseAlphabets: false, specialChars: false });
    const serviceId = JSON.parse(req.body).serviceId;
    const otpType = JSON.parse(req.body).otpType;

    let otpm = new otpModel();
    otpm.otpNum = otpNum;
    otpm.serviceId = serviceId;
    otpm.otpType = otpType;
    otpm.save().then((resp1) => {
        res.send({
            'message': 'OTP send'
        });
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = addOtp;