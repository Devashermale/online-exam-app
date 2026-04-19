import axios from 'axios'
import React, { useState } from 'react'

function ResultView() { 
  const[data ,setdata] = useState([])

  try {
    const res = axios.get('')
    setdata(res.data)
  } catch (error) {
    seterror(error)
  }
  return (
   
    <div className=' border-2'>
        <h1>user id: </h1>
        <h4>Result id:</h4>
        <h4>Exam title:</h4>
        <h4>Exam description:</h4>
        <h4>Exam Score:</h4>
        <h4>Question Attempted:</h4>
        <h4>Correct answer</h4>
    </div>
  )
}

export default ResultView