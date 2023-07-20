const dailyallowenceModel = require("../../models/dailyallowence");
const axios = require('axios');
const addReturnData = (req, res) => {
    // const id = req.body.id;
    // dailyallowenceModel.find({
    //     _id: id
    // }).then((resp1) => {
    //     if(resp1.length === 0){
    //         res.status(400).send({
    //             'message': 'Daily allowence not found'
    //         });
    //     }
    //     else{
    //         let orig_lat = resp1[0].startData.locationDetails.latitude;
    //         let orig_long = resp1[0].startData.locationDetails.longitude;
    //         let dest_lat = resp1[0].endData.locationDetails.latitude;
    //         let dest_long = resp1[0].endData.locationDetails.longitude;
    //         axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${orig_lat},${orig_long}&destination=${dest_lat},${dest_long}&key=${YOUR_API_KEY}`).then((resp2) => {
    //             console.log(resp2);
    //         }).catch((er2) => {
    //             console.log(er2);
    //             res.send(er2);
    //         });
    //     }
    // })
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${orig_lat},${orig_long}&destination=${dest_lat},${dest_long}&key=${YOUR_API_KEY}`).then((resp2) => {
        console.log(resp2);
    }).catch((er2) => {
        console.log(er2);
        res.send(er2);
    });
}

module.exports = addReturnData;