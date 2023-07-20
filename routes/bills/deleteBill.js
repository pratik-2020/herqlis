const billModel = require("../../models/bill");

const deleteBill = (req, res) => {
    const id = req.params.id;
    console.log("id bill :- "+id);
    billModel.deleteOne({
        _id: id
    }).then((resp1) => {
        res.status(200).send({
            'message': 'Bill deleted',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = deleteBill;