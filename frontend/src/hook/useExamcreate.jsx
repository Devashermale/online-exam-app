import React from 'react'
import Examcreate from '../Components/Examcreate';
import axios from 'axios';
function useExamcreate () {

    const Examcreate = async (title,description,date,time,questions
    ) => {
        try {
            const res = await axios.post('http://localhost:3000/api/exams',{ 
            title:title,
            description:description,
            date:date,
            duration: time,
            questions:questions})
            alert("Exam created successfully!");
            return res.data
        } catch (err) {
            console.error("Error saving exam:", err)
        }
          }         
        return {Examcreate}

}


export default useExamcreate
