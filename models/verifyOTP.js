const mongoose = require("mongoose");
const verifyOTPSChema = mongoose.Schema({
    mobile: {
        type: Number, 
        required: true
    },
    otp: {
        type: Number,
        required: true
    }
})