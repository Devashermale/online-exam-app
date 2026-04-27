import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SidebarAdmin from './SidebarAdmin';
import { Search, FileText, ClipboardCheck } from 'lucide-react'; // Icons for professional look

function Resultall() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');
  const [error, seterror] = useState(null);

  const handleResult = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/exams");
      setData(res.data);
    } catch (error) {
      seterror(error.message);
    }
  };

  useEffect(() => {
    handleResult();
  }, []);

  const filtered = data.filter(obj => 
    obj.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* 1. Sidebar */}
      <SidebarAdmin />

      {/* 2. Main Content Area (shifted left by 64 units) */}
      <main className="flex-1 ml-64 p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Student Results</h1>
              <p className="text-slate-500">Monitor exam performance and scores across all departments.</p>
            </div>

            {/* Search Bar Container */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
              <input 
                type="search" 
                className="pl-11 pr-4 py-3 w-full md:w-80 bg-white border border-slate-200 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all" 
                placeholder="Search by exam title..." 
                onChange={(e) => setsearch(e.target.value)} 
              />
            </div>
          </header>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6">
              Error fetching data: {error}
            </div>
          )}

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((obj) => (
                <div key={obj._id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all hover:-translate-y-1 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                      <ClipboardCheck size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ID: {obj.exam_id || 'N/A'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{obj.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{obj.description}</p>
                  
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 font-semibold uppercase">Passing Score</p>
                      <p className="text-lg font-bold text-slate-900">{obj.score} <span className="text-slate-400 text-sm font-normal">pts</span></p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <FileText className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-500 text-lg">No results found matching "{search}"</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Resultall;