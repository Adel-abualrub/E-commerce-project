import { useMutation } from "@tanstack/react-query";
import React from "react";
import CartAxiosInstanse from "../api/cartAxiosInstanse";

export default function useAddToCart() {
    
  const mutation = useMutation({
    mutationFn: async ({ pId, count }) => {
        console.log(localStorage.getItem("AccessToken"));
      const response = await CartAxiosInstanse.post("Carts", {
        ProductId: pId,
        Count: count,
      });
    },
  });

  return mutation;
}
