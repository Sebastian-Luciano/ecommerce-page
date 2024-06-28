import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const ProductContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

export const QuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    marginBottom: 0,
  },
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));