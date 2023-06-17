const billModel = require('../../models/bill');

const getBill = ( req, res ) => {
    const billId = req.params.billId;
    billModel.find({
        _id: billId
    }).then((resp1) => {
        res.send({
            'message': 'Bill',
            'data': resp1
        });
    } ).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getBill;