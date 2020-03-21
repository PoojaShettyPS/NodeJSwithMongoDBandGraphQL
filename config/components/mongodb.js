let config = {    
    uri: "mongodb://192.168.0.3:27017/MeetingDB",
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
} 
module.exports = config
