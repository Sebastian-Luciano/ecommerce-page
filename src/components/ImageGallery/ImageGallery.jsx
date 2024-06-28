import React, { useState } from 'react';
import { Box, Grid, IconButton, Modal } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

  export default function ImageGallery ({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePrev = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box>
      <Box mb={2} onClick={handleOpen} style={{ cursor: 'pointer' }}>
        <img 
          src={images[selectedImage].full} 
          alt={`Product ${selectedImage + 1}`} 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={3} key={index}>
            <img
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                cursor: 'pointer',
                opacity: selectedImage === index ? 0.6 : 1,
                borderRadius: '8px',
                border: selectedImage === index ? '2px solid orange' : 'none',
              }}
              onClick={() => setSelectedImage(index)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <img 
            src={images[selectedImage].full} 
            alt={`Product ${selectedImage + 1}`} 
            style={{ width: '100%', height: 'auto' }}
          />
          <IconButton 
            onClick={handlePrev} 
            sx={{ position: 'absolute', left: 10, top: '50%' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton 
            onClick={handleNext} 
            sx={{ position: 'absolute', right: 10, top: '50%' }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Modal>
    </Box>
  );
};
