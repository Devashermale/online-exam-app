import React from 'react'
import Examcreate from '../Components/Examcreate';
import axios from 'axios';
function useExamcreate () {

    const Examcreate = async () => {
        
        const examData = {
            title,
            description,
            date,
            duration: time,
            questions
        };

        try {
            const res = await axios.post('http://localhost:3000/api/exams',{examData})
            alert("Exam created successfully!");
        } catch (err) {
            console.error("Error saving exam:", err)
        }
          }         
        return {Examcreate}

}


export default useExamcreate
