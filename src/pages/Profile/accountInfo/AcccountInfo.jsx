import React from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Divider, 
  CircularProgress, 
  Alert, 
  Stack, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText 
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useProfile from '../../../hook/useProfile';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AbcIcon from '@mui/icons-material/Abc';

export default function AccountInfo() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 }}>
      <CircularProgress size={40} thickness={5} />
    </Box>
  );

  if (isError) return (
    <Alert severity="error" sx={{ borderRadius: 2, m: 2 }}>
      {error?.message || t('errorOcured')}
    </Alert>
  );

  const user = data?.data || {};

  return (
    <Box sx={{ p: 1 }}>
   
      <Stack direction="row" alignItems="center" spacing={3} mb={5}>
        <Avatar 
          sx={{ 
            width: 80, 
            height: 80, 
            bgcolor: 'primary.main',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            fontSize: '2.5rem',
            fontWeight: '900',
            textTransform: 'uppercase'
          }}
        >
          {user.fullName?.[0]}
        </Avatar>
        <Box>
          <Typography variant="h5" fontWeight="900" color="text.primary">
            {t('PersonalDetails')}
          </Typography>
         
        </Box>
      </Stack>

      <Divider sx={{ mb: 4 }} />

   
      <List sx={{ pt: 0 }}>
        
       
        <ListItem disableGutters sx={{ mb: 3, cursor: 'default' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'info.soft', color: 'info.main' }}>
              <AbcIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={t('fullName')} 
            secondary={user.fullName || '---'} 
            slotProps={{
              primary: { variant: 'subtitle2', fontWeight: '800', color: 'text.secondary', mb: 0.5 },
              secondary: { variant: 'body1', color: 'text.primary', fontWeight: '600' }
            }}
          />
        </ListItem>

       
        <ListItem disableGutters sx={{ mb: 3, cursor: 'default' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'error.soft', color: 'error.main' }}>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={t('email')} 
            secondary={user.email || '---'} 
            slotProps={{
              primary: { variant: 'subtitle2', fontWeight: '800', color: 'text.secondary', mb: 0.5 },
              secondary: { variant: 'body1', color: 'text.primary', fontWeight: '600' }
            }}
          />
        </ListItem>

        {/* Phone Number */}
        <ListItem disableGutters sx={{ mb: 3, cursor: 'default' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'warning.soft', color: 'warning.main' }}>
              <PhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={t('phoneNumber')} 
            secondary={user.phoneNumber || '---'} 
            slotProps={{
              primary: { variant: 'subtitle2', fontWeight: '800', color: 'text.secondary', mb: 0.5 },
              secondary: { variant: 'body1', color: 'text.primary', fontWeight: '600' }
            }}
          />
        </ListItem>

  
        <ListItem disableGutters sx={{ cursor: 'default' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'success.soft', color: 'success.main' }}>
              <LocationCityIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={t('City')} 
            secondary={user.city || t('NotSet')} 
            slotProps={{
              primary: { variant: 'subtitle2', fontWeight: '800', color: 'text.secondary', mb: 0.5 },
              secondary: { variant: 'body1', color: 'text.primary', fontWeight: '600' }
            }}
          />
        </ListItem>

      </List>
    </Box>
  );
}