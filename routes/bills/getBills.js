const billModel = require('../../models/bill');

const getBills = ( req, res) => {
    billModel.find().then((resp1) => {
        res.send({
            'message': 'All the bills are here',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getBills;