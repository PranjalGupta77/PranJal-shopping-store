import { useField } from 'formik';
import React from 'react';

function Input({name, label, id, className, ...rest}) {

const Field = useField(name);
const [data, meta] = Field;

const {value, onBlur, onChange} = data;
const {error, touched} = meta;

    let borderClass =  "border-gray-500 focus:border-indigo-500";

if (error && touched) {
    borderClass = "border-red-500"
}

    return (
        <div>
          <label htmlFor={id} className='sr-only'>{label}</label>
         <input 
         id={id}
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         name={name}
         className={
            "relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 focus:Z-1 focus:outline-none focus:ring-indigo-500 mt-4 text-sm " + 
          className + " " + borderClass
         }
         {...rest}
          /> 
          {touched && error && <div className='text-red-500'>{error}</div>}
          
        </div>
    );
}

export default Input;