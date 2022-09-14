import React from "react"
import { Link} from "react-router-dom";


function Error() {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className=" w-3/6 shadow-lg">
        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"/>
      </div>
      <h1 className="text-2xl text-red-500">Page not found</h1>
      <div className="bg-black hover:bg-red-500 rounded-full my-5 py-2 px-4">
        <Link to="/" className=" text-white">home Page</Link>
      </div>
    </div>
  );
}

export default Error;