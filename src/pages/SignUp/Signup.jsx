import React, { useState, useTransition } from 'react';
import { Box, Button, TextField, Typography, Alert, CircularProgress, CardMedia, Card } from '@mui/material'; // إضافة Alert
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidationSchema } from '../../validation/RegisterValidation';
import { Link } from 'react-router-dom';
import axiosInstanse from '../../api/axiosInstanse';
import sideImage from './../../imgs/AuthImg/SideImage.png';
import { useTranslation } from 'react-i18next';


export default function Signup() {
  const {t}=useTranslation();
  const [Error, SetError] = useState(false);
  const [ServerError,SetServerError]=useState([]);
  const { register, handleSubmit,formState :{errors,isSubmitting} } = useForm({
resolver: yupResolver(ValidationSchema),
mode:'onBlur'
  });
  const SendData = async (values) => {
    SetServerError([]);
    try {
      const response = await axiosInstanse.post('auth/Account/Register', values);
    
    } catch (error) {
      
    if(error.status===500||error.status===404)
     SetError(true);
     else if(error.status===400){
    
     SetServerError(error.response.data.errors);
     }
    
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
    <Box sx={{display:"flex", gap:3, py:3}}>
    
<Card sx={{display:{
  lg:'block',
md:'none',
sm:'none',
xs:'none'
}}} >
  <CardMedia component="img" image={sideImage} ></CardMedia>
</Card>

      <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography component="h1" variant="h3" align="center">{t("CreateAnAccount")}</Typography>
      <Typography variant="body1" color="text.secondary" align="center">{t("Enteryourdetailsbelow")}</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', width: '100%' }}>
      
        <TextField
          label={t("name")}
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 600 }}
        />

       
        <TextField
          label={t("email")}
          variant="outlined"
          fullWidth
          sx={{ maxWidth: 600 }}
        />

      
        <TextField
          label={t("password")}
          variant="outlined"
          type="password"
          fullWidth
          sx={{ maxWidth: 600 }}
        />

      
        <TextField
          label={t("phoneNumber")}
          variant="outlined"
          type="tel"
          fullWidth
          sx={{ maxWidth: 600 }}
        />

      
        {ServerError.length > 0 && (
          <Box mt={2} color="red">
            {ServerError.map((err) => (
              <Typography key={err}>{err}</Typography>
            ))}
          </Box>
        )}

       
        <Button variant="contained" color="primary" disabled={isSubmitting} type="submit" sx={{ width: '100%', maxWidth: 600 }}>
          {isSubmitting ? <CircularProgress size={24} /> : t('CreateAccount')}
        </Button>

     
        <Typography variant="body2" color="text.secondary">
          {t('HaveAccount')} <Link href="/login">{t('Login')}</Link>
        </Typography>
      </Box>
    </Box>


    </Box>
  );
  
}
