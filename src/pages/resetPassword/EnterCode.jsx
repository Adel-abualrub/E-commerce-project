import React from "react";
import useUpdatePaassword from "../../hook/useUpdatePaassword";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function EnterCode() {
  const { t } = useTranslation();
  const {
    mutate: checkPassword,
    isPending: pendingValidation,
    isError: ErrorInCode,
    error: ErrorType,
    isSuccess: CodeIsTrue,
  } = useUpdatePaassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

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
          {t('EnterCode')}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {t('EnterCodeSubtitle')}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(checkPassword)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}
        >
          <TextField
            {...register("email")}
            label={t('email')}
            value={localStorage.getItem("email")}
            fullWidth
            slotProps={{ input: { readOnly: true } }}
            disabled
          />

          <TextField
            {...register("code")}
            error={!!errors.code}
            helperText={errors.code?.message}
            label={t('Code')}
            fullWidth
          />

          <TextField
            {...register("newPassword")}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
            label={t('NewPassword')}
            type="password"
            autoComplete="new-password"
            fullWidth
          />

          {ErrorInCode && (
            <Alert severity="error">
              {ErrorType?.response?.data?.message || t('errorOcured')}
            </Alert>
          )}

          <Button variant="contained" type="submit" disabled={pendingValidation} size="large" fullWidth>
            {pendingValidation ? <CircularProgress size={24} /> : t('Verify')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}