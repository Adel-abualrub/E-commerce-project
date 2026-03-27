import { useMutation, useQueryClient } from "@tanstack/react-query";
import CartAxiosInstanse from "../api/cartAxiosInstanse";
import Swal from 'sweetalert2'; 
import { useTranslation } from "react-i18next"; 
import { useNavigate } from "react-router-dom";

export default function useCheckOut() {
  const { t } = useTranslation(); 
  const queryClient = useQueryClient();
const Navigate=useNavigate();
  return useMutation({
    mutationFn: async (PaymentMethod) => {
      return await CartAxiosInstanse.post("Checkouts", { PaymentMethod });
    },
    
    onSuccess: (response) => {
      console.log(response);

     
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });

      if (response.data.url) {
     
        window.location.href = response.data.url;
      } else {
     
        Swal.fire({
          title: t("Success"), 
          text: t("OrderCreatedSuccessfully"),
          icon: "success",
          draggable: true,
          confirmButtonText: t("Ok") 
        }).then((result) => {
          if (result.isConfirmed) {
            Navigate('/')
          }
        });
      }
    },
  
  });
}