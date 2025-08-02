import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navibar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/home' },
    { text: 'Users', path: '/users' }, // caso você crie essa rota depois
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Minha App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={toggleDrawer(false)}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                <ListItemText primary={item.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
