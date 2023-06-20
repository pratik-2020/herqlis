const serviceModel = require('../../models/service');

const addStartDate = (req, res) => {
    const serviceId = req.params.serviceId;
    const startDate = req.body.startDate;
    serviceModel.updateOne({
        _id: serviceId
    }, {
        startDate: startDate
    }).then((resp1) => {
        res.send({
            'message': 'Start date updated',
            'data': resp1
        })
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = addStartDate;