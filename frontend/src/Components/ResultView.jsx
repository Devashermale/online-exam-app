import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar'; // Bringing in your student sidebar
import { Search, Trophy, Calendar, FileText } from 'lucide-react';

function ResultView() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleResult = async () => {
    try {
      setLoading(true);
      // Ensure this endpoint returns the results for the logged-in student
      const res = await axios.get("http://localhost:3000/api/exams"); 
      setData(res.data);
    } catch (error) {
      seterror(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleResult();
  }, []);

  const filterexam = data.filter(obj => 
    obj.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Standard Student Sidebar */}
      <Sidebar />

      {/* 2. Main Content with Margin Fix */}
      <main className="flex-1 ml-64 p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header & Search */}
          <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Results</h1>
              <p className="text-slate-500">Track your performance across all completed exams.</p>
            </div>

            <div className="relative group w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input 
                type="search" 
                placeholder="Search by exam title..." 
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm" 
                onChange={(e) => setsearch(e.target.value)} 
              />
            </div>
          </header>

          {/* Results Display */}
          {loading ? (
            <div className="text-center py-20 text-slate-400 font-medium">Loading your performance...</div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 italic">{error}</div>
          ) : filterexam.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filterexam.map((obj) => (
                <div key={obj._id} className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-5">
                    <div className="bg-indigo-50 text-indigo-600 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{obj.title}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {new Date().toLocaleDateString()}</span>
                        <span className="flex items-center gap-1"><FileText size={14} /> ID: {obj.exam_id || 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Your Score</p>
                      <p className="text-2xl font-black text-indigo-600">{obj.score} <span className="text-sm font-normal text-slate-400">pts</span></p>
                    </div>
                    <div className={`px-4 py-2 rounded-lg font-bold text-sm ${obj.score > 50 ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                      {obj.score > 20 ? 'PASSED' : 'REVIEW'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400">No results found for "{search}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ResultView;