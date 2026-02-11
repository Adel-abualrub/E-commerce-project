import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material'; // إضافة Alert

import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
  import { ValidationLoginSchema } from '../../validation/LoginValidation';

export default function Login() {


const SendLoginData=async (values)=>{
  try{
const response=await axios.post(`${import.meta.env.VITE_BURL}auth/Account/Login`,values);
  }
  catch(error){
    console.log(error);
  }
}
const {register,handleSubmit, formState:{errors}}=useForm({
resolver: yupResolver(ValidationLoginSchema)

});

  return (
   
    <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
      <Typography component="h1" variant='h3'>Login to your account </Typography>

      

      <Box component="form" onSubmit={handleSubmit(SendLoginData)}  sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
        <TextField {...register('email')} error={!!errors.email} helperText={errors.email?.message}  id="outlined-basic" label="Email" variant="outlined" sx={{ width: 600 }} />

        <TextField {...register('password')}  error={!!errors.password} helperText={errors.password?.message} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" sx={{ width: 600 }} />
     
       <Button variant="contained" type='submit'>lOGIN</Button>
<Typography component={Link} variant='a' to={'/signup'}>Dont Have an account?sign up now</Typography>
       
      </Box>
    </Box>
  )
}
