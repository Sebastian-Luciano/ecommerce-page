import { styled } from '@mui/material/styles';
import { Toolbar, Button } from '@mui/material';
import { BorderBottom, BorderColor } from '@mui/icons-material';

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'flex-start',
  },
}));

export const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.text.primary,
    backgroundColor: 'transparent',
  },
}));

export const MobileNavButton = styled(Button)(({ theme }) => ({
  display: 'block',
  textAlign: 'left',
  width: '100%',
  color: theme.palette.text.primary,
}));