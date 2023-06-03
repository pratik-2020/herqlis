const userModel = require('../../models/user');

const signup = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const dateOfBirth = req.body.dateOfBirth;
    const password = req.body.password;
    const age = req.body.age;
    const mobNumber = req.body.mobNumber;
    const location = req.body.location;
    let userm = new userModel();
    userm.name = ''+firstName + lastName;
    // userm.lastName = lastName
    userm.email  = email
    userm.dateOfBirth = dateOfBirth
    userm.password = password
    userm.age = age
    userm.mobileNum = mobNumber,
    userm.location = location;
    userm.employeeType = 'Service man'
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