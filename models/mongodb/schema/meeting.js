module.exports = function (mongoose) {
    let meetingSchema = new mongoose.Schema({
        userName: {
            type: String
        },
        meetingRoom: {
            type: String
        },
        meetingDate: {
            type: Date
        },
        fromDateTime: {
            type: Date
        },
        fromTime: {
            type: String
        },
        toDateTime: {
            type: Date
        },
        toTime: {
            type: String
        },
        meetingAgenda: {
            type: String
        },
        createdDate: {
            type: Date,
            index: true,
            default: Date.now
        },
        updatedDate: {
            type: Date
        },
        deleted: {
            type: Boolean,
            default: false
        }
    });
    return mongoose.model('meeting', meetingSchema);
};