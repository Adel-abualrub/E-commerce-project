import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstanse from '../api/axiosInstanse';
import useAuthStore from '../store/useAuthStore';

export default function useLogin() {
    const setToken=useAuthStore((state)=>state.setToken);
    const Navigate= useNavigate();
  return (
    useMutation({
mutationFn:async (values)=>{
    console.log("Hi")
    return  await axiosInstanse.post("auth/Account/Login", values);
},onSuccess:(response)=>{
  
   setToken(response.data.accessToken);
Navigate('/')
}

    })
  )
}
