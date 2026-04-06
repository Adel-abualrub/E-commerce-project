import { useState } from 'react'
import { send } from '@emailjs/browser';
import Swal from 'sweetalert2'
import i18n from '../i18next';

export default function useSendSupportEmail() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (data) => {
    setLoading(true);
    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        title: i18n.t('MessageSent'),
        text: i18n.t('MessageSentText'),
        icon: 'success',
        confirmButtonText: i18n.t('Ok')
      });

    } catch (error) {
      Swal.fire({
        title: i18n.t('Error'),
        text: i18n.t('SomethingWentWrong'),
        icon: 'error',
        confirmButtonText: i18n.t('Ok')
      });
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading };
}