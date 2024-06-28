import React, { useState } from 'react';

import NavBar from './components/NavBar/NavBar';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import CartModal from './components/CartModal/CartModal';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './styles/theme';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ padding:'20px', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <NavBar onCartClick={() => setIsCartOpen(true)} />
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <ProductDisplay />
        </Box>
        <CartModal 
          open={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
        </Box>
    </ThemeProvider>
  );
}
