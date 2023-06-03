const serviceModel = require('../../models/service');

const getServices = (req, res) => {
    serviceModel.find().then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = getServices;