import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import CartAxiosInstanse from "../api/cartAxiosInstanse";

export default function useClearCart() {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      return await CartAxiosInstanse.delete("Carts/clear");
    },
        onSuccess:()=>{
            QueryClient.invalidateQueries({
queryKey:['cart']


            })
        }
  });
}
