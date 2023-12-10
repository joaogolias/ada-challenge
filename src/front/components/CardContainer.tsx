'use client';

import { useState } from 'react';
import { Card, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const CardContainer: React.FC = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchor);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Card className="p-2">
      <div className="flex justify-between border-b-[2px] mb-2">
        <Typography className="w-full self-center"> Título </Typography>
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
          <MenuItem onClick={handleMenuClose} className="text-gray-700">
            <EditIcon />
            <Typography className="ml-2"> Editar </Typography>
          </MenuItem>

          <MenuItem onClick={handleMenuClose} className="text-red-400">
            <DeleteIcon />
            <Typography className="ml-2"> Deletar </Typography>
          </MenuItem>
        </Menu>
      </div>

      <div className="flex">
        <Typography className=""> Conteúdo</Typography>
      </div>
    </Card>
  );
};
