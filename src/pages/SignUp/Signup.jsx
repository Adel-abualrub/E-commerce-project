import React, { useState, useTransition } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  CardMedia,
  Card,
} from "@mui/material"; // إضافة Alert
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchema } from "../../validation/RegisterValidation";
import { Link } from "react-router-dom";
import axiosInstanse from "../../api/axiosInstanse";
import sideImage from "./../../imgs/AuthImg/SideImage.png";
import { useTranslation } from "react-i18next";
import useSignUp from "../../hook/useSignUp";
import useAuthStore from "../../store/useAuthStore";

export default function Signup() {
  const { t } = useTranslation();
   const LogOut = useAuthStore((state) => state.LogOut);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ValidationSchema),
    mode: "onBlur",
  });

  const {
    mutate: sendData,
    isPending: LoadingSignUp,
    isError: IsErrorSignUp,
    error: ErrorInSignUp,
  } = useSignUp(t);

  const onSubmit = (data) => {
    sendData(data);
  };
if(IsErrorSignUp){
  console.log(ErrorInSignUp.response.request);
}
  return (
    <Box sx={{ display: "flex", gap: 3, py: 3 }}>
      <Card
        sx={{
          display: {
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <CardMedia component="img" image={sideImage}></CardMedia>
      </Card>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 600,
          margin: "auto",
          padding: 3,
        }}
      >
        <Typography component="h1" variant="h3" align="center">
          {t("CreateAnAccount")}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          {t("Enteryourdetailsbelow")}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            {...register("userName")}
            error={!!errors.userName}
            helperText={errors.userName?.message}
            label={t("UserName")}
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 600 }}
          />
          <TextField
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            label={t("fullName")}
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 600 }}
          />

          <TextField
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            label={t("email")}
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 600 }}
          />

          <TextField
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            label={t("password")}
            variant="outlined"
            type="password"
            fullWidth
            sx={{ maxWidth: 600 }}
          />

          <TextField
            {...register("phoneNumber")}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            label={t("phoneNumber")}
            variant="outlined"
            type="tel"
            fullWidth
            sx={{ maxWidth: 600 }}
          />

         

         {IsErrorSignUp && (
  <Alert severity="error">
    {ErrorInSignUp?.response?.data?.errors?.map((err) => (
      <Typography key={err}>{err}</Typography>
    ))}
  </Alert>
)}
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            type="submit"
            sx={{ width: "100%", maxWidth: 600 }}
          >
            {LoadingSignUp ? (
              <CircularProgress size={24} />
            ) : (
              t("CreateAccount")
            )}
          </Button>

          <Typography variant="body2" color="text.secondary">
            {t("HaveAccount")} <Link to="/login">{t("Login")}</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
