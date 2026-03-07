import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import CartAxiosInstanse from '../api/cartAxiosInstanse'

export default function useDeleteFromCart() {
    const queryClient=useQueryClient();
  return useMutation (
    {
        mutationFn:async (id)=>{
const response= await CartAxiosInstanse.delete(`Carts/${id}`);

        },
        onSuccess:()=>{
            queryClient.invalidateQueries({
queryKey:['cart']


            })
        }
    }
  )
}
