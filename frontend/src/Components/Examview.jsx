import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { Timer, Send, Search, CheckCircle2, Award, Loader2 } from 'lucide-react';

function Examview() {
    const navigate = useNavigate();
    const [data, setdata] = useState([]); // Initialize as empty array
    const [activeExam, setActiveExam] = useState(null);
    const [answers, setAnswers] = useState({});
    const [second, setsecond] = useState(0);
    const [submit, setsubmit] = useState(false);
    const [loading, setloading] = useState(false);
    const [score, setScore] = useState(0);
    const [search, setsearch] = useState('');

    const handledata = async () => {
        setloading(true);
        try {
            const res = await axios.get('http://localhost:3000/api/exams');
            setdata(Array.isArray(res.data) ? res.data : []);
        } catch (error) {
            console.error("Fetch error:", error.message);
            setdata([]); // Fallback to empty array to prevent map errors
        } finally {
            setloading(false);
        }
    };

    const postdata = async (finalScore) => {
        try {
            await axios.post('http://localhost:3000/api/exam', {
                exam_id: activeExam._id,
                title: activeExam.title,
                score: finalScore,
                totalQuestions: activeExam.questions.length,
                status: finalScore >= (activeExam.questions.length / 2) ? "Passed" : "Failed"
            });
        } catch (error) {
            console.error("Failed to save result:", error);
        }
    }

    useEffect(() => { handledata(); }, []);

    useEffect(() => {
        let timer;
        if (activeExam && second > 0 && !submit) {
            timer = setInterval(() => setsecond((prev) => prev - 1), 1000);
        } else if (second === 0 && activeExam && !submit) {
            handlesubmit();
        }
        return () => clearInterval(timer);
    }, [second, activeExam, submit]);

    const startExam = (exam) => {
        setActiveExam(exam);
        setsecond(exam.duration * 60);
        setsubmit(false);
        setAnswers({});
    };

    const handlesubmit = async () => {
        let tempScore = 0;
        activeExam.questions.forEach((q, idx) => {
            if (answers[idx] === q.answer) tempScore++;
        });
        setScore(tempScore);
        setsubmit(true);
        postdata(tempScore);
    };

    // FIX: Added optional chaining and empty array fallback to prevent crash
    const filterexam = (data || []).filter((obj) =>
        obj?.title?.toLowerCase().includes(search.toLowerCase())
    );

    // --- RENDER LOGIC ---

    if (loading) return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50 text-indigo-600 font-bold">
            <Loader2 className="animate-spin mb-4" size={40} />
            <p>Loading Assessments...</p>
        </div>
    );

    if (submit) {
        return (
            <div className="flex min-h-screen bg-slate-50">
                <Sidebar />
                <main className="flex-1 ml-64 flex items-center justify-center p-10">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200 text-center max-w-md w-full">
                        <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={64} />
                        <h1 className="text-3xl font-black text-slate-900 mb-2">Exam Submitted!</h1>
                        <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Final Score</p>
                            <p className="text-5xl font-black text-indigo-600">{score} / {activeExam?.questions.length}</p>
                        </div>
                        <button 
                            onClick={() => { 
                                setsubmit(false); 
                                setActiveExam(null); 
                                handledata(); // Refresh list to show status
                            }}
                            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    if (activeExam) {
        return (
            <div className="min-h-screen bg-slate-50 p-6 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-between items-center mb-8 sticky top-0 bg-slate-50 py-4 z-10 border-b border-slate-200">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">{activeExam.title}</h1>
                            <p className="text-slate-500 text-sm">Please do not refresh the page.</p>
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold ${second < 60 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-indigo-100 text-indigo-600'}`}>
                            <Timer size={20} />
                            {Math.floor(second / 60)}:{String(second % 60).padStart(2, '0')}
                        </div>
                    </div>

                    <div className="space-y-8">
                        {activeExam.questions.map((q, qIndex) => (
                            <div key={qIndex} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <h4 className="text-lg font-bold text-slate-800 mb-6 leading-relaxed">
                                    <span className="text-indigo-600 mr-2">Q{qIndex + 1}.</span> {q.question}
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {q.options.map((opt, oIndex) => (
                                        <label 
                                            key={oIndex} 
                                            className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${answers[qIndex] === opt ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-slate-200'}`}
                                        >
                                            <input 
                                                type="radio" 
                                                name={`q${qIndex}`} 
                                                value={opt} 
                                                className="w-4 h-4 text-indigo-600"
                                                onChange={(e) => setAnswers({ ...answers, [qIndex]: e.target.value })} 
                                            />
                                            <span className="font-medium text-slate-700">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={handlesubmit} 
                        className="mt-12 mb-20 w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
                    >
                        <Send size={24} /> Submit Assessment
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />
            <main className="flex-1 ml-64 p-10">
                <div className="max-w-6xl mx-auto">
                    <header className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Available Exams</h1>
                            <p className="text-slate-500 mt-2">Select a topic to start your certification.</p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input 
                                type="search" 
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
                                placeholder="Search exams..." 
                                onChange={(e) => setsearch(e.target.value)} 
                            />
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filterexam.length > 0 ? (
                            filterexam.map((obj) => (
                                <div key={obj._id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
                                    <h2 className="text-xl font-bold text-slate-800 mb-2">{obj.title}</h2>
                                    <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">{obj.description}</p>
                                    <div className="border-t border-slate-50 pt-4 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-400 uppercase">
                                            {obj.date ? new Date(obj.date).toLocaleDateString() : 'No Date'}
                                        </span>
                                        <button 
                                            onClick={() => startExam(obj)}
                                            className="px-5 py-2 bg-indigo-50 text-indigo-600 font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition-all"
                                        >
                                            Start Now
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-slate-400">
                                No exams found matching your search.
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Examview;