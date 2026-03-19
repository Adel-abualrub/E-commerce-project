import * as yup from 'yup';
import React from 'react'

export const SendCodeValidation = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
});
