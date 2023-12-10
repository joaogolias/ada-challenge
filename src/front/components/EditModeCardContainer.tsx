'use client';

import { Card, IconButton, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CardModel } from '@/models/CardModel';

interface Props {
  card: CardModel;
  onClose: () => void;
}
export const EditModeCardContainer: React.FC<Props> = ({ card, onClose }) => {
  return (
    <Card className="p-2">
      <div className="flex justify-between border-b-[2px] mb-4 pb-2">
        <TextField
          id="outlined-multiline-flexible"
          label="Título"
          multiline
          maxRows={2}
          defaultValue={card.titulo}
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
          defaultValue={card.conteudo}
        />
      </div>
      <Button onClick={onClose} variant="outlined" className="mt-2">
        {' '}
        Salvar{' '}
      </Button>
    </Card>
  );
};
