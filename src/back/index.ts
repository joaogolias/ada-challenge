import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import { AddressInfo } from 'net';
import { authRouter } from './api/controllers/auth/router';
import { setupContainer } from './container';
import validateTokenMiddleware from './api/middleware/auth/ValidateTokenMiddleware';

dotenv.config();

setupContainer();

const server = express();

server.use(express.json());
server.use(validateTokenMiddleware.handle);

const listener = server.listen(process.env.PORT, () => {
  const address = listener?.address?.() as AddressInfo;
  console.log('Starting server on port ' + address?.port); //Listening on port 8888
});

server.use('/', authRouter);
