import express from 'express';
import dotenv from 'dotenv';

import Router from './config/Router';

dotenv.config();

const app = express();

// Init router
new Router(app);

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`);
});

export default server;