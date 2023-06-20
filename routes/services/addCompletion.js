const serviceModel = require("../../models/service");

const addCompletetion = (req, res) => {
    const serviceId = req.params.serviceId;
    const completionDate = req.body.completionDate;
    serviceModel.updateOne({
        _id: serviceId
    }, {
        completionDate: completionDate
    }).then((resp1) => {
        res.send({
            'message': 'Compeletetion date added',
            'data': resp1
        })
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = addCompletetion;