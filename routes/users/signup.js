const userModel = require('../../models/user');

const signup = (req, res) => {
    const firstName = JSON.parse(req.body).firstName;
    const lastName = JSON.parse(req.body).lastName;
    const email = JSON.parse(req.body).email;
    const dateOfBirth = JSON.parse(req.body).dateOfBirth;
    const password = JSON.parse(req.body).password;
    const age = JSON.parse(req.body).age;
    const mobNumber = JSON.parse(req.body).mobNumber;

    let userm = new userModel();
    userm.firstName = firstName
    userm.lastName = lastName
    userm.email  = email
    userm.dateOfBirth = dateOfBirth
    userm.password = password
    userm.age = age
    userm.mobNumber = mobNumber
    userm.save().then((resp1) => {
        res.send({
            'message': 'User created',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = signup;