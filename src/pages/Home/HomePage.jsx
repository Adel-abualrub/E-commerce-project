import React from 'react';
import { Container, Box, Typography, Stack, Button, useTheme, useMediaQuery } from '@mui/material';
import Categores from '../../components/categores/Categores';
import Products from '../../components/products/Products';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { t } = useTranslation();
  

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

 
  const SectionTitle = ({ titleKey, sx }) => (
    <Stack 
      direction="row" 
      alignItems="center" 
      spacing={isMobile ? 1 : 2} 
      sx={{ mb: isMobile ? 3 : 5, ...sx }}
    >
      <Box 
        sx={{ 
          width: isMobile ? 12 : 20, 
          height: isMobile ? 24 : 40, 
          bgcolor: '#db4444', 
          borderRadius: 1 
        }} 
      />
      <Typography 
        variant={isMobile ? "subtitle1" : "h6"} 
        sx={{ color: '#db4444', fontWeight: 'bold' }}
      >
        {t(titleKey)}
      </Typography>
    </Stack>
  );

  return (
    <Container 
      maxWidth="lg" 
      component="main" 
      sx={{ 
        mt: isMobile ? 2 : 4, 
        mb: isMobile ? 6 : 10,
        px: isMobile ? 2 : 3 
      }}
    >
      
   
      <Box component="section" sx={{ mb: isMobile ? 5 : 8 }}>
        <SectionTitle titleKey="Categories" />
        <Categores />
      </Box>

  
      <Box component="section">
  
        <SectionTitle titleKey="Products" />
        
       
      

     
        <Products />

     
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: isMobile ? 5 : 8 
          }}
        >
          <Button component={Link}
          to={'/products'}
            variant="contained" 
            size={isMobile ? "medium" : "large"}
            sx={{ 
              bgcolor: '#db4444', 
              color: 'white',
              px: isMobile ? 4 : 6, 
              py: isMobile ? 1 : 1.5,
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#b33636', 
              },
            
            }}
          >
         
            {t('AllProducts')}
          </Button>
        </Box>
      </Box>

    </Container>
  );
}