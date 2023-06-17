const billModel = require('../../models/bill');

const usersBills = (req, res) => {
    const userId = req.params.userId;
    billModel.find({
        userId: userId
    }).then((resp1) => {
        res.send({
            'message': 'Users bills',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = usersBills;