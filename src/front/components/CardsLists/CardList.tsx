import { CardListOptions, CardModel } from '@/models/CardModel';
import { Button, Typography } from '@mui/material';
import { CardContainer } from '../CardContainer/CardContainer';
import { Dispatch, SetStateAction, useState } from 'react';
import { EditModeCardContainer } from '../CardContainer/EditModeCardContainer';
import { useCreateCard } from '@/hooks/useCreateCard';
import { useDeleteCard } from '@/hooks/useDeleteCard';
import { useUpdateCard } from '@/hooks/useUpdateCard';

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
  const [cardToCreate, setCardToCreate] = useState<CardModel | undefined>();
  const [cardToDelete, setCardToDelete] = useState<CardModel | undefined>();
  const [cardToUpdate, setCardToUpdate] = useState<CardModel | undefined>();

  useCreateCard(cards, setCards, cardToCreate);
  useDeleteCard(cards, setCards, cardToDelete, setCardToDelete);
  useUpdateCard(cards, setCards, cardToUpdate);

  const turnCreateCardModeOn = () => {
    setIsCreateCardModeOn(true);
  };

  const turnCreateCardModeOff = () => {
    setIsCreateCardModeOn(false);
  };

  const onCreateCard = (card: CardModel) => {
    setCardToCreate(card);
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
          <CardContainer
            setCardToDelete={setCardToDelete}
            setCardToUpdate={setCardToUpdate}
            card={card}
          />
        </div>
      ))}
    </div>
  );
};
