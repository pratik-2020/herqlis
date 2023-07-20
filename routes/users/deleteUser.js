const userModel = require("../../models/user");

const deleteUser = (req, res) => {
    const id = req.params.id;
    console.log("id :- "+id);
    userModel.deleteOne({
        _id: id
    }).then((resp1) => {
        res.send({
            'message': 'Service man deleted',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = deleteUser;