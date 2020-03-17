const router = require('express').Router(),
api = require('./api');

router.post('meeting', api.meeting.meeting.createMeeting);

module.exports = router;
