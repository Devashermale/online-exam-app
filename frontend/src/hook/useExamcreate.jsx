import axios from 'axios';

function useExamcreate() {

    const createExam = async (title, description, date, time, questions) => {
        try {
            // 1. Get the user/token from localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            const token = user?.token;

            if (!token) {
                alert("You must be logged in to create an exam.");
                return;
            }

            // 2. Perform the POST request with the Authorization header
            const res = await axios.post('http://localhost:3000/api/exams', 
                { 
                    title: title,
                    description: description,
                    date: date,
                    duration: time,
                    questions: questions
                }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            alert("Exam created successfully!");
            return res.data;
        } catch (err) {
            console.error("Error saving exam:", err.response?.data?.error || err.message);
            alert("Failed to create exam: " + (err.response?.data?.error || "Server Error"));
        }
    };

    return { createExam };
}

export default useExamcreate;