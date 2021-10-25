import * as Yup from 'yup';

const _emailIsRequired = Yup.string()
  .required('Requerido')
  .email('Invalid email address');
const _passwordIsRequired = Yup.string()
  .required('Requerido')
  .min(6, 'Contraseña debe ser de 6 caracteres como mínimo');
const _firstNameIsRequired = Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Requerido');
const _lastNameIsRequired = Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('Requerido');

export const validateLoginInput = Yup.object().shape({
  email: _emailIsRequired,
  password: _passwordIsRequired,
});

export const validateRegisterInput = Yup.object().shape({
  firstName: _firstNameIsRequired,
  lastName: _lastNameIsRequired,
  email: _emailIsRequired,
  password: _passwordIsRequired,
});