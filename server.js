const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'var.env' });
const Project = require('./models/Project.js');
const User = require('./models/User.js');

// Bring in GraphQL-Express middlewarre

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// Create Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Connects to databse

mongoose

  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const app = express();

// Create Graphiql application
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }));

// Connect Schemas to GraphQL
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: { Project, User }
  })
);

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
