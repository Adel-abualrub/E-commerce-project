import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import CartAxiosInstanse from '../api/cartAxiosInstanse'

export default function useUpdateQuantity() {
    const QueryClient=useQueryClient()
 const mutation=useMutation({
mutationFn:async({ProductId,NewCount})=>{
return await CartAxiosInstanse.patch(`Carts/${ProductId}`,{count:NewCount});


},
    onSuccess:()=>{
QueryClient.invalidateQueries({queryKey:['cart']})


    }

 });
 return mutation;
}
