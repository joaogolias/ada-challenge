import { CardListOptions } from '@/models/CardModel';
import { useCards } from '@/hooks/useCards';
import { useGroupCards } from '@/hooks/useGroupCards';
import { CardList } from './CardList';

export const CardsListsContainer: React.FC = () => {
  const { cards, setCards } = useCards();

  const { groupedCards } = useGroupCards(cards);

  return (
    <div className="flex w-full px-4 h-full">
      <CardList
        type={CardListOptions.TODO}
        currentCards={groupedCards.TODO}
        allCards={cards}
        setCards={setCards}
        shouldShowAddButton
        nextList={CardListOptions.DOING}
      />
      <CardList
        type={CardListOptions.DOING}
        currentCards={groupedCards.DOING}
        allCards={cards}
        setCards={setCards}
        nextList={CardListOptions.DONE}
        previousList={CardListOptions.TODO}
      />
      <CardList
        type={CardListOptions.DONE}
        currentCards={groupedCards.DONE}
        allCards={cards}
        setCards={setCards}
        previousList={CardListOptions.DOING}
      />
    </div>
  );
};
