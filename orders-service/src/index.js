'use strict';

import Hapi from 'hapi';
import {
  graphqlHapi,
   graphiqlHapi
  } from 'apollo-server-hapi';
import sequelize from './psqlAdapter'
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'
import {
  LOCALHOST,
  PORT,
  CONNECTION_SUCCESS,
  CONNECTION_FAILED,
  ROUTES,
  STARTING_SERVER,
  RUNNING_SERVER
} from './config/constants'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const server = Hapi.server({
  host: LOCALHOST,
  port: PORT
});

const start = async function() {
  try {
    sequelize
      .authenticate()
      .then(() => {
        console.log(CONNECTION_SUCCESS);
      })
      .catch(err => {
        console.error(CONNECTION_FAILED, err);
      });

    await server.register({
      plugin: graphiqlHapi,
      options: {
        path: ROUTES.GRAPHIQL,
        graphiqlOptions: {
          endpointURL: ROUTES.GRAPHQL
        },
        route: { cors: true }
      }
    });

    await server.register({
      plugin: graphqlHapi,
      options: {
        path: ROUTES.GRAPHQL,
        graphqlOptions: { schema },
        route: { cors: true }
      }
    });

    console.log(STARTING_SERVER);
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(RUNNING_SERVER, server.info.uri);
};

start();

