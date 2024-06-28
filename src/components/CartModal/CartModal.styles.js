import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(40%, -85%)',
  width: '90%',
  maxWidth: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));

export const CartItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const ItemImage = styled('img')({
  width: 50,
  height: 50,
  objectFit: 'cover',
  marginRight: 16,
});

export const ItemDetails = styled(Box)({
  flexGrow: 1,
});

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.error.main,
}));