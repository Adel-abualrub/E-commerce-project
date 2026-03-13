import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import CartAxiosInstanse from "../api/cartAxiosInstanse";

export default function useCheckOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (PaymentMethod) => {
      return await CartAxiosInstanse.post("Checkouts", {PaymentMethod});
    },
    onSuccess: (response) => {
      console.log(response);
if(response.data.url){
    location.href=response.data.url;
}
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
}
