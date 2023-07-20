const mongoos = require('mongoose');

const dailyallowenceSchema = mongoos.Schema({
    employeeId: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    },
    startData: {
        locationDetail: {
            latitude: {
                type: String
            },
            longitude: {
                type: String
            }
        },
        startTime: {
            type: Date
        }
    },
    endData: {
        locationDetail: {
            latitude: {
                type: String
            },
            longitude: {
                type: String
            }
        },
        endTime: {
            type: Date
        }
    }
});

const dailyallowenceModel = mongoos.model('DailyAllowence', dailyallowenceSchema);

module.exports = dailyallowenceModel;