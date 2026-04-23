import React, { useState } from 'react';
import axios from 'axios';
import useExamcreate from '../hook/useExamcreate';
function Examcreate() {
    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [score ,setscore] = useState('')
    const {Examcreate} = useExamcreate()
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
        setQuestions([...questions, { questionText: '', options: ['', '', '', ''], answer: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
     await Examcreate(title,description,date,time,questions)
    };

    return (
        <>
            <form onSubmit={handleSubmit} className=' border-2 m-8 bg-gray-200'>
                <h2 className=' text-2xl text-center font-medium'>Exam Details/create</h2>
                <div className=' grid grid-cols-4'>
                    <div className=' flex items-center justify-center'>
                <label>Title</label>
                <input 
                    type="text" 
                    placeholder="title" 
                    value={title} 
                    onChange={(e) => settitle(e.target.value)} 
                    className=' border-0 bg-gray-200 p-2 m-4'
                /></div>
                <div>
                <label>Description</label>
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className=' p-2 m-4'
                />
                </div>
                <div>
                <label>Date</label>
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)} 
                    className=' p-2 m-4'
                />
                </div>
                <div>
                <label className=' text-center w-full'>Time</label>
                <input 
                    type="number" 
                    placeholder="Duration (minutes)" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    className=' p-2 m-4'
                />
                </div>
                <div>
                    <label className=' text-center w-full'>Score</label>
                <input 
                    type="number" 
                    placeholder="Duration (minutes)" 
                    value={time} 
                    onChange={(e) => setscore(e.target.value)} 
                    className=' p-2 m-4'
                />
                </div>
               </div>
                <hr />

                {questions.map((q, qIndex) => (
                    <div key={qIndex} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                        <h3>Question {qIndex + 1}</h3>
                        <input 
                            placeholder="Enter the question text"
                            className=' p-2 m-4 w-90'
                            value={q.questionText}
                            onChange={(e) => handleQuestionText(qIndex, e.target.value)}
                        />

                        <div>
                            {q.options.map((opt, optIndex) => (
                                <div key={optIndex}>
                                    <label>Option {optIndex + 1}: </label>
                                    <input 
                                        value={opt}
                                        onChange={(e) => handleOptionText(qIndex, optIndex, e.target.value)}
                                        className=' p-1 m-2'
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label>Correct Answer: </label>
                            <select 
                                value={q.answer} 
                                onChange={(e) => handleAnswerSelection(qIndex, e.target.value)}
                            >
                                <option value="" className=' p-2'>Select Answer</option>
                                {q.options.map((opt, i) => (
                                    <option key={i} value={opt} className=' p-2 m-4'>
                                        
                                        {opt || `Option ${i + 1}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}

                <button type="button" onClick={addQuestion} className=' m-2 p-3 border-2'>
                    Add Another Question
                </button>
                
                <br /><br />
                
                <button type="submit" className=' m-2 p-2 border-2'>
                    Save Exam
                </button>
            </form>
        </>
    );
}

export default Examcreate;