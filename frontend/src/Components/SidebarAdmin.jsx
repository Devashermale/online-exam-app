import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLogout } from '../hook/useLogout'
// Optional: install lucide-react for icons (npm install lucide-react)
import { Home, PlusSquare, BarChart3, LogOut } from 'lucide-react'

function SidebarAdmin() {
  const navigate = useNavigate()
  const { logout } = useLogout()

  const handleclick = () => {
    logout()
    navigate('/')
  }

  // Helper for active link styling
  const activeLink = "flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 transition-all";
  const normalLink = "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-all";

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 z-50 flex flex-col">
      {/* Logo Area */}
      <div className="p-8">
        <div className="text-2xl font-black text-indigo-600 tracking-tighter">
          EXAM<span className="text-slate-800">PORTAL</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        <NavLink 
          to='/admin-dash' 
          className={({ isActive }) => isActive ? activeLink : normalLink}
        >
          <Home size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink 
          to='/exam-create' 
          className={({ isActive }) => isActive ? activeLink : normalLink}
        >
          <PlusSquare size={20} />
          <span>Create Exam</span>
        </NavLink>

       {/* <NavLink 
          to='/result-all' 
          className={({ isActive }) => isActive ? activeLink : normalLink}
        >
          <BarChart3 size={20} />
          <span>Result All</span>
        </NavLink> */}
      </nav>

      {/* Logout Bottom Area */}
      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={handleclick}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-500 font-bold hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default SidebarAdmin