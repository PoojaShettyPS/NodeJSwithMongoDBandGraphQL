    const path = require('path'),
    meetingModel = require(path.resolve('.') + '/models/mongodb').meeting;

const resolvers = {
    Query: {
        getsinglemeeting: async (root, args, context, info) => {
            console.log(args);
            return await meetingModel.findOne({
                _id: args._id,
            }).then((result) => {
                console.log(result);
                return result;
            }).catch((error) => {
                console.log(error);
                return error.message;
            });
        },
        getmeetingsbytime: async(root, args, context, info) => {    
            console.log(new Date(args.fromTime));
            console.log(args.fromTime);
            console.log(new Date(args.toTime));
            const fromMeetingTime = new Date(args.fromTime);
            const toMeetingTime = new Date(args.toTime);
            return await meetingModel.aggregate([{  
                $match : {      
                       $or : [{
                           fromTime : {
                               $gte : fromMeetingTime,
                               $lte : toMeetingTime,
                           }},
                           {
                               toTime : {
                                   $lte : toMeetingTime,
                                   $gte : fromMeetingTime 
                               }
                           }]
                        }
                       }]).then((result) => {
                console.log(result);
                return result;
            }).catch((error) => {
                console.log(error);
                return error.message;
            });
        },
        meetings: async (root, { }) => {
            return await meetingModel.find({});
        },
        listMeetings: async (root, { filter }) => {
            console.log('filter------->', JSON.stringify(filter));
            if (filter && filter.searchText) {
                let searchText = filter.searchText.toLowerCase();
                return courses.filter(x => x.title.toLowerCase().includes(searchText) ||
                    x.description.includes(searchText));
            } else {
                return courses;
            }
        }
    },

    Mutation: {
        createMeeting: (root, args, context, info) => {
            let meetingData = new meetingModel(args);
            meetingData.save();
            return true;
        },
        updateMeeting: (root, args, context, info) => {
            console.log(args);
            meetingModel.update({
                _id: args._id
            }, {
                $set: args
            }).then((result) => {
                return result;
            }).catch((error) => {
                return error.message;
            });
        },
        deleteMeeting: (root, args, context, info) => {
            console.log(args);
            meetingModel.deleteOne({
                _id: args._id
            }).then((result) => {
                return result;
            }).catch((error) => {
                return error.message;
            });
        }
    }
};

module.exports = resolvers;
