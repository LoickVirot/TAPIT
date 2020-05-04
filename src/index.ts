import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import 'reflect-metadata';

import Router from './config/Router';

dotenv.config();

const app = express();

// Init router
new Router(app);

createConnection().then(async (connection) => {

  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
  });

}).catch(error => console.log(error));
