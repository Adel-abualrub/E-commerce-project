import { useMutation } from '@tanstack/react-query'
import React from 'react'
import CartAxiosInstanse from '../api/cartAxiosInstanse'
import Swal from "sweetalert2";
export default function useAddRating() {
  return useMutation({
mutationFn:async ({Rating,Comment,id})=>{
return await CartAxiosInstanse.post(`Products/${id}/reviews`,{Rating,Comment});

},onSuccess:()=>{
  return Swal.fire({
  title: "Your review has been successfully added",
  text: "Thank you",
  icon: "success"
});
  
}


  })
  
}
