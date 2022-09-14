import React from 'react';

function OtherButton(props) {
  return (
    <>
      <button className="h-8 w-8 bg-white text-sm text-red-500 hover:bg-red-500  hover:text-white border border-red-500">{props.children}</button>
    </>
  );
}

export default OtherButton;