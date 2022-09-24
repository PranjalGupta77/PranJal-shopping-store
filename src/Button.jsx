import React from 'react';

function Button({className, ...rest}) {
  return (
    <>
      <button className={"ml-2 rounded-md bg-red-500 px-5 py-1 text-sm text-white hover:bg-red-600 " + className} {...rest} ></button>
    </>
  );
}

export default Button;