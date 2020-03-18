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
        fromTime: {
            type: Date
        },
        toTime:
        {
            type: Date
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
            type: false
        }
    });
    return mongoose.model('meeting', meetingSchema);
};