import axios from 'axios'
import React from 'react'
import axiosInstanse from '../api/axiosInstanse'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18next';

export default function useProductDetails(id) {
  const getProductDetails= async()=>{
const response=await axiosInstanse.get(`Products/${id}`);
return response.data;

  }
   const { data, isLoading, isError, error }=useQuery({

  queryKey: ['details',i18n.language,id],
    queryFn: getProductDetails,
    staleTime: 1000*60*10

   });
   return  { data, isLoading, isError, error };
}
