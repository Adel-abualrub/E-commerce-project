import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import axiosInstanse from '../api/axiosInstanse'
import i18n from '../i18next'

export default function useGetCategoryProducts(id) {

const  { data, isLoading, isError, error }=useQuery({
queryKey:['CategoryProducts',i18n.language,id],
queryFn:async()=>{
    return axiosInstanse.get(`Products/category/${id}`)
},
staleTime: 1000*60*10


})

  return  { data, isLoading, isError, error };
}
