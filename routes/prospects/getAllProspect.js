const { response } = require('express');
const ProspectModel = require('../../models/prospect');
const statuses = ['Upcoming', 'Ongoing', 'Completed'];
const platforms = ['Buying', 'Working', 'Market', 'Universe'];
const models = ['HQ-50', 'HQ-70', 'HQ-140', 'HQ-220'];

const getAllProspect = (req, res) => {
    const userId = req.params.id;
    ProspectModel.find({assignedTo: userId}).then((response) => {
        res.status(200).json({
            message: 'Prospect found',
            data: response,
        });
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    });
}
module.exports = getAllProspect;