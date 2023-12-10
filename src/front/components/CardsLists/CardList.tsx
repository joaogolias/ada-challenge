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
  allCards: CardModel[];
  currentCards: CardModel[];
  setCards: Dispatch<SetStateAction<CardModel[]>>;
  shouldShowAddButton?: boolean;
  nextList?: CardListOptions;
  previousList?: CardListOptions;
}

export const CardList: React.FC<Props> = ({
  type,
  allCards,
  currentCards,
  setCards,
  shouldShowAddButton,
  nextList,
  previousList,
}) => {
  const [isCreateCardModeOn, setIsCreateCardModeOn] = useState(false);
  const [cardToCreate, setCardToCreate] = useState<CardModel | undefined>();
  const [cardToDelete, setCardToDelete] = useState<CardModel | undefined>();
  const [cardToUpdate, setCardToUpdate] = useState<CardModel | undefined>();

  useCreateCard(allCards, setCards, cardToCreate);
  useDeleteCard(allCards, setCards, cardToDelete, setCardToDelete);
  useUpdateCard(allCards, setCards, cardToUpdate, setCardToUpdate);

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
    <div className="w-full h-full">
      <div className="text-center bg-cyan-200">
        <Typography> {type} </Typography>
      </div>
      <div className={`p-2 h-full ${nextList && 'border-r-[2px]'} bg-gray-50`}>
        {shouldShowAddButton && (
          <div className="w-full flex justify-center mb-2">
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
          <div className="mb-2">
            <EditModeCardContainer
              onSave={onCreateCard}
              onClose={turnCreateCardModeOff}
            />
          </div>
        )}
        {currentCards.map((card) => (
          <div key={card.id} className="mb-2">
            <CardContainer
              setCardToDelete={setCardToDelete}
              setCardToUpdate={setCardToUpdate}
              card={card}
              nextList={nextList}
              previousList={previousList}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
