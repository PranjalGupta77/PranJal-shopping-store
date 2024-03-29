import {withFormik} from 'formik';
import React from 'react';
import { Link} from "react-router-dom";
import * as Yup from "yup";
import Input from './Input';
import { HiArrowNarrowLeft } from "react-icons/hi"


function callLoginData(Values) {
  console.log( Values.email);
}

 const schema =  Yup.object().shape({
  email: Yup.string().email().required(),
});

const initialValues = {
  email: "",
}

function ForgotPassword({values, touched, errors, handleSubmit, handleChange, handleBlur}) {

  return (

     <div className="px-4">
        <div className="p-5 max-w-6xl bg-white mx-auto px-10 py-6 my-16 flex justify-center">  

        <div className='flex justify-center'> 
       <div>
        <div className="w-8 mb-3 ml-2">
        <Link to="/" className="text-3xl "><HiArrowNarrowLeft></HiArrowNarrowLeft></Link>
      </div>

         <form onSubmit={handleSubmit} className='flex flex-col max-w-72 py-10 px-8 rounded-md bg-gray-100'> 

         <h1 className='text-2xl font-bold self-center mb-4'>Forgot Password</h1>   

         <Input 
          values={values.email}
          touched={touched.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Email address"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
         />      

          <div className="flex justify-center mx-2">
           <Link to={"/SingUpPage"} className="text-white bg-red-500 px-6 rounded-md mt-2">Change Password</Link>
         </div>

         </form>
        </div>
        </div>

       </div>
    </div>
    
  );
}

export default withFormik({validationSchema: schema, initialValues: initialValues, handleSubmit: callLoginData})(ForgotPassword);