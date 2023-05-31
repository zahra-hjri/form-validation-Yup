import React,{useState} from 'react';
import Modal from './Modal/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const SignupForm = () => {

  const [handelGeneratePassword, setHandelGeneratePassword] = useState("");
  const [suceess, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(true);


  // ***************Start generate Hard Password Function *************//
  function generatePassword() {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*#?&";

    let password = "";
    do {
      password = Array.from({ length: 12 })
        .map(() =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        )
        .join("");
    } while (!regex.test(password));

    return setHandelGeneratePassword(password);
  // ***************End generate Hard Password Function *************//

  }

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      confirmPassword:'',
      email: '',
      mobileNumber:'',
      checkRule: false,
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(12, 'Must be 15 characters')
        .min(3, 'Must be more than 3 characters')
        .required('Required'),

      password: Yup.string()
        .max(12, 'Must be 20 characters or less')
        .min(6, 'Must be more than 5 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password is very weak")
        .required('Required'),

        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null] , "password do not match")
        .trim()
        .required('Required'),


      email: Yup.string()
      // .email('Invalid email address')
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address')
      .required('Required'),

      mobileNumber:Yup.string()
      .matches(/^09[0-9]{9}|٠٩[٠١٢٣٤٥٦٧٨٩]{9}|۰۹[۰۱۲۳۴۵۶۷۸۹]{9}$/, "Mobile number is wrong")
      .required('Required'),

      checkRule:Yup.boolean()
      .test('is-checked', 'read and accept the rules', value => value === true),


    }),
    onSubmit: (values) => {
      setSuccess(true);
      // setShowModal(!showModal)
    },
  });
  return (
    
   <div>
        {suceess &&
        formik.submitCount > 0 &&
        !Object.keys(formik.errors).length && (
          <Modal showModal={showModal} setShowModal={setShowModal}/>
        
        //   <>
        //   <div
        //     className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        //   >
        //     <div className="relative my-6 mx-auto w-80 md:w-3/6">
        //       {/*content*/}
        //       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
        //         {/*body*/}
        //         <div className="relative p-4 md:p-6 flex-auto">
        //           <p className="my-4 font-bold md:font-extrabold text-green-500 text-lg leading-relaxed text-center">
        //           Registration was successful
        //           </p>
        //         </div>
        //         {/*footer*/}
        //         <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
        //           <button
        //             className="text-white bg-red-500 rounded-lg font-bold uppercase px-4 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //             type="button"
        //             onClick={() => setShowModal(false)}
        //           >
        //             Close
        //           </button>
                  
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        // </>
     
        )}
    <form onSubmit={formik.handleSubmit} className='flex flex-col bg-slate-900 border border-white w-72 md:w-3/5 lg:w-3/6 xl:w-5/12 rounded-lg mx-auto p-8'>
      {formik.touched.userName && formik.errors.userName ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.userName}</div>
      ) : null}
      <input
        id="userName"
        name="userName"
        type="text" 
        placeholder='User name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5 placeholder:text-xs md:placeholder:text-sm'
      />
       

      {formik.touched.password && formik.errors.password ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.password}</div>
      ) : null}
      <input
        id="password"
        name="password"
        type="text"
        placeholder='Password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5 placeholder:text-xs md:placeholder:text-sm'
      />

      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.confirmPassword}</div>
      ) : null}
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="text"
        placeholder='Confirm password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5 placeholder:text-xs md:placeholder:text-sm'
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
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5 placeholder:text-xs md:placeholder:text-sm'

      />

      {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
        <div className='text-red-500 text-sm md:text-md'>{formik.errors.mobileNumber}</div>
      ) : null}
      <input
        id="mobileNumber"
        name="mobileNumber"
        type="text"
        placeholder='Mobile number'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mobileNumber}
        className='bg-white p-2 w-auto rounded-lg outline-none mb-5 placeholder:text-xs md:placeholder:text-sm'

      />

      {formik.errors.checkRule ? (
            <div className='text-red-500 text-sm md:text-md' >{formik.errors.checkRule}</div>
          ) : null}
          <div className='flex mt-2 mb-7 ml-2'>
          <input
            name="checkRule"
            checked={formik.checkRule}
            type="checkbox"
            onChange={formik.handleChange}
          ></input>
          <label className='px-2 text-white text-xs md:font-bold' htmlFor="">accept the rules</label>
          </div>
      
      <div className='flex flex-col md:flex-row  justify-around my-1'>
        <button className='bg-slate-600 w-auto text-white font-bold rounded-xl text-xs p-2 md:px-7' type="button" onClick={generatePassword}>
          Generate Hard Password
        </button>
       <p className='text-slate-500 font-bold pt-2 md:pt-0 pl-2'>{handelGeneratePassword}</p>
       </div>
      <button className='p-2 rounded-2xl bg-green-800 text-white font-bold w-52 md:w-60 lg:w-72 mx-auto my-5' type="submit">Submit</button>
    </form>
   </div>
  );
};

export default SignupForm;