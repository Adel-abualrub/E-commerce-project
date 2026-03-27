import { useQuery } from '@tanstack/react-query'
import React from 'react'
import CartAxiosInstanse from '../api/cartAxiosInstanse';
import i18n from '../i18next';

export default function useProfile() {

   const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Profile",i18n.language],
    queryFn: async ()=>{
        return await CartAxiosInstanse.get("Profile");
    },
    staleTime: 1000 * 60 * 10,
  });
  return { data, isLoading, isError, error };
   
  
}
