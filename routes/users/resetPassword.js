const userModel = require('../../models/user');

const resetPassword = ( req, res ) => {
    const phn = req.body.mobNumber;
    const password = req.body.password;
    userModel.updateOne({
        mobNum: phn
    }, {
        password: password
    }).then((resp1) => {
        res.send({
            'message': 'Password Updated',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    })
}

module.export = resetPassword;