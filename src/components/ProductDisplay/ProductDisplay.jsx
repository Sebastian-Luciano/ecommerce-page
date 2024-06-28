import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';
import thumb1 from '../../images/image-product-1-thumbnail.jpg';
import thumb2 from '../../images/image-product-2-thumbnail.jpg';
import thumb3 from '../../images/image-product-3-thumbnail.jpg';
import thumb4 from '../../images/image-product-4-thumbnail.jpg';
import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useCart } from '../../hooks/useCart.js';
import {  QuantityBox, AddToCartButton } from './ProductDisplay.styles';

import CartModal from '../CartModal/CartModal';  

const product = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are your perfect casual wear companion. 
  Featuring a durable rubber outer sole, they'll withstand everything the weather 
  can offer.`,
  price: 125.00,
  originalPrice: 250.00,
  discount: 50,
  images: [
    { full: image1, thumbnail: thumb1 },
    { full: image2, thumbnail: thumb2 },
    { full: image3, thumbnail: thumb3 },
    { full: image4, thumbnail: thumb4 }
  ]
};

export default function ProductDisplay() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const [cartOpen, setCartOpen] = useState(false);
  

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const handleAddToCart = () => {
    addToCart({ 
      id: product.id, 
      name: product.name,
      price: product.price,
      quantity: quantity,
      images: product.images  
    });
    
  };
  return (

    <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>

        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={12} md={6}>
          <ImageGallery images={product.images} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
            <Typography sx={{color:'text.secondary', fontWeight: 'bold'}} variant="overline" gutterBottom>
              Sneaker Company
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h5" component="p">
                ${product.price.toFixed(2)}
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ bgcolor: 'primary.light', color: 'primary.main', p: 0.5, borderRadius: 1, ml: 2 }}
              >
                {product.discount}%
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary', mb: 2 }}>
              ${product.originalPrice.toFixed(2)}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', mt: 2 }}>
              <QuantityBox>
                <IconButton onClick={() => handleQuantityChange(-1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ px: 2 }}>{quantity}</Typography>
                <IconButton onClick={() => handleQuantityChange(1)}>
                  <AddIcon />
                </IconButton>
              </QuantityBox>
              <AddToCartButton
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                onClick={handleAddToCart}
              >
                Add to cart
              </AddToCartButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      </Box>

  );
};
