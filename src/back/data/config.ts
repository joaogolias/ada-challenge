import { Sequelize } from 'sequelize-typescript';
import { Card } from './models/Card';

export const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [Card],
});
