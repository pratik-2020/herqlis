const dailyallowenceModel = require("../../models/dailyallowence");

const addDailyAllowence = (req, res) => {
    const serviceId = req.body.serviceId;
    const employeeId = req.body.employeeId;

    let dailm = new dailyallowenceModel();
    dailm.serviceId = serviceId;
    dailm.employeeId = employeeId;
    let strtdt = {
        locationDetail: {
            latitude: req.body.latitude,
            longitude: req.body.longitude,
        },
        startTime: new Date()
    }
    dailm.startData = strtdt;

    dailm.save().then((resp1) => {
        res.status(200).send({
            'message': 'Daily allowence added',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = addDailyAllowence;