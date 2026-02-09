import * as yup from 'yup'
export const ValidationSchema = yup.object({
  userName: yup
    .string()
    .required('User Name is required')
    .min(3, 'User Name must be at least 3 characters'),

  fullName: yup
    .string()
    .required('Full Name is required')
    .min(3, 'Full Name must be at least 3 characters'),

  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),

  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});