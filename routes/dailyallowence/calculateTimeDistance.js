const axios = require("axios");
const calculateTimeDistance = (req, res) => {
    // const serviceId = req.body.serviceId;
    // const employeeId = req.body.employeeId;
    const lat1 = req.body.lat1;
    const long1 = req.body.long2;
    const lat2 = req.body.lat2;
    const long2 = req.body.long2;
    const startTime = req.body.startTime;
    axios.get("https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?" + "travelMode=driving" + "&" + "destinations=" + lat2 + "," + long2 + "&" + "origins=" + lat1 + "," + long1 + "&" + "startTime=" + startTime + "&" + "key=AvmrNFJ3BmYB3ZpIamL7LvUDasyAt9L2HL-qu44vSkTEjQex7_VcDWIUEeERKrkk").then((res1) =>{
        console.log(res1);
        // res.send(res1);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
    console.log(req)
}

module.exports = calculateTimeDistance;