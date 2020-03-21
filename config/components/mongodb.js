let config = {
    uri: "mongodb://localhost:27017/MeetingDB",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
}

module.exports = config
