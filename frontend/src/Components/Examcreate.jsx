import React, { useState } from 'react';
import useExamcreate from '../hook/useExamcreate';
import SidebarAdmin from './SidebarAdmin';
import { PlusCircle, Trash2, Save } from 'lucide-react';

function Examcreate() {
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [score, setscore] = useState('');
    const { Examcreate } = useExamcreate();
    const [questions, setQuestions] = useState([
        { question: '', options: ['', '', '', ''], answer: '' }
    ]);

    const handleQuestionText = (index, value) => {
        const updated = [...questions];
        updated[index].question = value; 
        setQuestions(updated);
    };

    const handleOptionText = (qIndex, optIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[optIndex] = value;
        setQuestions(updated);
    };

    const handleAnswerSelection = (qIndex, value) => {
        const updated = [...questions];
        updated[qIndex].answer = value;
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
    };

    const removeQuestion = (index) => {
        const updated = questions.filter((_, i) => i !== index);
        setQuestions(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Examcreate(title, description, date, time, questions);
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            <SidebarAdmin />
            
            {/* Added ml-64 to push content past the fixed sidebar and flex-1 to fill space */}
            <main className="flex-1 ml-64 p-10">
                {/* Form Header */}
                <header className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Create New Exam</h1>
                        <p className="text-slate-500">Set up your exam details and questions below.</p>
                    </div>
                    <button 
                        type="submit" 
                        form="exam-form" 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-100 transition-all active:scale-95"
                    >
                        <Save size={20} />
                        Save Exam
                    </button>
                </header>

                <div className="max-w-5xl mx-auto">
                    <form id="exam-form" onSubmit={handleSubmit} className="space-y-8 pb-20">
                        
                        {/* Section: General Info */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                            <h2 className="text-lg font-bold text-slate-800 mb-6 border-b pb-4">General Information</h2>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Exam Title</label>
                                    <input 
                                        type="text" 
                                        value={title}
                                        onChange={(e) => settitle(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                                        placeholder="e.g. Mathematics 101" 
                                        required
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
                                    <input 
                                        type="text" 
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                                        placeholder="Final term exam" 
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Date</label>
                                    <input 
                                        type="date" 
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                                        required
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Duration (Minutes)</label>
                                    <input 
                                        type="number" 
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                                        placeholder="60" 
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section: Questions */}
                        {questions.map((q, qIndex) => (
                            <div key={qIndex} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 relative">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold uppercase">
                                        Question {qIndex + 1}
                                    </span>
                                    {questions.length > 1 && (
                                        <button 
                                            type="button" 
                                            onClick={() => removeQuestion(qIndex)}
                                            className="text-slate-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    )}
                                </div>
                                
                                <textarea 
                                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl min-h-30 outline-none focus:ring-2 focus:ring-indigo-500 mb-6" 
                                    placeholder="Type your question here..."
                                    value={q.question}
                                    onChange={(e) => handleQuestionText(qIndex, e.target.value)}
                                    required
                                />

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {q.options.map((opt, optIndex) => (
                                        <div key={optIndex} className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-slate-400">Op {optIndex + 1}</span>
                                            <input 
                                                type="text"
                                                value={opt}
                                                onChange={(e) => handleOptionText(qIndex, optIndex, e.target.value)}
                                                className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                                placeholder={`Option ${optIndex + 1}`}
                                                required
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-xl">
                                    <label className="text-sm font-bold text-emerald-800">Correct Answer:</label>
                                    <select 
                                        className="flex-1 p-2 bg-white border border-emerald-200 rounded-lg outline-none"
                                        value={q.answer}
                                        onChange={(e) => handleAnswerSelection(qIndex, e.target.value)}
                                        required
                                    >
                                        <option value="">Select correct option</option>
                                        {q.options.map((opt, i) => (
                                            <option key={i} value={opt}>{opt || `Option ${i+1}`}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}

                        <button 
                            type="button" 
                            onClick={addQuestion}
                            className="w-full py-4 border-2 border-dashed border-slate-300 rounded-2xl text-slate-500 font-semibold hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 transition-all flex items-center justify-center gap-2"
                        >
                            <PlusCircle size={20} />
                            Add Another Question
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Examcreate;