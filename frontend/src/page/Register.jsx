import React, { useState } from 'react';
import useRegister from '../hook/useRegister';
import { NavLink, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('');
  const [password, setpassword] = useState('');
  
  const navigate = useNavigate();
  const { Register, loading, error } = useRegister();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!role) return alert("Please select a role");
    
    const success = await Register(name, email, role, password);

    if (success) {
      if (role === 'admin') {
        navigate('/admin-dash');
      } else {
        navigate('/student-dash');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      {/* Background decoration (optional) */}
      <div className="absolute top-0 left-0 w-full h-64 bg-indigo-600 -skew-y-3 origin-top-left -z-10 shadow-lg"></div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-slate-500 mt-2">Join our precision testing platform</p>
        </header>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
            {error.message}
          </div>
        )}

        <form onSubmit={handlesubmit} className="space-y-5">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">I am a...</label>
            <select 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all appearance-none cursor-pointer text-slate-700" 
              value={role} 
              onChange={(e) => setrole(e.target.value)}
              required
            >
              <option value="" disabled>Choose your role</option>
              <option value="admin">Administrator</option>
              <option value="student">Student / Candidate</option>
            </select>
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              onChange={(e) => setname(e.target.value)} 
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              onChange={(e) => setemail(e.target.value)} 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              onChange={(e) => setpassword(e.target.value)} 
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 mt-2 rounded-xl font-bold text-white transition-all shadow-md active:scale-[0.98]
              ${loading ? 'bg-indigo-400 cursor-wait' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'}
            `}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account? <NavLink to="/login" className="text-indigo-600 font-bold hover:underline">Log in</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register