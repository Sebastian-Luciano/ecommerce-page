import React, { useState } from 'react';
import { AppBar, IconButton, Badge, Avatar, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledToolbar, NavButton } from './NavBar.styles';
import { useCart } from '../../hooks/useCart';
import avatar from '../../images/image-avatar.png'
import logo from '../../images/logo.svg'
  export default function NavBar ({ onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '50%' }}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box variant="h6" component="div" sx={{ flexGrow: 0, mr: 4 }}>
          <img src={logo} alt="logo" />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1 }}>
          {navItems.map((item) => (
            <NavButton key={item} color="inherit">
              {item}
            </NavButton>
          ))}
        </Box>
        <IconButton color="inherit" onClick={onCartClick}>
          <Badge badgeContent={cart.reduce((sum, item) => sum + item.quantity, 0)} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Avatar alt="Usuario" src={avatar} sx={{ ml: 2 }} />
      </StyledToolbar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '50%' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};
