const ProspectModel = require('../../models/prospect');
const statuses = ['Upcoming', 'Ongoing', 'Completed'];
const platforms = ['Buying', 'Working', 'Market', 'Universe'];
const models = ['HQ-50', 'HQ-70', 'HQ-140', 'HQ-220'];


const addProspect = (req, res) => {
    const {name, firm, contact, address, email, assignedTo, prospectDetails, platformDetails, modelDetails, call, status} = req.body;
    const prospect = new ProspectModel();
    prospect.name= name;
    prospect.firm = firm;
    prospect.contact = contact;
    prospect.address = address;
    prospect.email = email;
    if(status){
        if(status >= 0 && status < statuses.length){
            prospect.status = statuses[status];
        }
    }
    else{
        prospect.status = 'Upcoming';
    }
    prospect.registeredOn = new Date();
    if(assignedTo){
        prospect.assignedTo = assignedTo;
        prospect.assignedOn = new Date();
    }
    if(prospectDetails){
        prospect.prospectDetails = prospectDetails;
    }
    if(platformDetails){
        prospect.platformDetails = platformDetails;
    }
    if(modelDetails){
        prospect.modelDetails = modelDetails;
    }
    prospect.save().then((resonse) => {
        res.status(200).json({
            message: 'Prospect added',
            data: resonse,
        });
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    });
}
module.exports = addProspect;