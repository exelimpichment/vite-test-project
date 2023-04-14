import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const url =
  'https://first-node-js-express-project.onrender.com/api/v1/auth/register';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        fetch(url, {
          method: 'POST',
          credentials: 'include',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(values),
        })
          .then((resp) => {
            resp.headers.forEach((val, key) => {
              console.log(key, val);
            });
            let cookie = resp.headers.get('set-cookie');
            console.log('set-cookie header value', cookie);

            return resp.json();
          })
          .then((user) => console.log(user))

          .catch((error) => console.warn(error));
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor='firstName'>First Name</label>
        <Field name='name' type='text' />
        <ErrorMessage name='firstName' />

        <label htmlFor='email'>Email Address</label>
        <Field name='email' type='email' />
        <ErrorMessage name='email' />

        <label htmlFor='lastName'>Last Name</label>
        <Field name='password' type='text' />
        <ErrorMessage name='lastName' />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
