const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    imgUrl: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reimbursementStatus: {
        type: String,
        required: true
    },
    reimbursedAmount : {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    }
});

const billModel = mongoose.model('Bill', billSchema);

module.exports = billModel;