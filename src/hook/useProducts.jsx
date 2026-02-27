import React from 'react'
import axiosInstanse from '../api/axiosInstanse'
import { useQuery } from '@tanstack/react-query';

export default function useProducts() {
const getProducts= async()=>{
const response=await axiosInstanse.get('Products');

return response.data;

}
const { data, isLoading, isError, error }=useQuery({
queryKey:['products','en'],
queryFn:getProducts,
staleTime: 1000*60*10


})
 return {data,isLoading,isError,error};
}
