import React from 'react'
import useChangeEmail from '../../../hook/useChangeEmail'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendCodeValidation } from '../../../validation/SendCodeValidation';
import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ChangeEmailValidation } from '../../../validation/ChangeEmailValidation';

export default function ChangeEmail() {
  const { t } = useTranslation();
  const { mutate: ChangeEmail, isPending: pendingChangeEmail, isError: isErrorInChangeEmail, error: ErrorInChangeEmail } = useChangeEmail();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ChangeEmailValidation),
    mode: 'onBlur'
  });
if(isErrorInChangeEmail){
    console.log(ErrorInChangeEmail.response)
}
  return (
    <Box sx={{
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
        {t('ChangeEmail')}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {t('ChangeEmailSubtitle')}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(ChangeEmail)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}
      >
        <TextField
          {...register('NewEmail')}
          error={!!errors.NewEmail}
          helperText={errors.NewEmail?.message}
          label={t('NewEmail')}
          variant="outlined"
          fullWidth
        />

        {isErrorInChangeEmail && (
          <Alert severity="error">
            {ErrorInChangeEmail?.response?.data?.message || t('errorOcured')}
          </Alert>
        )}

        <Button
          variant="contained"
          type="submit"
          disabled={pendingChangeEmail}
          size="large"
          fullWidth
        >
          {pendingChangeEmail ? <CircularProgress size={24} /> : t('ChangeEmail')}
        </Button>

      </Box>
    </Box>
  );
}