const path = require('path'),
    logger = require(path.resolve('.') + '/utils/logger'),
    controller = require('./controller');

let Meeting = function () {
    this.createMeeting = (req, res) => {
        return controller.createMeeting(req.body).then( (result) => {
            return res.status(200).send(result);
        }).catch((error) => {
            return res.status(400).send(error);
        });
    }
}

module.exports = new Meeting();