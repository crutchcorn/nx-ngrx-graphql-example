/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app, path: '/graphql' });

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to apollo-express-example!' });
});

const port = process.env.port || 3333;

const expressServer = app.listen(port, () => {
  console.log(`REST Listening at http://localhost:${port}/api`);
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});

expressServer.on('error', console.error);
