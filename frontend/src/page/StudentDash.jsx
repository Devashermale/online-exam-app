import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import { BookOpen, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function StudentDash() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchExams = async () => {
    try {
      setLoading(true);
      
      // 1. Get user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const token = storedUser?.token;

      // 2. Check if token exists before making the call
      if (!token) {
        setError("You are not authenticated. Please log in.");
        return;
      }

      const res = await axios.get('http://localhost:3000/api/exams', {
        headers: {
          'authorization': `Bearer ${token}`
        }
      });
      
      setExams(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Could not load exams. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // 3. Simple protection: if no user in storage, kick to login immediately
    if (!localStorage.getItem('user')) {
      navigate('/login');
    } else {
      fetchExams();
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Student Home</h1>
            <p className="text-slate-500 mt-2 text-lg">Pick an exam and show what you've learned.</p>
          </header>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Available Exams</p>
                <p className="text-3xl font-black text-indigo-600 mt-1">{exams.length}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-6">Available Assessments</h2>

          {loading ? (
            <div className="flex flex-col items-center py-20 text-slate-400">
              <Loader2 className="animate-spin mb-4" size={40} />
              <p>Fetching your exams...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 italic">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exams.map((exam) => (
                <div key={exam._id} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-indigo-400 hover:shadow-md transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      Assessment
                    </span>
                    <div className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{exam.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{exam.description}</p>
                  
                  <div className="flex gap-4 text-slate-500 text-sm mb-6">
                    <span className="flex items-center gap-1">
                        <Clock size={14}/> {exam.duration} Mins
                    </span>
                    <span className="flex items-center gap-1">
                        <BookOpen size={14}/> {exam.questions?.length || 0} Questions
                    </span>
                  </div>

                  <button 
                    onClick={() => navigate('/exam')} 
                    className="w-full py-3 bg-slate-50 text-slate-700 font-bold rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all"
                  >
                    Start Exam
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default StudentDash;