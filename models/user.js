const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobileNum: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    profilePic: {
        type: String
    },
    userServices: {
        type: Array
    },
    servicesUserCanDo: {
        type: Array,
        required: true
    },
    employeeType: {
        type: String,
        required: true
    },
    billsToReimburse: {
        type: Array
    },
    location: {
        type: {
            latitude: {
                type: String
            },
            longitude: {
                type: String
            }
        }
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;