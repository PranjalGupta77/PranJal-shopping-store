import {Formik, Form} from 'formik';
import React from 'react';
import { Link} from "react-router-dom";
import * as Yup from "yup";
import {FormikInput} from './Input';
import { HiArrowNarrowLeft } from "react-icons/hi"

function Login() {

function callLoginData(Values) {
  console.log( Values.email, Values.Password );
}

 const schema =  Yup.object().shape({
  email: Yup.string().email().required(),
  Password: Yup.string().min(8).max(12).required(),
});

const initialValues = {
  email: "",
  Password: "",
}

  return (

     <div className="px-4">

        <div className="p-5 max-w-6xl bg-white mx-auto px-10 py-6 my-16 ">  

        <div className='flex justify-center'> 
       <div>
        <div className="w-8 mb-3 ml-2">
        <Link to="/" className="text-3xl "><HiArrowNarrowLeft></HiArrowNarrowLeft></Link>
      </div>

        <Formik 
        initialValues={initialValues}
        onSubmit={callLoginData}
        validationSchema={schema}
        validateOnMount
        >         

         <Form  className='flex flex-col max-w-72 py-10 px-8 rounded-md bg-gray-100'> 

         <h1 className='text-2xl font-bold self-center mb-4'>Login</h1>   

         <FormikInput 
          label="Email address"
          id="email-address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
         />      

         <FormikInput 
          label="Password"
          id="password"
          name="Password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"          
         />         

          <div className="flex justify-center m-2">
          <button className="text-white bg-red-500 rounded-md px-8 " type='submit'>Log In</button>
          </div>

          <div className="flex justify-center mx-2">
         <Link to={"/ForgotPasswordPage"} className="text-gray-700 text-xs">Forgot Password?</Link>
         </div>

         <hr className='my-3  border-gray-500'/> 


         <div className='flex justify-center mx-2'>   
           <h1 className='text-sm'>Don't have an account ?</h1>
            <span className='flex justify-start text-red-500 ml-2 text-sm'>
            <Link to={"/SingUpPage"}>SingUp</Link>
           </span>
         </div> 

         </Form>
         </Formik> 
         </div>
         </div> 

       </div>
    </div>
    
  );
}

export default Login;