import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosInstanse from '../api/axiosInstanse'

export default function useUpdatePaassword() {
  return useMutation({
mutationFn: async()=>{
return await axiosInstanse.patch('auth/Account/ResetPassword',{});

}

  }) 
  
}
