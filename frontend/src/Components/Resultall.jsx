import axios from 'axios'
import React, { useState } from 'react'

function Resultall() {
  const [data ,setData] = useState([])
  const [error ,seterror] = useState(null)
  const handledata = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get('http://localhost:3000/api/results')
      console.log(res.data);
      setData(res.data) 
       console.log(data);

    } catch (error) {
      
    }
  }
  return (
    <>
    <div>
        <div>
       <h1>user id: </h1>
        <h4>Result id:</h4>
        <h4>Exam title:</h4>
        <h4>Exam description:</h4>
        <h4>Exam Score:</h4>
        <h4>Question Attempted:</h4>
        <h4>Correct answer</h4>
        </div>
    </div>
    </>
  )
}

export default Resultall