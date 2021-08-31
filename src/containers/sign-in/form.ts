import * as Yup from 'yup';

export type FormValues = {
  email: string;
  password: string;
};

export const initialValues: FormValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().trim().email('invalid_email').required('required'),
  password: Yup.string().trim().required('required').min(8, 'min_password_validate_text'),
});
