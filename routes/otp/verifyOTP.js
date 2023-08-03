const sdk = require('api')('@msg91api/v5.0#6n91xmlhu4pcnz');
const OTPModel = require("../../models/verifyOTP")
const verifyOTP = (req, res) => {
    sdk.auth('401800A4Eyj0hy64bf7ea1P1');
    sdk.verifyOtp({otp: req.body.otp, mobile: req.body.mobile})
    .then(({ data }) => res.send(data))
    .catch(err => res.send(err));
}
module.exports = verifyOTP