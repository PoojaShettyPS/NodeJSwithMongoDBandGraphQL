const { gql } = require('apollo-server'),
    typeDefs = gql `
    type Meeting {
        _id : String,
        userName: String,
        meetingRoom: String,
        meetingDate: String,
        fromDateTime: String,
        toDateTime: String,
        fromTime: String,
        toTime: String,
        meetingAgenda: String,
        createdDate: Boolean,
        updatedDate: String,
        deleted: Boolean
    }

    type Query {
        meetings: [Meeting],
        listMeetings(filter: meetingFilter): [Meeting]
        getsinglemeeting(_id: String): Meeting
        getmeetingsbytime(fromTime: String, toTime : String): Meeting
    }

    type Mutation {
        updateMeeting(_id: String,userName: String,meetingRoom: String,meetingDate: String,fromTime: String,toTime: String,fromDateTime: String,toDateTime: String, meetingAgenda: String):String
        createMeeting( userName: String,meetingRoom: String,meetingDate: String,fromTime: String,toTime: String,fromDateTime: String,toDateTime: String,meetingAgenda: String):String
        deleteMeeting(_id: String):String
    }

    input meetingFilter {
          searchText: String
    }
`;

module.exports = typeDefs;