const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    serviceId: {
        type: String,
        required: true
    },
    otpType: {
        type: String,
        required: true
    },
    otpNum: {
        type: String,
        required: true
    }
});

const otpModel = mongoose.model('Otp', otpSchema);

module.exports = otpModel;