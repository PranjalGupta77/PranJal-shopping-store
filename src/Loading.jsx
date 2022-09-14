import React from "react"
import { ImSpinner10 } from "react-icons/im";

function Loading() {
  return (
    <div
      className="text-4xl text-red-500 flex flex-col justify-center p-5 m-10 bg-white h-screen">
      <div className="flex flex-col items-center">
        <ImSpinner10 className="animate-spin" />
        <span className="text-xl text-black">just a sec...</span>
      </div>
    </div>
  );
}

export default Loading;