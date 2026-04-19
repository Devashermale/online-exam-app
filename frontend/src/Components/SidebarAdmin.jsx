import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarAdmin() {
  return (
    <>
      <nav>
        <NavLink to='/' >Home</NavLink>  
        <NavLink to= '/exam-create'>create exam</NavLink>
        <NavLink to='/result-all' >result all</NavLink>

        <button>LOGOUT </button>
      </nav>  
    </>
  )
}

export default SidebarAdmin