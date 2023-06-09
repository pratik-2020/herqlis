const express = require('express');
const signup = require('../routes/users/signup');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ]
}));
// const fileUpload = require('express-fileupload');
// app.use(fileUpload({
//     useTempFiles: true
// }));
app.use(express.json());
app.use(express.text());
const mongoose = require('mongoose');
const getService = require('../routes/services/getService');
const addFeedback = require('../routes/services/addFeedBack');
const getServices = require('../routes/services/getServices');
const deleteService = require('../routes/services/deleteService');
const getServiceMen = require('../routes/services/getServicemen');
const getUserServices = require('../routes/services/getUserServices');
const addOtp = require('../routes/otp/addOtp');
const login = require('../routes/users/login');
const addService = require('../routes/services/addService');
const updateService = require('../routes/services/updateService');
const serviceAllocation = require('../routes/services/serviceAllocation');
const addBill = require('../routes/bills/addBill');
const getBills = require('../routes/bills/getBills');
const usersBills = require('../routes/bills/usersBills');
const getBill = require('../routes/bills/getBill');
const reimbursement = require('../routes/bills/reimbursement');
const addStartDate = require('../routes/services/addStartdate');
const addCompletetion = require('../routes/services/addCompletion');
const updateStatus = require('../routes/services/updateStatus');
const db = "mongodb+srv://pratik:pratik@cluster0.dowzjwv.mongodb.net/?retryWrites=true&w=majority";
const multer = require('multer');
const billModel = require('../models/bill');
// const Cloudupld = require('../test');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'ddcituqpc', 
    api_key: '575793552761264', 
    api_secret: 'VrE5wG2lYuobc0S5atbZPe3PhO4',
    secure: true
})
const upload = multer({storage: multer.memoryStorage()})
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection established!!');
}).catch((er) => {
    console.log(er.message);
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.post('/signup', (req, res) => {//
    signup(req, res);
});
app.post('/login', (req, res) => {//
    login(req, res);
});
//service
app.get('/service/:serviceId', (req, res) => {//
    getService(req, res);
});
app.get('/services', (req, res) => {//
    getServices(req, res)
});
app.delete('/service/:serviceId', (req, res) => {
    deleteService(req, res);
});
app.get('/servicemen', (req, res) => {//
    getServiceMen(req, res);
});
app.post('/service', (req, res) => {//
    addService(req, res);
});
app.put('/service/:serviceId', (req, res) => {
    updateService(req, res);
})
app.get('/services/:userId', (req, res) => {
    getUserServices(req, res);
});
app.put('/allocation/:serviceId', (req, res) => {
    serviceAllocation(req, res);
});
app.put('/startdate/:serviceId', (req, res) => {
    addStartDate(req, res);
});
app.put('/completetiondate/:serviceId', (req, res) => {
    addCompletetion(req,res);
});
app.put('/feedback/:serviceId', (req, res) => {
    addFeedback(req, res);
});
app.put('/status/:serviceId', (req, res) => {
    updateStatus(req, res);
})
//otp
app.post('/opt', (req, res) => {
    addOtp(req, res);
});
//bill
app.post('/bill', upload.single('file'), async (req, res) => {
    try {
        // const bb = new busboy({ headers: req.headers });
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const file = req.file;
      console.log("file 162 :- "+file);
      // Upload file data directly to Cloudinary
      const base64Data = file.buffer.toString('base64');
    //   console.log("file 165 :- "+base64Data);
      await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${base64Data}`
      ).then((resp1) => {
        console.log("resp1 167 :- "+resp1);
        let billm = new billModel();
        console.log("resp1 :127 :- "+resp1);
        billm.imgUrl = resp1.secure_url;
        billm.amount = req.body.amount;
        billm.description = req.body.description;
        billm.reimbursementStatus = req.body.reimbursementStatus;
        billm.serviceId = req.body.serviceId;
        billm.userId = req.body.userId;
        billm.save().then((resp1) => {
            res.send({
                'message': 'Bill added',
                'data': resp1
            });
        }).catch((er) => {
            res.send(er);
        });
      }).catch((er1) => {
        res.send(er1);
      })

    //   res.json({ url: cloudinaryUpload.secure_url });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
});
app.get('/bills', (req, res) => {
    getBills(req, res);
});
app.get('/billusr/:userId', (req, res) => {
    usersBills(req, res);
});
app.get('/bill/:billId', (req, res) => {
    getBill(req, res);
});
app.put('/reimbursement/:billId', (req, res) => {
    reimbursement(req, res);
})
// app.post('/test', upload.single('file'), (req, res) => {
//     let cld = new Cloudupld("szuxglwu", "dl3ncyhm7");
//     console.log("welcome " + Object.keys(req.body));
//     let file = req.file;
//     const base64Data = file.buffer.toString('base64');
//     console.log("file :- 172 :- "+Object.keys(file));
//     res.send(cld.upld(file.buffer));
// })
app.listen(3001, () => {
    console.log('Server started at 3001');
})