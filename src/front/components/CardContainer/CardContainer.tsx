'use client';

import { useState } from 'react';
import { ReadModeCardContainer } from './ReadModeCardContainer';
import { EditModeCardContainer } from './EditModeCardContainer';
import { CardListOptions, CardModel } from '@/models/CardModel';

interface Props {
  card: CardModel;
  setCardToDelete: (card: CardModel) => void;
  setCardToUpdate: (card: CardModel) => void;
  nextList?: CardListOptions;
  previousList?: CardListOptions;
}

enum CardContainerMode {
  CREATE = 'CREATE',
  READ = 'READ',
  EDIT = 'EDIT',
}

export const CardContainer: React.FC<Props> = ({
  card,
  setCardToDelete,
  setCardToUpdate,
  nextList,
  previousList,
}) => {
  const [mode, setMode] = useState<CardContainerMode>(CardContainerMode.READ);

  const setEditMode = () => setMode(CardContainerMode.EDIT);
  const setReadMode = () => setMode(CardContainerMode.READ);

  const onDeleteCard = () => {
    setCardToDelete(card);
  };

  const onUpdateCard = (updatedCard: CardModel) => {
    setCardToUpdate(updatedCard);
  };

  return (
    <>
      {mode === CardContainerMode.READ && (
        <ReadModeCardContainer
          card={card}
          onEditClick={setEditMode}
          onDeleteClick={onDeleteCard}
          onChangeList={onUpdateCard}
          nextList={nextList}
          previousList={previousList}
        />
      )}
      {mode === CardContainerMode.EDIT && (
        <EditModeCardContainer
          card={card}
          onClose={setReadMode}
          onSave={onUpdateCard}
        />
      )}
    </>
  );
};
