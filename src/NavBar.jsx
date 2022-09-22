import React from 'react';
import { GrShop } from 'react-icons/gr';
import { Link} from "react-router-dom";

function NavBar({productCount}) {
  return (

    <div className="bg-white py-2 px-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

       <div>
         <h1 className="text-4xl font-bold text-red-500">PranJal</h1>
       </div>
 
        <div className='flex items-center'>  
        <Link to={"/SingUpPage"}>
          <h2 className='mr-4'>ACCOUNT</h2>
          </Link>
         <Link to="/CartPage">
          <div className="flex flex-col items-center mb-6">
           <GrShop className="text-3xl"/>
           <span className="-m-6">{productCount}</span>
         </div>    
         </Link>
       </div>
       
       </div>

    </div>
  );
}

export default NavBar;