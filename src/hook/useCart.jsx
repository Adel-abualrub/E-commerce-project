import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import axiosInstanse from "../api/axiosInstanse";
import CartAxiosInstanse from "../api/cartAxiosInstanse";
import i18n from "../i18next";

export default function useCart() {
  const getItemsInCart = async () => {
    const response = await CartAxiosInstanse.get("Carts");
  
    return response.data;
  
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cart",i18n.language],
    queryFn: getItemsInCart,
    staleTime: 1000 * 60 * 10,
  });

  return {data,isLoading,isError,error};
}
