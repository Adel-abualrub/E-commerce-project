import { useMutation } from '@tanstack/react-query'
import React from 'react'
import CartAxiosInstanse from '../api/cartAxiosInstanse'
import { useTranslation } from 'react-i18next'
import Swal from 'sweetalert2';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function useChangePasssword() {
    const {t}=useTranslation();
    const navigate=useNavigate();
    const Logout=useAuthStore((state)=>state.LogOut);
  return useMutation({
mutationFn:async({CurrentPassword,NewPassword,ConfirmNewPassword})=>{
return await CartAxiosInstanse.patch("Profile/change-password",{CurrentPassword,NewPassword,ConfirmNewPassword})
},onSuccess: (response) => {
  if (response.data.success === true) {
    Swal.fire({
  title: t('PasswordChangedTitle'),
  text: t('PasswordChangedText'),
  icon: "success",
  confirmButtonText: t('Ok')
}).then((result) => {
  if (result.isConfirmed) {
    Logout();
    navigate('/login');
  }
});
  } else {
    Swal.fire({
      title: t('Error'),
      text: response.data.message,
      icon: "error",
      confirmButtonText: t('Ok')
    });
  }
}

  })
}
