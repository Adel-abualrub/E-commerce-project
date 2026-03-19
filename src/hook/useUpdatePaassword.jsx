import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosInstanse from '../api/axiosInstanse'
import { Navigate, useNavigate } from 'react-router-dom';

export default function useUpdatePaassword() {
  const Navigate=useNavigate();
  return useMutation({
mutationFn: async({ code, newPassword, email })=>{
return await axiosInstanse.patch('auth/Account/ResetPassword',{code,newPassword,email});

},onSuccess:()=>{
  
    localStorage.removeItem('email');
  Navigate('/login')
},


  }) 
  
}
