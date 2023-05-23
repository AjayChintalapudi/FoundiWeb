import * as Yup from 'yup';

export const EmailValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-z][a-z0-9]*@[a-z]+\.[a-z]{2,}$/)
    .required('Email is required'),
});

export const PassWordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be exactly 7 characters')
    .max(7, 'Password must be exactly 7 characters')
    .matches(/^(?=.*[A-Z])/),
});

export const FirstNameValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(
      /^[A-Za-z\s]+$/,
      'First name should only contain letters and spaces'
    )
    .required('First name is required'),
});

export const LastNameValidationSchema = Yup.object().shape({
  lastname: Yup.string()
    .matches(
      /^[A-Za-z\s]+$/,
      'Last name should only contain letters and spaces'
    )
    .required('Last name is required'),
});
