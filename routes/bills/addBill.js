// const billModel = require('../../models/bill');
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: 'ddcituqpc', 
//     api_key: '575793552761264', 
//     api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
//     secure: true
// })

// const addBill = (req, res) => {
//     const img = req.files.img;
//     let str = cloudinary.uploader.upload_stream((er, dt) => {
//         if(er){
//             res.send(er);
//         }
//         else{
//             let billm = new billModel();
            // billm.imgUrl = dt.url;
            // billm.amount = req.body.amount;
            // billm.description = req.body.description;
            // billm.reimbursementStatus = req.body.reimbursementStatus;
            // billm.serviceId = req.body.serviceId;
            // billm.userId = req.body.userId;
            // billm.save().then((resp1) => {
            //     res.send({
            //         'message': 'Bill added',
            //         'data': resp1
            //     });
            // }).catch((er) => {
            //     res.send(er);
            // });
//         }
//     });
//     img.data.pipe(str);
// }

// module.exports = addBill;
const billModel = require('../../models/bill');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'ddcituqpc',
  api_key: '575793552761264',
  api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
  secure: true
});

const addBill = (req, res) => {
  const img = req.files.img;

  img.mv('/tmp', (error) => {
    if (error) {
      res.send(error);
    } else {
      cloudinary.uploader.upload('/tmp', (error, result) => {
        if (error) {
          res.send(error);
        } else {
          let billm = new billModel();
          billm.imgUrl = result.url;
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
      });
    }
  });
};

module.exports = addBill;
