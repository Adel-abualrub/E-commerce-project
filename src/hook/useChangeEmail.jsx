import { useMutation } from '@tanstack/react-query'
import React from 'react'
import CartAxiosInstanse from '../api/cartAxiosInstanse'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2';
export default function useChangeEmail() {
    const{t}=useTranslation();
  return useMutation({
mutationFn:async({NewEmail})=>{
return await CartAxiosInstanse.patch('Profile/change-email',{NewEmail})

},onSuccess: () => {
 Swal.fire({
  title: t('EmailChangedTitle'),
  text: t('EmailChangedText'),
  icon: "success",
  confirmButtonText: t('Ok')
});
}

  })
}
