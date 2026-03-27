import * as yup from 'yup';
import React from 'react'

export const ChangeEmailValidation = yup.object({
  NewEmail: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),
});
