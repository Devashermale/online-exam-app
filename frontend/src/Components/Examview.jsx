import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Examview() {
    const navigate = useNavigate();
    const [data, setdata] = useState([]); 
    const [activeExam, setActiveExam] = useState(null);
    const [answers, setAnswers] = useState({}); 
    const [error, seterror] = useState(null);
    const [second, setsecond] = useState(0);
    const [submit, setsubmit] = useState(false);
    const [loading, setloading] = useState(false);
    const [score, setScore] = useState(0);

    const handledata = async () => {
        setloading(true);
        try {
            const res = await axios.get('http://localhost:3000/api/exams');
            setdata(res.data);
        } catch (error) {
            seterror(error.message);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        handledata();
    }, []);

    useEffect(() => {
        let timer;
        if (activeExam && second > 0 && !submit) {
            timer = setInterval(() => {
                setsecond((prev) => prev - 1);
            }, 1000);
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

    const handleOptionChange = (qIndex, value) => {
        setAnswers({ ...answers, [qIndex]: value });
    };

    const handlesubmit = async () => {
        let tempScore = 0;
        activeExam.questions.forEach((q, idx) => {
            if (answers[idx] === q.answer) {
                tempScore++;
            }
        });
        setScore(tempScore);
        setsubmit(true);

    };

    if (loading) return <h1>Loading Exams...</h1>;
    if (error) return <h1>Error: {error}</h1>;

    if (submit) {
        return (
            <div>
                <h1>Exam Submitted!</h1>
                <h2>Your Score: {score} / {activeExam.questions.length}</h2>
                <button onClick={() => setsubmit(false) || setActiveExam(null)}>
                    Return to Dashboard
                </button>
            </div>
        );
    }

    if (activeExam) {
        return (
            <div>
                <h1>Exam: {activeExam.title}</h1>
                <h4>Time Remaining: {Math.floor(second / 60)}:{String(second % 60).padStart(2, '0')}</h4>
                
                {activeExam.questions.map((q, qIndex) => (
                    <div key={qIndex}>
                        <h4>Question {qIndex + 1}: {q.questionText}</h4>
                        {q.options.map((opt, oIndex) => (
                            <div key={oIndex}>
                                <input 
                                    type="radio" 
                                    name={`q${qIndex}`} 
                                    value={opt} 
                                    onChange={(e) => handleOptionChange(qIndex, e.target.value)} 
                                />
                                {opt}
                            </div>
                        ))}
                    </div>
                ))}
                <button onClick={handlesubmit}>Submit Exam</button>
            </div>
        );
    }

    return (
        <>
            <h1>Available Exams</h1>
            {data.map((obj) => (
                <div key={obj._id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <h2>{obj.title}</h2>
                    <p>{obj.description}</p>
                    <p>Date: {new Date(obj.date).toLocaleDateString()}</p>
                    <button onClick={() => startExam(obj)}>Start Exam</button>
                </div>
            ))}
        </>
    );
}

export default Examview;