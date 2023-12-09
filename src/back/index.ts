import 'reflect-metadata';
import { setupContainer } from './container';
import dotenv from 'dotenv';
import { sequelize } from './data/config';
import { AddressInfo } from 'net';

dotenv.config();

setupContainer();

import { server } from './server';

Promise.all([sequelize.sync()]).then(() => {
  const listener = server.listen(process.env.PORT, () => {
    const address = listener?.address?.() as AddressInfo;
    console.log('Starting server on port ' + address?.port); //Listening on port 8888
  });
});
