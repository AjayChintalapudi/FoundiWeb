import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-z][a-z0-9]*@[a-z]+\.[a-z]{2,}$/
      //   'Invalid email address. Email should be in the format example@domain.com'
    )
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be exactly 7 characters')
    .max(7, 'Password must be exactly 7 characters')
    .matches(
      /^(?=.*[A-Z])/
      //   'Password must contain at least one uppercase letter'
    ),
});
