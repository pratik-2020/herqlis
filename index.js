const express = require('express');
const signup = require('./routes/users/signup');
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
app.use(express.json());
app.use(express.text());
const mongoose = require('mongoose');
const getService = require('./routes/services/getService');
const getServices = require('./routes/services/getServices');
const deleteService = require('./routes/services/deleteService');
const getServiceMen = require('./routes/services/getServicemen');
const getUserServices = require('./routes/services/getUserServices');
const addOtp = require('./routes/otp/addOtp');
const login = require('./routes/users/login');
const db = "mongodb+srv://pratik:pratik@cluster0.dowzjwv.mongodb.net/?retryWrites=true&w=majority";
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

app.post('/signup', (req, res) => {
    signup(req, res);
});
app.post('/login', (req, res) => {
    login(req, res);
});
//service
app.get('/service/:serviceId', (req, res) => {
    getService(req, res);
});
app.get('/services', (req, res) => {
    getServices(req, res)
});
app.delete('/service/:serviceId', (req, res) => {
    deleteService(req, res);
});
app.get('/servicemen', (req, res) => {
    getServiceMen(req, res);
});
app.get('/services/:userId', (req, res) => {
    getUserServices(req, res);
});

//otp
app.post('/opt', (req, res) => {
    addOtp(req, res);
});

app.listen(3001, () => {
    console.log('Server started at 3001');
})