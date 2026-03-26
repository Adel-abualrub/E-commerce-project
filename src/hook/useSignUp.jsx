import { useMutation } from '@tanstack/react-query'
import axiosInstanse from '../api/axiosInstanse';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function useSignUp(t) {  
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: async (values) => {
      return await axiosInstanse.post('auth/Account/Register', values);
    },
onSuccess: () => {
  Swal.fire({       
    title: t('ConfirmEmail'),
    icon: "success",
    confirmButtonText: t('Ok')
  })              
  .then((result) => {
    if (result.isConfirmed) {
      navigate('/login');
    }
  });
}                    

   
  })
}