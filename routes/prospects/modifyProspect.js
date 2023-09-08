const { response } = require('express');
const ProspectModel = require('../../models/prospect');
const statuses = ['Upcoming', 'Ongoing', 'Completed'];
const platforms = ['Buying', 'Working', 'Market', 'Universe'];
const models = ['HQ-50', 'HQ-70', 'HQ-140', 'HQ-220'];

const modifyProspect = (req, res) => {
    try{
        const prospectId = req.params.id;
        const {name, firm, contact, address, email, assignedTo, buyerHistory, prospectDetails, platformDetails, modelDetails, call, status} = req.body;
        const prospect = {prospectDetails: {}};
        if(name){
            prospect['name'] = name;
        }
        if(firm){
            prospect['firm'] = firm;
        }
        if(contact){
            prospect['contact'] = contact;
        }
        if(address){
            prospect['address'] = address;
        }
        if(email){
            prospect['email'] = email;
        }
        if(assignedTo){
            prospect['assignedTo'] = assignedTo;
            prospect['assignedOn'] = new Date();
        }
        if(buyerHistory){
            prospect['prospectDetails']['buyerHistory'] = buyerHistory;
        }
        if(platformDetails){
            prospect['prospectDetails']['platformDetails'] = latformDetails;
        }
        if(modelDetails){
            prospect['prospectDetails']['modelDetails'] = modelDetails;
        }
        if(status){
            prospect['status'] = statuses[status];
        }
        if(call){
            prospect['call'] = call;
        }
        console.log(prospect);
        ProspectModel.updateOne({
            _id: prospectId,
        }, {
            '$set': {prospect},
            '$push': {'prospectDetails.call': prospect.call}
        }).then((response) => {
            if(response.acknowledged){
                res.status(200).json({
                    message: 'Prospect modified',
                    data: response,
                });
            }
            else{
                res.status(201).json({
                    message: 'Prospect not modified',
                    error: response,
                });
            }
        }).catch((error) => {
            res.status(500).json({
                message: 'Something went wrong',
                error: error,
            });
        });
    }
    catch(error){
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    }
}
module.exports = modifyProspect;