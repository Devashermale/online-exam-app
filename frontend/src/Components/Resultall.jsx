import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SidebarAdmin from './SidebarAdmin';
import { Search, Layout, Activity, CheckCircle2, XCircle, Clock } from 'lucide-react';

function Resultall() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState('');
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleResult = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/exam");
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

  const filtered = data.filter(obj => 
    obj.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      <SidebarAdmin />

      <main className="flex-1 ml-64 p-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2">
                <Activity size={16} />
                System Analytics
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Exam Performance</h1>
              <p className="text-slate-500 mt-2 font-medium">Review and manage all active assessment outcomes.</p>
            </div>

            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
              <input 
                type="search" 
                className="pl-12 pr-6 py-4 w-full md:w-96 bg-white border border-slate-200 rounded-2xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium" 
                placeholder="Search assessments..." 
                onChange={(e) => setsearch(e.target.value)} 
              />
            </div>
          </header>

          {/* Error State */}
          {error && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl mb-8 font-medium">
              <XCircle size={20} /> {error}
            </div>
          )}

          {/* Results Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map(i => <div key={i} className="h-64 bg-slate-200 rounded-3xl"></div>)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.length > 0 ? (
                filtered.map((obj) => (
                  <div key={obj._id} className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Status Badge - Absolute Position */}
                    <div className="absolute top-6 right-6">
                       {obj.status === "Passed" ? (
                         <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">
                           <CheckCircle2 size={12} /> PASSED
                         </div>
                       ) : obj.status === "Failed" ? (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold border border-rose-100">
                           <XCircle size={12} /> FAILED
                         </div>
                       ) : (
                        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold border border-slate-100">
                           <Clock size={12} /> PENDING
                         </div>
                       )}
                    </div>

                    <div className="mb-6 inline-flex p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <Layout size={28} />
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{obj.title}</h3>
                    <p className="text-slate-400 text-sm font-medium mb-8 line-clamp-2">{obj.description}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Final Score</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-slate-900">{obj.score || '0'}</span>
                          <span className="text-slate-400 font-bold">PTS</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Exam ID</p>
                        <p className="text-xs font-mono font-bold text-indigo-600">#{obj.exam_id?.slice(0, 8)}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-24 bg-white rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
                    <Search size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">No Assessments Found</h3>
                  <p className="text-slate-500 mt-1 font-medium">Try adjusting your search filters.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Resultall;