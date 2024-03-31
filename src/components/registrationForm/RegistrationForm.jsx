import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { register } from '../../redux/auth/operations';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegistrationForm() {
  const emailFiledId = useId();
  const passwordFiledId = useId();
  const nameFiledId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFiledId}>
            Name
          </label>
          <Field className={css.input} name="name" id={nameFiledId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label className={css.label} htmlFor={emailFiledId}>
            Email
          </label>
          <Field
            type="email"
            className={css.input}
            name="email"
            id={emailFiledId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div>
          <label className={css.label} htmlFor={passwordFiledId}>
            Password
          </label>
          <Field
            type="password"
            className={css.input}
            name="password"
            id={passwordFiledId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.button} type="submit">
          Signup
        </button>
      </Form>
    </Formik>
  );
}
