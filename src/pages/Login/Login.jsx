import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationLoginSchema } from "../../validation/LoginValidation";
import axiosInstanse from "../../api/axiosInstanse";
import useAuthStore from "../../store/useAuthStore";
import sideImage from "./../../imgs/AuthImg/SideImage.png";
import useLogin from "../../hook/useLogin";
import { useTranslation } from "react-i18next";


export default function Login() {
  const {t}=useTranslation()
  


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ValidationLoginSchema),
    mode: "onBlur",
  });

const {mutate:LogIn,isError:IsErrorInLogIn,error:errorInLogIn}=useLogin();  

 

  return (
    <Box sx={{ display: "flex", gap: 3, py: 3 }}>

     
      <Card sx={{ display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
        <CardMedia component="img" image={sideImage} />
      </Card>

    
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        maxWidth: 600,
        margin: "auto",
        padding: 3,
      }}>

        <Typography component="h1" variant="h3" align="center">
         {t('LogInToYourAccount')}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
         {t("Enteryourdetailsbelow")}
        </Typography>

        <Box
          component="form"
         onSubmit={handleSubmit(LogIn)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            width: "100%",
          }}
        >
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
            type="password"
            autoComplete="current-password"
            fullWidth
            sx={{ maxWidth: 600 }}
          />
{IsErrorInLogIn &&(
    <Alert severity="error">
    {errorInLogIn?.response?.data?.message || t('errorOcured')}
    </Alert>
)


}
      

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
            sx={{ width: "100%", maxWidth: 600 }}
          >
            {isSubmitting ? <CircularProgress size={24} /> : t("Login")}
          </Button>

          <Typography variant="body2" color="text.secondary">
            {t('DontHaveAccount')}
            <Link to="/signup">{t('Signup')}</Link>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Link to="/resetPassword">{t('ForgetPassword')}</Link>
          </Typography>

        </Box>
      </Box>

    </Box>
  );
}