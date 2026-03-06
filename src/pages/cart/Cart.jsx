import React from 'react'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CartAxiosInstanse from '../../api/cartAxiosInstanse';
import useCart from '../../hook/useCart';
import useAuthStore from './../../store/useAuthStore';



export default function Cart() {
  
  const token=useAuthStore((state)=>state.token);
 const {data,isLoading,isError,error}=useCart();
console.log("Hi")


  return (
   
   <>
    {console.log(data)}
   Hi you are in cart
   </>
    
  )
}
