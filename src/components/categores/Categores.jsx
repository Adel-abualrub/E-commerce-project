import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useCategores from '../../hook/useCategores';

export default function Categories() {

const{data,isLoading,isError,error}=useCategores();
  if (isLoading) return <CircularProgress />
  if (isError) return <Box color={'red'}>{error.message}</Box>

  

  return (
    <Box>
      {data.response.map(category =>
        <Box>{category.name}</Box>
      )}
    </Box>
  )
}