const serviceModel = require('../../models/service');

const getService = (req, res) => {
    const serviceId = req.params.serviceId;

    serviceModel.find({
        _id: serviceId
    }).then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getService;