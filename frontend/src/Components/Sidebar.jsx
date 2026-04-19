import {  NavLink } from 'react-router-dom';
import React from 'react';
function Sidebar() {
  return (
    <>
    <div>
   <nav className=' grid grid-rows-3 border-2 w-60 h-screen'>
      <div>
         <h1 className=' text-3xl text-center font-extrabold'>msbte </h1>
      </div>
      <div className=' flex flex-col  gap-4'> 
      <NavLink to='/home' className=' font-bold'>Home</NavLink> 
      <NavLink to="/exam" className=' font-bold'>exam</NavLink>
      <NavLink to='/result ' className=' font-bold'> result</NavLink>
      </div>
      <div>
        <span> email</span>
      <button type='button' className=' p-2 border-2'> logout </button>
     
      </div>
   </nav>
   </div>
    </>
  )
}

export default Sidebar