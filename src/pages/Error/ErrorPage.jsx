import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function ErrorPage() {
  const { t, i18n } = useTranslation();
  const error = useRouteError();
  const navigate = useNavigate();

console.log(error);
  const is404 = error?.status === 404;

  return (
    <Container sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      textAlign: 'center' 
    }}>
      <ErrorOutlineIcon sx={{ fontSize: 100, color: 'error.main', mb: 2 }} />
      
      <Typography variant="h2" fontWeight="bold" gutterBottom color="text.primary">
        {is404 ? "404" : t('ErrorTitle')}
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }} color="text.secondary">
         {t('PageNotFoundDesc') }
      </Typography>

     
 

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={() => navigate('/')}
          sx={{ fontWeight: 'bold' }}
        >
          {t('BackToHome')}
        </Button>
        
        <Button 
          variant="outlined" 
          color="inherit" 
          size="large"
          onClick={() => window.location.reload()}
        >
          {t('ReloadPage')}
        </Button>
      </Stack>
    </Container>
  );
}