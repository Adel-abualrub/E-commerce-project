import React from 'react';
import { Box, Typography, Stack, Paper, Container } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import i18n from '../../i18next';


export default function Profile() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const getStyle = (path) => {
    const isActive = pathname === path || (path === '/profile' && pathname === '/profile/');
    return {
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      p: 1.5,
      borderRadius: 2,
      textDecoration: 'none',
      fontWeight: isActive ? '700' : '500',
      color: isActive ? 'primary.main' : 'text.secondary',
      bgcolor: isActive ? (theme) => `${theme.palette.primary.main}10` : 'transparent',
      transition: '0.3s',
      '&:hover': {
        bgcolor: (theme) => isActive ? `${theme.palette.primary.main}15` : 'grey.100',
        color: 'primary.main',
      },
    };
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="900" mb={4}>
        {t('Profile')}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ width: { xs: '100%', md: '280px' }, flexShrink: 0 }}>
          <Stack spacing={1}>
            <Typography component={Link} to="/profile" sx={getStyle('/profile')}>
              <PersonOutlineIcon fontSize="small" />
              {t('AccountInfo')}
            </Typography>

            <Typography component={Link} to="/profile/orders" sx={getStyle('/profile/orders')}>
              <ShoppingBagOutlinedIcon fontSize="small" />
              {t('Orders')}
            </Typography>

            <Typography component={Link} to="/profile/settings" sx={getStyle('/profile/settings')}>
              <SettingsOutlinedIcon fontSize="small" />
              {t('Settings')}
            </Typography>
          </Stack>
        </Box>

        <Paper 
          elevation={0} 
          sx={{ 
            flexGrow: 1, 
            p: 4, 
            borderRadius: 4, 
            border: '1px solid', 
            borderColor: 'divider',
            minHeight: '400px',
            bgcolor: 'background.paper'
          }}
        >
          <Outlet />
        </Paper>
      </Box>
    </Container>
  );
}