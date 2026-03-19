import React from "react";
import useUpdatePaassword from "../../hook/useUpdatePaassword";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

export default function EnterCode() {
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
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({});
  let serverError = "";
  if (ErrorInCode) {
    serverError = ErrorType.response.data.message;
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(checkPassword)}
      sx={{ py: 3, display: "flex", flexDirection: "column", gap: 1 }}
    >
      <TextField
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        label="Email"
        value={localStorage.getItem("email")}
        sx={{ width: 500 }}
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
        disabled
      />

      <TextField
        {...register("code")}
        error={!!errors.code}
        helperText={errors.code?.message}
        label="validation code"
        sx={{ width: 500 }}
      />

      <TextField
        {...register("newPassword")}
        error={!!errors.newPassword}
        helperText={errors.newPassword?.message}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        sx={{ width: 600 }}
      />
      {serverError?.length > 0 && (
        <Box mt={2} color={"red"}>
          {<Typography>{serverError}</Typography>}
        </Box>
      )}
      <Button variant="contained" type="submit" disabled={pendingValidation}>
        {pendingValidation ? <CircularProgress size={24} /> : "Send Code"}
      </Button>
    </Box>
  );
}
