import React from 'react';
import FormikHOC from './FormikHOC';

function Input({ name, label, className, error, touched, id, ...rest }) {

  let borderClass = "border-gray-500 focus:border-indigo-500";

  if (error && touched) {
    borderClass = "border-red-500"
  }

  return (
    <div>
      <label htmlFor={id} className='sr-only'>{label}</label>
      <input
        id={id}
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

export const FormikInput = FormikHOC(Input);

export default Input;