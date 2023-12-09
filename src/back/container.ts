import Container from 'typedi';
import { CardsDatasource } from './data/datasources/CardsDatasource';
import { CardsRespository } from './data/repositories/CardsRespository';

export const setupContainer = () => {
  Container.set(CardsDatasource, Container.get(CardsRespository));
};

export const getContainer = () => Container;
