import { CardListOptions, CardModel } from '@/models/CardModel';
import { Button, Typography } from '@mui/material';
import { CardContainer } from '../CardContainer/CardContainer';
import { Dispatch, SetStateAction, useState } from 'react';
import { EditModeCardContainer } from '../CardContainer/EditModeCardContainer';
import { useCreateCard } from '@/hooks/useCreateCard';
import { useDeleteCard } from '@/hooks/useDeleteCard';

interface Props {
  type: CardListOptions;
  cards: CardModel[];
  setCards: Dispatch<SetStateAction<CardModel[]>>;
  shouldShowAddButton?: boolean;
}

export const CardList: React.FC<Props> = ({
  type,
  cards,
  setCards,
  shouldShowAddButton,
}) => {
  const [isCreateCardModeOn, setIsCreateCardModeOn] = useState(false);
  const [newCard, setCard] = useState<CardModel | undefined>();
  const [cardToDelete, setCardToDelete] = useState<CardModel | undefined>();

  useCreateCard(cards, setCards, newCard);
  useDeleteCard(cards, setCards, cardToDelete, setCardToDelete);

  const turnCreateCardModeOn = () => {
    setIsCreateCardModeOn(true);
  };

  const turnCreateCardModeOff = () => {
    setIsCreateCardModeOn(false);
  };

  const onCreateCard = (card: CardModel) => {
    setCard(card);
  };

  return (
    <div className="w-full h-full border-r-[2px] pr-2 mr-2">
      <Typography className="mb-4 text-center"> {type} </Typography>
      {shouldShowAddButton && (
        <div className="w-full flex justify-center">
          <Button
            variant="outlined"
            className="mt-2"
            onClick={turnCreateCardModeOn}
          >
            Adicionar card
          </Button>
        </div>
      )}
      {isCreateCardModeOn && (
        <EditModeCardContainer
          onSave={onCreateCard}
          onClose={turnCreateCardModeOff}
        />
      )}
      {cards.map((card) => (
        <div key={card.id} className="mb-2">
          <CardContainer setCardToDelete={setCardToDelete} card={card} />
        </div>
      ))}
    </div>
  );
};
