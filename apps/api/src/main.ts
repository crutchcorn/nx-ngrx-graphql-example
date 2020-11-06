import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import { Resolvers } from './app/schema/Resolvers';
import { buildSchema } from 'type-graphql';
import { init_db } from './app/database/init_db';
import { resolve } from 'path';

export const schemaResolvers = [Resolvers] as const;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3333;

  await init_db();

  const schema = await buildSchema({
    resolvers: schemaResolvers,
    // The file will be in the `dist/schema` directory
    emitSchemaFile: resolve(__dirname, '../../schema', 'schema.gql')
  });

  const apolloServer = new ApolloServer({ schema });

  apolloServer.applyMiddleware({ app, path: '/graphql' });

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    Logger.log('Listening at http://localhost:' + port + apolloServer.graphqlPath);
  });
}

bootstrap();
