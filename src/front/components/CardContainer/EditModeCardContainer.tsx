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

export const EditModeCardContainer: React.FC<Props> = ({
  card,
  onSave,
  onClose,
}) => {
  const [newCard, setNewCard] = useState<CardModel>(card || new CardModel());

  const updateContent = (content: string) => {
    setNewCard({ ...newCard, conteudo: content });
  };

  const updateTitle = (title: string) => {
    setNewCard({ ...newCard, titulo: title });
  };

  const saveCard = () => {
    onSave?.(newCard);
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
          onChange={(e) => e.target?.value && updateTitle(e.target.value)}
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
          onChange={(e) => e.target?.value && updateContent(e.target.value)}
          defaultValue={card?.conteudo}
        />
      </div>
      <Button onClick={saveCard} variant="outlined" className="mt-2">
        {' '}
        Salvar{' '}
      </Button>
    </Card>
  );
};
