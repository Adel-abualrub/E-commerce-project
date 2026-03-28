import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ChangePasswordValidation } from './../../../validation/ChangePasswordValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useChangePasssword from '../../../hook/useChangePasssword';

export default function ChangePassword() {
  const { t } = useTranslation();
 const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangePasswordValidation),
    mode: 'onChange'
  });
  const {mutate:ChangePass,isPending: pendingChangePassword, isError: isErrorInChangePassword, error: ErrorInChangePassword}=useChangePasssword();
  if(isErrorInChangePassword){
   console.log(ErrorInChangePassword);
console.log(ErrorInChangePassword?.response);
console.log(ErrorInChangePassword?.message);
  }
  return (
    <Box 
    
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      alignItems: 'center',
      width: '100%',
      maxWidth: 500,
      padding: 4,
      borderRadius: 3,
      boxShadow: 3,
      margin: 'auto',
      mt: 5,
    }}>

      <Typography component="h1" variant="h5" fontWeight="bold">
        {t('ChangePassword')}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {t('ChangePasswordSubtitle')}
      </Typography>

      <Box component="form"  onSubmit={handleSubmit(ChangePass)} sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>

        <TextField
        {...register('CurrentPassword')}
          error={!!errors.CurrentPassword}
          helperText={errors.CurrentPassword?.message}
          label={t('CurrentPassword')}
          type="password"
          variant="outlined"
          fullWidth
        />

        <TextField
         {...register('NewPassword')}
         error={!!errors.NewPassword}
         helperText={errors.NewPassword?.message}
          label={t('NewPassword')}
          type="password"
          variant="outlined"
          fullWidth
        />

        <TextField
        {...register('ConfirmNewPassword')}
         error={!!errors.ConfirmNewPassword}
         helperText={errors.ConfirmNewPassword?.message}
          label={t('ConfirmPassword')}
          type="password"
          variant="outlined"
          fullWidth
        />

        <Button type="submit" variant="contained" size="large" fullWidth>
          {t('ChangePassword')}
        </Button>

      </Box>
    </Box>
  );
}