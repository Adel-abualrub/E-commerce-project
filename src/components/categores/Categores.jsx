import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useCategores from '../../hook/useCategores';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Categories() {

const{data,isLoading,isError,error}=useCategores(100);
  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>



  return (
   
    <Box className="categories" py={3}>
      <Typography component={'h1'} variant='h3'>Categories </Typography>
      <Grid  container spacing={1}>
    


 {data.response.data.map(category =>
           <Grid item size={{xs:12,sm:6,md:4,lg:3}}> 
           <Card sx={{color:"red",justifyContent:'center',alignItems:'center',textAlign:'center'}}>
            
            <CardContent>
              <Typography component={'h3'} variant='h3'>
                
                {category.name} 
              </Typography>
            
            </CardContent>
            
            
            
            </Card></Grid>
      )}
         </Grid>
     
    </Box>
  )
}