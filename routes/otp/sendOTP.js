const sdk = require('api')('@msg91api/v5.0#6n91xmlhu4pcnz');
const SendOTP = require('sendotp');
const sendOTP = new SendOTP('401800AoDUZJJv64bf6904P1', "Your HerQlis verification code is {{otp}}.");
const OTPModel = require("../../models/otpMsg")
const getOTP = (req, res) => {
    sendOTP.send(req.body, "SenderID", function(error, data) {
      if(error){
        console.log(req);
        res.send(error);
      }
      else{
        console.log(req.body);
        res.send(data);
      }
    });
}

module.exports = getOTP;