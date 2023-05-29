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
        .max(12, 'Must be 15 characters')
        .min(3, 'Must be more than 3 characters')
        .required('Required'),
      lastName: Yup.string()
        .max(12, 'Must be 20 characters or less')
        .min(5, 'Must be more than 5 characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col bg-green-300 border border-white w-72 md:w-3/5 lg:w-3/6 xl:w-5/12 rounded-lg mx-auto px-8 py-10'>
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.firstName}</div>
      ) : null}
      <input
        id="firstName"
        name="firstName"
        type="text" 
        placeholder='First Name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5'
      />
      

      {formik.touched.lastName && formik.errors.lastName ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.lastName}</div>
      ) : null}
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
      

      
      {formik.touched.email && formik.errors.email ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.email}</div>
      ) : null}
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
      

      <button className='btn btn-success text-white font-bold w-52 md:w-60 lg:w-72 mx-auto my-5' type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;