import express from 'express';
import { authRouter } from './api/controllers/auth/router';
import validateTokenMiddleware from './api/middleware/auth/ValidateTokenMiddleware';
import { cardsRouter } from './api/controllers/cards/router';
import logCardModificationMiddleware from './api/middleware/log/LogCardModificationMiddleware';

export const server = express();

server.use(express.json());

server.use(validateTokenMiddleware.handle);

server.use('/', authRouter);
server.use('/cards', cardsRouter);

server.use(logCardModificationMiddleware.handle);
