let mongoose = require('./connection');

module.exports = {
    meeting: require('./schema/meeting')(mongoose)
}