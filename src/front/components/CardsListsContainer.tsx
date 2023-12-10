import { CardListOptions, CardModel } from '@/models/CardModel';
import { CardContainer } from './CardContainer';
import { Typography } from '@mui/material';
import { useCards } from '@/hooks/useCards';
import { useGroupCards } from '@/hooks/useGroupCards';

export const CardsListsContainer: React.FC = () => {
  const { cards } = useCards();

  const { groupedCards } = useGroupCards(cards);

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
