import React from 'react'
import useSendCode from '../../hook/useSendCode'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendCodeValidation } from '../../validation/SendCodeValidation';
import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ResetPassword() {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const { mutate: sendCode, isPending: PendingSendCode, isError: ErrorInEmail, error: ErrorType, isSuccess: SentEmailStatus } = useSendCode();
  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
    resolver: yupResolver(SendCodeValidation)
  });

  if (SentEmailStatus) {
    localStorage.setItem('email', getValues('email'));
    navigation('/enterCode');
  }

  return (
    <Box sx={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
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
      }}>
        <Typography component="h1" variant="h4" fontWeight="bold">
          {t('ResetPassword')}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {t('ResetPasswordSubtitle')}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(sendCode)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}
        >
          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            label={t('email')}
            variant="outlined"
            fullWidth
          />

          {ErrorInEmail && (
            <Alert severity="error">
              {ErrorType?.response?.data?.message || t('errorOcured')}
            </Alert>
          )}

          <Button variant="contained" type="submit" disabled={PendingSendCode} size="large" fullWidth>
            {PendingSendCode ? <CircularProgress size={24} /> : t('SendCode')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}