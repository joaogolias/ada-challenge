'use client';

import { useState } from 'react';
import { ReadModeCardContainer } from './ReadModeCardContainer';
import { EditModeCardContainer } from './EditModeCardContainer';
import { CardModel } from '@/models/CardModel';

enum CardContainerMode {
  CREATE = 'CREATE',
  READ = 'READ',
  EDIT = 'EDIT',
}

export const CardContainer: React.FC = () => {
  const card: CardModel = {
    id: '',
    titulo: 'Titulo 1',
    conteudo: 'Conteudo 1',
    lista: 'todo',
  };

  const [mode, setMode] = useState<CardContainerMode>(CardContainerMode.READ);

  const setEditMode = () => setMode(CardContainerMode.EDIT);
  const setReadMode = () => setMode(CardContainerMode.READ);

  return (
    <>
      {mode === CardContainerMode.READ && (
        <ReadModeCardContainer card={card} onEditClick={setEditMode} />
      )}
      {mode === CardContainerMode.EDIT && (
        <EditModeCardContainer card={card} onClose={setReadMode} />
      )}
    </>
  );
};
