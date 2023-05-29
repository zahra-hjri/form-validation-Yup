import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters')
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col bg-green-300 border border-white w-72 md:w-3/5 lg:w-3/6 xl:w-5/12 rounded-lg mx-auto p-5'>
      {/* <label htmlFor="firstName">First Name</label> */}
      <input
        id="firstName"
        name="firstName"
        type="text" 
        placeholder='First Name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className='bg-white p-2 w-auto rounded-lg outline-none'
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className='text-red-500'>{formik.errors.firstName}</div>
      ) : null}

      {/* <label htmlFor="lastName">Last Name</label> */}
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder='Last Name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5'
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className='text-red-300'>{formik.errors.lastName}</div>
      ) : null}

      {/* <label htmlFor="email">Email Address</label> */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder='Email Address'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5'

      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button className='btn btn-success text-white font-bold w-52 md:w-60 lg:w-72 mx-auto' type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;