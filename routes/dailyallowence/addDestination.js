const dailyallowenceModel = require("../../models/dailyallowence");

const addDestination = (req, res) => {
    const id = req.body.id;
    let endDt = {
        locationDetail: {
            latitude: req.body.latitude,
            longitude: req.body.longitude
        },
        endTime: new Date()
    };
    dailyallowenceModel.updateOne({
        _id: id
    }, {
        endData: endDt
    }).then((resp1) => {
        res.status(200).send({
            'message': 'Destination data updated',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = addDestination;