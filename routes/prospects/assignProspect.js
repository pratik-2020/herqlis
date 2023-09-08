const ProspectModel = require('../../models/prospect');

const assignProspect = (req, res) => {
    const [prospectId, assignedTo] = req.body;

    ProspectModel.updateOne({
        _id: prospectId
    },  {
        assignedTo: assignedTo,
        assignedOn: new Date(),
    }).then((response) => {
        res.status(200).json({
            message: 'Prospect assigned',
            data: response,
        });
    }).catch((error) => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error,
        });
    });
}

module.exports = assignProspect;