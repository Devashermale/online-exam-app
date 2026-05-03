import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hook/useLogin';
import { Mail, Lock, UserCircle, ChevronRight } from 'lucide-react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const { Login, loading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await Login(email, password, role);
        
        if (user) {
            navigate(role === 'admin' ? '/admin-dash' : '/student-dash');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
                <header className="text-center mb-10">
                    <UserCircle size={40} className="mx-auto text-indigo-600 mb-4" />
                    <h1 className="text-3xl font-black">Welcome Back</h1>
                </header>

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <select 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full p-4 bg-slate-50 border rounded-2xl outline-none"
                        required
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="admin">Administrator</option>
                        <option value="student">Student</option>
                    </select>

                    <input 
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-slate-50 border rounded-2xl"
                        required 
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-slate-50 border rounded-2xl"
                        required 
                    />

                    <button 
                        disabled={loading}
                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold"
                    >
                        {loading ? 'Processing...' : 'Access Dashboard'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;