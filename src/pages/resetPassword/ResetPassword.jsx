import React from 'react'
import useSendCode from '../../hook/useSendCode'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendCodeValidation } from '../../validation/SendCodeValidation';
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const navigation=useNavigate();
const {mutate:sendCode,isPending:PendingSendCode,isError:ErrorInEmail,error:ErrorType,isSuccess:SentEmailStatus}=useSendCode();
const {register,handleSubmit,getValues,formState:{errors,isSubmitting}}=useForm({
    resolver:yupResolver(SendCodeValidation)
})
let serverError='';
 if (ErrorInEmail) {
   serverError= (ErrorType.response.data.message);
  
  }
  

return <>
 <Box
      component="form"
     onSubmit={handleSubmit(sendCode)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Send Code</Typography>

      <TextField
    {...register("email")}
    error={!!errors.email}
    helperText={errors.email?.message}
        label="Email"
   
       
        sx={{ width: 500 }}
      />
 {serverError?.length > 0 && (
          <Box mt={2} color={"red"}>
            {<Typography>{serverError}</Typography>}
          </Box>
        )}
  <Button variant="contained" type="submit" disabled={PendingSendCode}>
        {PendingSendCode ? <CircularProgress size={24} /> : 'Send Code'}
      </Button>
    {
        SentEmailStatus&&(localStorage.setItem('email',getValues('email')), navigation('/enterCode'))
    }

    </Box>



</>
}
