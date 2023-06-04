const serviceModel = require('../../models/service');

const updateService = (req, res) => {
    const serviceId = req.params.serviceId;
    const userId = req.body.userId;
    const serviceFeedback = req.body.serviceFeedback;
    serviceModel.find({
        _id: serviceId
    }).then((resp1) => {
        if(resp1.length === 0){
            res.send({
                'message': 'No such service available'
            });
        }
        else{
            let f = [];
            if(resp1[0].userId.length !== 0){
                // let f = [];
                resp1[0].userId.map((e, key) => {
                    f.push(e);
                });
            }
            f.push(userId);
            serviceModel.updateOne({
                _id: serviceId
            }, {
                serviceFeedback: serviceFeedback,
                userId: f
            }).then((resp2) => {
                res.send({
                    'message': 'Service updated'
                });
            }).catch((er2) => {
                res.send(er2);
            });
        }
    })
}

module.exports = updateService;