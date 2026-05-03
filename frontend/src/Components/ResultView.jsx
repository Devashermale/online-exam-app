import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { Search, Trophy, Calendar, FileText, Activity } from 'lucide-react';

function ResultView() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleResult = async () => {
    try {
      setLoading(true);
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
      <Sidebar />

      <main className="flex-1 ml-64 p-10">
        <div className="max-w-6xl mx-auto">
          
          <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Academic Record</h1>
              <p className="text-slate-500">View your scores and performance history.</p>
            </div>

            <div className="relative group w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
              <input 
                type="search" 
                placeholder="Search exams..." 
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm" 
                onChange={(e) => setsearch(e.target.value)} 
              />
            </div>
          </header>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
               <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
               <p className="font-medium">Fetching your grades...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 flex items-center gap-3">
              <Activity size={20} />
              <p className="font-medium">System Error: {error}</p>
            </div>
          ) : filterexam.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filterexam.map((obj) => (
                <div key={obj._id} className="bg-white border border-slate-200 p-6 rounded-[1.5rem] flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl hover:border-indigo-100 transition-all group">
                  <div className="flex items-center gap-5">
                    <div className={`p-4 rounded-2xl transition-all ${obj.score ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' : 'bg-slate-100 text-slate-400'}`}>
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{obj.title}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(obj.date).toLocaleDateString()}</span>
                        <span className="flex items-center gap-1"><FileText size={14} /> ID: {obj.exam_id?.slice(0, 8)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end gap-10 border-t md:border-t-0 pt-4 md:pt-0">
                    <div className="text-right">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Performance</p>
                      <p className={`text-2xl font-black ${obj.score ? 'text-slate-900' : 'text-slate-300'}`}>
                        {obj.score ?? '--'} <span className="text-sm font-bold text-slate-400">PTS</span>
                      </p>
                    </div>

                    {/* Dynamic Status Label */}
                    <div className={`min-w-[100px] text-center px-4 py-2 rounded-xl font-black text-xs tracking-tighter ${
                      !obj.score ? 'bg-slate-100 text-slate-400' : 
                      obj.status === 'Passed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                      'bg-rose-50 text-rose-600 border border-rose-100'
                    }`}>
                      {!obj.score ? 'NOT ATTEMPTED' : obj.status?.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                <Search size={40} className="mx-auto text-slate-200 mb-4" />
                <p className="text-slate-500 font-bold">No matching results found</p>
                <p className="text-slate-400 text-sm">Try searching for a different exam title.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ResultView;