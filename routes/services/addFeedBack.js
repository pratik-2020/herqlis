const serviceModel = require('../../models/service');

const addFeedback = (req, res) => {
    const serviceId = req.params.serviceId;
    const serviceFeedback = req.body.serviceFeedback;
    serviceModel.updateOne({
        _id: serviceId
    }, {
        serviceFeedback: serviceFeedback
    }).then((resp1) => {
        res.send({
            'message': 'Feedback added',
            'data': resp1
        });
    }).catch((Er1) => {
        res.send(Er1);
    })
}

module.exports = addFeedback;