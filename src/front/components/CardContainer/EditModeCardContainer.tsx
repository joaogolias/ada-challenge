'use client';

import { Card, IconButton, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CardModel } from '@/models/CardModel';
import { useState } from 'react';

interface Props {
  card?: CardModel;
  onSave?: (card: CardModel) => void;
  onClose: () => void;
}

const isCardValid = (card: CardModel) => Boolean(card.titulo && card.conteudo);

export const EditModeCardContainer: React.FC<Props> = ({
  card,
  onSave,
  onClose,
}) => {
  const [cardToSave, setCardToSave] = useState<CardModel>(
    card || new CardModel()
  );
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(
    isCardValid(cardToSave)
  );

  const updateContent = (content: string) => {
    const updatedCard = { ...cardToSave, conteudo: content };
    setCardToSave(updatedCard);
    setIsSaveButtonEnabled(isCardValid(updatedCard));
  };

  const updateTitle = (title: string) => {
    const updatedCard = { ...cardToSave, titulo: title };
    setCardToSave(updatedCard);
    setIsSaveButtonEnabled(isCardValid(updatedCard));
  };

  const saveCard = () => {
    onSave?.(cardToSave);
    onClose();
  };

  return (
    <Card className="p-2">
      <div className="flex justify-between border-b-[2px] mb-4 pb-2">
        <TextField
          id="outlined-multiline-flexible"
          label="Título"
          multiline
          maxRows={2}
          onChange={(e) => e.target && updateTitle(e.target.value)}
          defaultValue={card?.titulo}
        />
        <IconButton onClick={onClose} size="small" sx={{ ml: 2 }}>
          <CloseIcon sx={{ width: 32, height: 32 }} />
        </IconButton>
      </div>

      <div className="flex">
        <TextField
          id="outlined-multiline-flexible"
          label="Conteúdo"
          multiline
          maxRows={4}
          onChange={(e) => e.target && updateContent(e.target.value)}
          defaultValue={card?.conteudo}
        />
      </div>
      <Button
        onClick={saveCard}
        variant="outlined"
        className="mt-2"
        disabled={!isSaveButtonEnabled}
      >
        {' '}
        Salvar{' '}
      </Button>
    </Card>
  );
};
