import * as yup from 'yup';

export const SendSupportEmail = yup.object({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().min(10, 'Phone must be at least 10 digits').max(10, 'Phone must be exactly 10 digits'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});