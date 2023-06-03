const userModel = require('../../models/user');

const getServiceMen = (req, res) => {
    userModel.find({
        employeeType: 'service man'
    }).then((resp1) => {
        res.send(resp1);
    }).catch((er1) => {
        res.send(er1);
    });
}

module.exports = getServiceMen;