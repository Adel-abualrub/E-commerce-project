import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material'; // إضافة Alert
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationSchema } from '../../validation/RegisterValidation';
import { Link } from 'react-router-dom';
export default function Signup() {





  const [Error, SetError] = useState(false);
  const { register, handleSubmit,formState :{errors} } = useForm({
resolver: yupResolver(ValidationSchema)


  });
  const SendData = async (values) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}auth/Account/Register`, values);
      console.log(response);
    } catch (error) {
      SetError(true);
      console.log(error, "error");
    }
  }

  return (
    <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
      <Typography component="h1" variant='h3'>Create your account </Typography>

      

      <Box component="form" onSubmit={handleSubmit(SendData)} sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
        <TextField {...register('email')}  error={!!errors.email} helperText={errors.email?.message} id="outlined-basic" label="Email" variant="outlined" sx={{ width: 600 }} />
        <TextField {...register('userName')}  error={!!errors.userName} helperText={errors.userName?.message} id="outlined-basic" label="UserName" variant="outlined" sx={{ width: 600 }} />
        <TextField {...register('fullName')} error={!!errors.fullName} helperText={errors.fullName?.message} id="outlined-basic" label="Full Name" variant="outlined" sx={{ width: 600 }} />
        <TextField {...register('password')} error={!!errors.password} helperText={errors.password?.message}  id="outlined-password-input" label="Password" type="password" autoComplete="current-password" sx={{ width: 600 }} />
        <TextField {...register('phoneNumber')} error={!!errors.phoneNumber} helperText={errors.phoneNumber?.message} id="outlined-basic" label="Phone Number" variant="outlined" type="tel" sx={{ width: 600 }} />
       <Button variant="contained" type='submit'>Register</Button>
<Typography component={Link} variant='a' to={'/login'}>Do you have an account?</Typography>
       
      </Box>
    </Box>
  );
}
