const serviceModel = require('../../models/service');

const deleteService = (req, res) => {
    const serviceId = req.params.serviceId;
    serviceModel.deleteOne({
        _id: serviceId
    }).then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = deleteService;