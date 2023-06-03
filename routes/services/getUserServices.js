const serviceModel = require('../../models/service');

const getUserServices = (req, res) => {
    const userId = req.params.userId;
    serviceModel.find().then((resp1) => {
        if(resp1.length === 0){
            res.send({
                'message': 'No services'
            })
        }
        else{
            let f = [];
            resp1.map((e1,k1) => {
                if(e1.userId.indexOf(userId) !== -1){
                    f.push(e1);
                }
            });
            res.send(f);
        }
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = getUserServices;