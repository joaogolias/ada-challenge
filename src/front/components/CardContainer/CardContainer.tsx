'use client';

import { useState } from 'react';
import { ReadModeCardContainer } from './ReadModeCardContainer';
import { EditModeCardContainer } from './EditModeCardContainer';
import { CardModel } from '@/models/CardModel';

interface Props {
  card: CardModel;
  setCardToDelete: (card: CardModel) => void;
}

enum CardContainerMode {
  CREATE = 'CREATE',
  READ = 'READ',
  EDIT = 'EDIT',
}

export const CardContainer: React.FC<Props> = ({ card, setCardToDelete }) => {
  const [mode, setMode] = useState<CardContainerMode>(CardContainerMode.READ);

  const setEditMode = () => setMode(CardContainerMode.EDIT);
  const setReadMode = () => setMode(CardContainerMode.READ);

  const onDeleteCard = () => {
    setCardToDelete(card);
  };

  return (
    <>
      {mode === CardContainerMode.READ && (
        <ReadModeCardContainer
          card={card}
          onEditClick={setEditMode}
          onDeleteClick={onDeleteCard}
        />
      )}
      {mode === CardContainerMode.EDIT && (
        <EditModeCardContainer card={card} onClose={setReadMode} />
      )}
    </>
  );
};
