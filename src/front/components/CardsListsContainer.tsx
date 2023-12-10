import { CardListOptions, CardModel } from '@/models/CardModel';
import { CardContainer } from './CardContainer';
import { Typography } from '@mui/material';

export const CardsListsContainer: React.FC = () => {
  const cards: CardModel[] = [
    {
      id: '1',
      titulo: 'Titulo 1',
      conteudo: 'Conteudo 1',
      lista: CardListOptions.TODO,
    },
    {
      id: '2',
      titulo: 'Titulo 2',
      conteudo: 'Conteudo 2',
      lista: CardListOptions.DOING,
    },
    {
      id: '3',
      titulo: 'Titulo 3',
      conteudo: 'Conteudo 3',
      lista: CardListOptions.DONE,
    },
  ];

  const groupCards = (cards: CardModel[]) => {
    return cards.reduce(
      (acc, curr) => {
        if (acc[curr.lista]) {
          acc[curr.lista].push(curr);
        } else {
          acc[curr.lista] = [curr];
        }
        return acc;
      },
      {} as Record<CardListOptions, CardModel[]>
    );
  };

  const groupedCards = groupCards(cards);

  const renderCardList = (type: CardListOptions, cards: CardModel[]) => {
    return (
      <div className="w-full h-full border-r-[2px] pr-2 mr-2">
        <Typography className="mb-4 text-center"> {type} </Typography>
        {cards.map((card) => (
          <CardContainer key={card.id} card={card} />
        ))}
      </div>
    );
  };
  return (
    <div className="flex w-full px-4 h-full">
      {renderCardList(CardListOptions.TODO, groupedCards.TODO)}
      {renderCardList(CardListOptions.DOING, groupedCards.DOING)}
      {renderCardList(CardListOptions.DONE, groupedCards.DONE)}
    </div>
  );
};
