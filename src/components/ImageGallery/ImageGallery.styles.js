import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const GalleryContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const MainImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const ThumbnailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const Thumbnail = styled('img')(({ theme, selected }) => ({
  width: 80,
  height: 80,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  border: selected ? `2px solid ${theme.palette.primary.main}` : 'none',
  opacity: selected ? 1 : 0.6,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
}));

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 600,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

export const ModalImage = styled('img')({
  width: '100%',
  height: 'auto',
});