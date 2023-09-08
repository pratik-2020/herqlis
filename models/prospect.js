const mongoose = require('mongoose');
const prospectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    firm: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    assignedTo: {
        type: String,
    },
    prospectDetails: {
        buyerHistory: {
            newBuyer: {
                type: Boolean,
            },
            comments: {
                type: String,
            },
        },
        platformDetails: {
            platform:{
                type: String,
            },
            comment: {
                type: String,
            },
        },
        modelDetails: {
            model: {
                type: String,
            },
            finances: {
                type: String,
            }
        },
        call: [
            {
                date: String,
                message: String,
            }
        ]
    },
    registeredOn: {
        type: Date,
        required: true,
    },
    assignedOn: {
        type: Date,
    },
    status: {
        type: String,
        required: true,
    }
});
const prospectModel = mongoose.model('Prospect', prospectSchema);
module.exports = prospectModel;