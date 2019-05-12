const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const PORT = process.env.PORT || 3001
const app = express()

// Define middleware here
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));



// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});