import { NavLink } from 'react-router-dom';
import React from 'react';
import { useLogout } from '../hook/useLogout';
import { useAuthContext } from '../hook/useAuthContext';
import { Home, BookOpen, Award, LogOut, User } from 'lucide-react'; // Consistency is key!

function Sidebar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleclick = () => {
    logout();
  };

  // Modern active/inactive styles
  const activeStyle = "flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 transition-all font-semibold";
  const inactiveStyle = "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all font-medium";

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 z-50 flex flex-col">
      
      {/* Brand/Logo Area */}
      <div className="p-8">
        <div className="text-2xl font-black text-indigo-600 tracking-tighter">
          STUDENT<span className="text-slate-800">HUB</span>
        </div>
      </div>

      {/* Profile Sneak-peek (Optional but looks great) */}
      {user && (
        <div className="px-6 mb-8">
          <div className="bg-slate-50 p-4 rounded-2xl flex items-center gap-3 border border-slate-100">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
              <User size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Student</p>
              <p className="text-sm font-bold text-slate-700 truncate">{user.email.split('@')[0]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        <NavLink to='/student-dash' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/exam" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
          <BookOpen size={20} />
          <span>My Exams</span>
        </NavLink>

        <NavLink to='/result' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
          <Award size={20} />
          <span>My Results</span>
        </NavLink>
      </nav>

      {/* Logout at the bottom */}
      <div className="p-4 border-t border-slate-50">
        <button 
          onClick={handleclick} 
          className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 font-bold hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;