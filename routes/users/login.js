const userModel = require('../../models/user');

const login = (req, res) => {
    const phn = JSON.parse(req.body).phoneNumber;
    const password = JSON.parse(req.body).password;

    userModel.find({
        mobileNum: phn,
        password: password
    }).then((resp1) => {
        if(resp1.length === 0){
            res.send({
                'message': 'Invalid credentials'
            });
        }
        else{
            res.send({
                'message': 'User can proceed'
            })
        }
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = login;