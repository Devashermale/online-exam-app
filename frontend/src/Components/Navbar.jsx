import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav class="flex justify-between items-center px-12 py-6 border-b border-slate-50">
    <div class="text-2xl font-black italic tracking-tighter text-slate-900">LOGO</div>
    <div class="space-x-4">
      <NavLink to='/register'>
      <button class="px-6 py-2 font-semibold text-slate-700 hover:text-black">Register</button>
      </NavLink>
      <NavLink to='/login '>
      <button class="px-6 py-2 bg-yellow-400 font-bold rounded-lg shadow-sm hover:bg-yellow-500 transition-all">Login</button>
      </NavLink>
    </div>
  </nav>
    </>
  )
}

export default Navbar