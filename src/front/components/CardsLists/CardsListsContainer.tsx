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
        cards={groupedCards.TODO}
        setCards={setCards}
        shouldShowAddButton
      />
      <CardList
        type={CardListOptions.DOING}
        cards={groupedCards.DOING}
        setCards={setCards}
      />
      <CardList
        type={CardListOptions.DONE}
        cards={groupedCards.DONE}
        setCards={setCards}
      />
    </div>
  );
};
