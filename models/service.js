const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    serviceType: {
        type: String,
        required: true
    },
    location: {
        type: {
            latitude: {
                type: String,
                required: true
            },
            longitude: {
                type: String,
                required: true
            }
        },
        required: true
    },
    requestDate: {
        type: String,
        required: true
    },
    acceptenceDate: {
        type: String,
        // required: true
    },
    completionDate: {
        type: String,
        // required: true
    },
    issueDetail: {
        type: String,
        required: true
    },
    issueDescription: {
        type: String,
        required: true
    },
    serviceCost: {
        type: Number,
        required: true
    },
    clientDetails: {
        type: {
            name: {
                type: String,
                required: true
            },
            mobNumber: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            }
        },
        required: true
    },
    status: {
        type: String,
        required: true
    },
    serviceFeedback: {
        type: String
    },
    userId: {
        type: Array
    }
});

const serviceModel = mongoose.model('Service', serviceSchema);

module.exports = serviceModel;