import {Formik, Form} from 'formik';
import React from 'react';
import { Link} from "react-router-dom";
import * as Yup from "yup";
import Input from './Input';
import { HiArrowNarrowLeft } from "react-icons/hi"

function SingUp() {

function callLoginData(Values) {
  console.log( Values.name, Values.email, Values.Password, Values.confirmPassword );
}

 const schema =  Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  Password: Yup.string().min(8).max(12).required(),
  confirmPassword: Yup.string().min(8).max(12).required(),
});

const initialValues = {
  name: "",
  email: "",
  Password: "",
  confirmPassword: "",
}

  return (

     <div className="px-4">
        <div className="p-5 max-w-6xl bg-white mx-auto px-10 py-6 my-16 flex justify-center">  

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

         <h1 className='text-2xl font-bold self-center mb-4'>SingUp</h1>   

         <Input 
          label="Name"
          id="name"
          name="name"
          type="text"
          required
          autoComplete="text"
          placeholder="Full Name"
         />      

         <Input 
          label="Email address"
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
         />      

         <Input 
          label="Password"
          id="password"
          name="Password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"          
         />       

         <Input 
          label="Confirm Password"
          id="confirm-password"
          name="confirmPassword"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Confirm Password"          
         />           

          <div className="flex justify-center m-2">
          <button className="text-white bg-red-500 rounded-md px-8 " type='submit'>Sing Up</button>
          </div>

          <hr className='my-3  border-gray-500'/> 

         <div className='flex justify-center mx-2'>   
           <h1 className='text-xs'>Alredy have an account ?</h1>
            <span className='flex justify-start text-red-500 ml-2 text-sm'>
            <Link to={"/LoginPage"}>Login</Link>
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

export default SingUp;