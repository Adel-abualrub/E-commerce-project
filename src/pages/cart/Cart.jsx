import React from 'react'

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CartAxiosInstanse from '../../api/cartAxiosInstanse';
import useCart from '../../hook/useCart';



export default function Cart() {
 const {data,isLoading,isError,error}=useCart();
console.log(data);
  return (
    
   <>
   
   </>
    
  )
}
