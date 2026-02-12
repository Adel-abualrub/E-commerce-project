import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, CircularProgress } from '@mui/material'; // إضافة Alert
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationSchema } from '../../validation/RegisterValidation';
import { Link } from 'react-router-dom';

export default function Signup() {





  const [Error, SetError] = useState(false);
  const [ServerError,SetServerError]=useState([]);
  const { register, handleSubmit,formState :{errors,isSubmitting} } = useForm({
resolver: yupResolver(ValidationSchema),
mode:'onBlur'


  });
  const SendData = async (values) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BURL}auth/Account/Register`, values);
    
    } catch (error) {
      
    if(error.status===500||error.status===404)
     SetError(true);
     else if(error.status===400)
     SetServerError(error.response.data.errors);
    
    
    }
  }

if(Error){
return (
<Box color="red">
  Something went wrong. Please try again later.
</Box>

)

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
{
  ServerError?.length >0 &&(
    <Box mt={2} color={'red'}> 
   { ServerError.map((err)=><Typography>{err}</Typography>)}

    </Box>
  )  
}

       <Button variant="contained" disabled={isSubmitting} type='submit'> {isSubmitting?<CircularProgress/>:'Register'}</Button>
<Typography component={Link} variant='a' to={'/login'}>Do you have an account?</Typography>
       
      </Box>
    </Box>
  );
}
