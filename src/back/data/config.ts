import { Sequelize } from 'sequelize-typescript';
import { CardEntity } from './entities/CardEntity';

export const sequelize = new Sequelize({
  database: 'some_db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [CardEntity],
});
