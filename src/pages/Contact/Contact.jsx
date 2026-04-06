import React from "react";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SendSupportEmail } from "../../validation/SendSupportEmail";
import useSendSupportEmail from "../../hook/useSendSupportEmail";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(SendSupportEmail),
    mode: "onBlur",
  });
  const { sendEmail, loading } = useSendSupportEmail();

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", mt: 5, p: 4, borderRadius: 3, boxShadow: 3 }}>
      <Typography variant="h4" fontWeight="bold" mb={1}>{t('ContactUs')}</Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>{t('ContactSubtitle')}</Typography>

      <Box component="form" onSubmit={handleSubmit(sendEmail)} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>

        <TextField
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          label={t('FullName')}
          fullWidth
        />

        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          label={t('email')}
          type="email"
          fullWidth
        />

        <TextField
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          label={t('PhoneOptional')}
          type="tel"
          fullWidth
        />

        <TextField
          {...register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
          label={t('Message')}
          multiline
          rows={4}
          fullWidth
        />

        <Button type="submit" variant="contained" size="large" disabled={loading} fullWidth>
          {loading ? <CircularProgress size={24} /> : t('SendMessage')}
        </Button>

      </Box>
    </Box>
  );
}