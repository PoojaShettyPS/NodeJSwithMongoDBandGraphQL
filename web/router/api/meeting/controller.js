
const path = require('path'),
    meetingModel = require(path.resolve('.') + '/models/mongodb').meeting,
    logger = require(path.resolve('.') + '/utils/logger');

let Meeting = function () {
    this.createMeeting = (data) => {
            let meetingData = new meetingModel(data);
            meetingData.save();
            return true;
    }
}

module.exports = new Meeting();