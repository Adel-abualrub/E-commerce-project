import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button, IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import useAuthStore from '../../store/useAuthStore';
import SearchBar from '../SearchBar/SearchBar';

export default function Footer() {
  const { t } = useTranslation();
  const token = useAuthStore((state) => state.token);

  const disabledLinkStyle = {
    display: 'block',
    mb: 1,
    cursor: 'default',
    pointerEvents: 'none',
    opacity: 0.8,
  };

  return (
    <Box
      sx={{
        pt: 7,
        pb: 3,
        mt: 8,
        borderTop: '1px solid #2b2b2b'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#db4444' }}>
              {t('Exclusive')}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {t('ServiceDeliveryDesc')}
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
             <SearchBar></SearchBar>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>{t('ServiceSupportTitle')}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>adelbassam5201@gmail.com</Typography>
            <Typography variant="body2">+972 569 549873</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>{t('Profile')}</Typography>
            <Link component={RouterLink} to={'/profile'} color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>{t('Profile')}</Link>
            {!token && <Link component={RouterLink} to={'/login'} color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>{t('Login')}</Link>}
            <Link component={RouterLink} color="inherit" to={'/cart'} underline="hover" sx={{ display: 'block', mb: 1 }}>{t('Cart')}</Link>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>{t('QuickLink') || t('Categories')}</Typography>
            <Link component={RouterLink} underline="none" to={''} color="inherit" sx={disabledLinkStyle}>{t('ServiceMoneyBackTitle')}</Link>
            <Link component={RouterLink} underline="none" to={''} color="inherit" sx={disabledLinkStyle}>{t('About')}</Link>
            <Link component={RouterLink} underline="none" to={''} color="inherit" sx={disabledLinkStyle}>{t('FAQ') || 'FAQ'}</Link>
            <Link component={RouterLink} to={'/contact'} color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>{t('Contact')}</Link>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>{t('ContactUs')}</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton component="a" href="https://www.facebook.com/adel.bassam.169" color="inherit"><FacebookIcon /></IconButton>
              <IconButton component="a" href="https://www.instagram.com/adel_abualrub/" color="inherit"><InstagramIcon /></IconButton>
              <IconButton component="a" href="https://www.linkedin.com/in/adel-abualrub-51984a319/" color="inherit"><LinkedInIcon /></IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid #2b2b2b', mt: 5, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#555' }}>
            © Copyright Adel_Abualrub 2026. All right reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}