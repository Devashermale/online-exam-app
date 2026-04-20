import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
  return (
    <>
<div className=' grid grid-cols-2'>
<div>
  <h1 className=' text-3xl font-bold m-2'>Logo</h1>
</div>
<div className=''>
  <NavLink to ='/register'>
  <button className=' p-2 m-2 border-2 rounded-md ' >Register</button>
  </NavLink>
  <NavLink to='/login'>
      <button className=' p-2 m-2 border-2 rounded-md '>Login</button>
  </NavLink>
</div>
</div>
    </>
  )
}

export default Navbar