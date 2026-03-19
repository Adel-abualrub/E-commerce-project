import * as yup from "yup";

const CodeValidation = yup.object({
  code: yup
    .string()
    .required("Code is required")
    .matches(/^\d{4}$/, "Code must be exactly 4 digits"),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
});

export { CodeValidation };