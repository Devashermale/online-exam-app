import React, { useState } from 'react';
import useLogin from '../hook/useLogin';
import { Mail, Lock, UserCircle, ChevronRight } from 'lucide-react';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [role, setrole] = useState('');
  const { Login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) return alert("Please select a role to proceed");
    await Login(email, password, role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-80 bg-indigo-600 skew-y-3 origin-top-right -z-10 shadow-lg"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-slate-100 transition-all">
        <header className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl mb-4">
            <UserCircle size={40} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mt-2 font-medium">Log in to your dashboard</p>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 flex items-center gap-3">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            {error.message || "Invalid credentials, please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 ml-1">Identity</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setrole(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition-all appearance-none font-medium text-slate-700"
                required
              >
                <option value="" disabled>Select your role...</option>
                <option value="admin">Administrator</option>
                <option value="student">Student User</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight size={18} className="rotate-90" />
              </div>
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium" 
                placeholder="e.g. alex@university.com" 
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-slate-700">Password</label>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400 font-medium" 
                placeholder="••••••••" 
                onChange={(e) => setpassword(e.target.value)} 
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 mt-2 rounded-2xl font-black text-white transition-all shadow-lg active:scale-[0.98]
              ${loading ? 'bg-indigo-400 cursor-wait' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100'}
            `}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Signing in...
              </span>
            ) : 'Access Dashboard'}
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-slate-500 font-medium">
          New to the platform? <a href="/register" className="text-indigo-600 font-bold hover:underline ml-1">Create free account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;