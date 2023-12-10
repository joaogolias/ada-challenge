'use client';

import { useState } from 'react';
import { Card, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CardListOptions, CardModel } from '@/models/CardModel';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface Props {
  card: CardModel;
  onEditClick: () => void;
  onDeleteClick: () => void;
  onChangeList: (card: CardModel) => void;
  nextList?: CardListOptions;
  previousList?: CardListOptions;
}

export const ReadModeCardContainer: React.FC<Props> = ({
  card,
  onEditClick,
  onDeleteClick,
  onChangeList,
  nextList,
  previousList,
}) => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchor);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const onMenuEditOptionClick = () => {
    onEditClick();
    handleMenuClose();
  };

  const onMenuDeleteOptionClick = () => {
    onDeleteClick();
    handleMenuClose();
  };

  const onNextListClick = () => {
    if (nextList) {
      card.lista = nextList;
      onChangeList(card);
    }
  };

  const onPreviousListClick = () => {
    if (previousList) {
      card.lista = previousList;
      onChangeList(card);
    }
  };

  const parseMarkdown = (dirty: any) => ({
    __html: DOMPurify.sanitize(dirty),
  });

  return (
    <Card className="p-2">
      <div className="flex justify-between border-b-[2px] mb-4 pb-3">
        <Typography className="w-full self-center p-[14px]">
          {' '}
          {card.titulo}{' '}
        </Typography>
        <IconButton
          onClick={handleMenuClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={isMenuOpen ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? 'true' : undefined}
        >
          <MoreVertIcon sx={{ width: 32, height: 32 }} />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          id="account-menu"
          open={isMenuOpen}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={onMenuEditOptionClick} className="text-gray-700">
            <EditIcon />
            <Typography className="ml-2"> Editar </Typography>
          </MenuItem>

          <MenuItem onClick={onMenuDeleteOptionClick}>
            <div className="text-red-400 flex">
              <DeleteIcon />
              <Typography className="ml-2"> Deletar </Typography>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <div className="flex p-[14px]">
        <p dangerouslySetInnerHTML={parseMarkdown(marked(card.conteudo))} />
      </div>

      <div className="grid grid-cols-2 w-full">
        {previousList && (
          <div className={`justify-self-start col-start-1`}>
            <IconButton onClick={onPreviousListClick} size="medium">
              <KeyboardArrowLeftIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </div>
        )}

        {nextList && (
          <div className="justify-self-end col-start-2">
            <IconButton onClick={onNextListClick} size="medium">
              <KeyboardArrowRightIcon sx={{ width: 32, height: 32 }} />
            </IconButton>
          </div>
        )}
      </div>
    </Card>
  );
};
