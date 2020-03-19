'use strict';
const express = require('express'),
    app = express(),
    resolvers = require('./router/api/meeting/resolvers'),
    typeDefs = require('../models/graphql/types/meeting'),
    helmet = require('helmet'),
    logger = require('../utils/logger'),
    path = require('path'),
    router = require('./router'),
    cors = require('cors'),
    config = require(path.resolve('.') + '/config'),
    { ApolloServer, gql } = require('apollo-server');

app.use(helmet());
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', config.environment.origin)
    res.header('Access-Control-Allow-Headers', 'x-access-token,Content-Type')
    res.header('Access-Control-Expose-Headers', 'x-access-token,Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json')
    next();
});

app.set('port', process.env.PORT || config.environment.port);

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({
    url
}) => {
    console.log(`Server ready at ${url}`);
});

// app.use('/', router);

// app.listen(app.get('port'))
// logger.info('Server Running on port no: ' + app.get('port'))

process.on('uncaughtException', function (err) {
    logger.info('index | uncaughtException, Error: ', err)
    process.exit(1)
});
