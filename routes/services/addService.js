const serviceModel = require("../../models/service");

const addService = (req, res) => {
    const serviceType = req.body.serviceType;
    const location = req.body.location;
    const requestDate = req.body.requestDate;
    const issueDetail = req.body.issueDetail;
    const issueDescription = req.body.issueDescription;
    const name = req.body.name;
    // const serviceCost = req.body.serviceCost;
    const clientDetails = req.body.clientDetails;
    let servicem = new serviceModel();
    servicem.serviceType = serviceType;
    servicem.location = location;
    servicem.requestDate = requestDate;
    servicem.issueDetail = issueDetail;
    servicem.issueDescription = issueDescription;
    servicem.name = name;
    servicem.clientDetails = clientDetails;
    servicem.acceptenceDate = "";
    servicem.completionDate = "";
    servicem.serviceCost = req.body.serviceCost;
    servicem.status = "To be allocated";
    servicem.serviceFeedback = "";
    servicem.userId = req.body.userId;
    servicem.warranty = req.body.warranty;
    servicem.save().then((resp1) => {
        res.send({
            'message': 'Service added',
            'data': resp1
        });
    }).catch((er1) => {
        res.send(er1);
    })
}

module.exports = addService;