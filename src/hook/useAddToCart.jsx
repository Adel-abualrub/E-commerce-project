import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import CartAxiosInstanse from "../api/cartAxiosInstanse";

export default function useAddToCart() {
    const QueryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ pId, count }) => {
      
      const response = await CartAxiosInstanse.post("Carts", {
        ProductId: pId,
        Count: count,
      });
    },onSuccess:()=>{
QueryClient.invalidateQueries({queryKey:['cart']})


    }
  });

  return mutation;
}
