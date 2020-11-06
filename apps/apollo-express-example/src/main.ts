/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { init_db } from './database/init_db';
import { Resolvers } from './schema/Resolvers';

const main = async () => {
  await init_db();

  const schema = await buildSchema({
    resolvers: [Resolvers],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  apolloServer.applyMiddleware({ app, path: '/graphql' });

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to apollo-express-example!' });
  });

  const port = process.env.port || 3333;

  const expressServer = app.listen(port, () => {
    console.log(`REST Listening at http://localhost:${port}/api`);
    console.log(
      `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
    );
  });

  expressServer.on('error', console.error);
};

main();
