import React from 'react';
import { Modal, Typography, Button, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../../hooks/useCart';
import CloseIcon from '@mui/icons-material/Close';
import { 
  ModalContent, 
  CartItem, 
  ItemImage, 
  ItemDetails, 
  DeleteButton 
} from './CartModal.styles';

export default function CartModal ({ open, onClose }) {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" component="h2" gutterBottom>
          Cart
        </Typography>
        {cart.length === 0 ? (
          <Typography>Your cart is empty</Typography>

        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.images[0].thumbnail} alt={item.name} />
                <ItemDetails>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body2">
                    ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </ItemDetails>
                <DeleteButton onClick={() => removeFromCart(item.id)}>
                  <DeleteIcon />
                </DeleteButton>
              </CartItem>
            ))}
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
              <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Checkout
              </Button>
            </Box>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}; 
