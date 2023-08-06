const billModel = require('../../models/bill');
const addBill = (req, res) => {
    let billm = new billModel();
    billm.amount = req.body.amount;
    billm.description = req.body.description;
    billm.reimbursementStatus = req.body.reimbursementStatus;
    billm.serviceId = req.body.serviceId;
    billm.userId = req.body.userId;
    billm.dateData = new Date();
    billm
    .save()
    .then((resp1) => {
        res.send({
        message: 'Bill added',
        data: resp1
        });
    })
    .catch((er) => {
        res.send(er);
    });
}