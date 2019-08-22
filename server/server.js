import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });

mongoose.connection
  .once('open', () => {
    console.log('Connected to Mongo.');
  })
  .on('error', error => {
    throw new Error(`Error connecting to Mongo: ${error}`);
  });

app.use(
  '/graphql',
  expressGraphQL(() => ({
    schema,
    graphiql: true
  }))
);

export default app;
