const serviceModel = require('../../models/service');

const serviceAllocation = ( req, res ) => {
    const serviceId = req.params.serviceId;
    const userId = req.body.userId;
    serviceModel.updateOne({
        _id: serviceId
    }, {
        userId: userId
    }).then((resp1) => {
        res.send({
            'message': 'Service Allocated',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = serviceAllocation;