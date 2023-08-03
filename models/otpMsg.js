const mongoose = require("mongoose"); a = 0;
const OTPSchema = mongoose.Schema({
    mobile: {
        type: String,
        required: true,
        validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
    }  
});
const OTPModel = mongoose.model("OTP", OTPSchema);
module.exports = OTPModel;