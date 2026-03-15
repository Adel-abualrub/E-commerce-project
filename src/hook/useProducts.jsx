import React from 'react'
import axiosInstanse from '../api/axiosInstanse'
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18next';

export default function useProducts() {
const getProducts= async()=>{
const response=await axiosInstanse.get('Products');

return response.data;

}
const { data, isLoading, isError, error }=useQuery({
queryKey:['products',i18n.language],
queryFn:getProducts,
staleTime: 1000*60*10


})
 return {data,isLoading,isError,error};
}
