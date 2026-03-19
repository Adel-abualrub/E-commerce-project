import { useMutation } from '@tanstack/react-query'
import React from 'react'
import axiosInstanse from '../api/axiosInstanse'

export default function useSendCode() {
  const mutation=useMutation({
mutationFn:async ({email})=>{
    return await axiosInstanse.post('auth/Account/SendCode',{email});
}

  })
  return mutation;
}
