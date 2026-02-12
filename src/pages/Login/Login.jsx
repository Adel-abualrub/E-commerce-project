import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material"; // إضافة Alert
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ValidationLoginSchema } from "../../validation/LoginValidation";
export default function Login() {
  const [ServerError, SetServerError] = useState("");
  const [Error, SetError] = useState(false);
  const SendLoginData = async (values) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}auth/Account/Login`,
        values,
      );
    } catch (error) {
      if (error.status === 500 || error.status === 404) SetError(true);
      else if (error.status === 400) {
        SetServerError(error.response.data.message);
      }
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(ValidationLoginSchema),mode:"onBlur"
  });

  if (Error) {
    return <Box color="red">Something went wrong. Please try again later.</Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h3">
        Login to your account{" "}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(SendLoginData)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
        }}
      >
        <TextField
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: 600 }}
        />

        <TextField
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ width: 600 }}
        />

        {ServerError?.length > 0 && (
          <Box mt={2} color={"red"}>
            {<Typography>{ServerError}</Typography>}
          </Box>
        )}

        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting?<CircularProgress /> : "Login"}
        </Button>
        <Typography component={Link} variant="a" to={"/signup"}>
          Dont Have an account?sign up now
        </Typography>
      </Box>
    </Box>
  );
}
