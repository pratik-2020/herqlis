const serviceModel = require("../../models/service");

const updateStatus = (req, res) => {
    const serviceId = req.params.serviceId;
    const status = req.body.status;
    console.log("status ;- "+status+" serviceId :- "+serviceId);
    serviceModel.updateOne({
        _id: serviceId
    }, {
        status: status
    }).then((Resp1) => {
        console.log("resp1 11 :- "+Object.keys(Resp1))
        res.send({
            'message': 'Status updated',
            'data': Resp1
        })
    }).catch((er1)=> {
        res.send(er1);
    })
}

module.exports = updateStatus;