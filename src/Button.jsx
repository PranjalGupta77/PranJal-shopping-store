import React from 'react';

function Button(props) {
  return (
    <>
      <button className="sm:mt-5 ml-2 rounded-md bg-red-500 px-5 py-1 text-sm text-white hover:bg-red-600">{props.children}</button>
    </>
  );
}

export default Button;