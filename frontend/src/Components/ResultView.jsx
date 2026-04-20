import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ResultView() { 
  const[data ,setdata] = useState([])
const handleResult = async () => {
  try {
    const res = await axios.get('')
    setdata(res.data)
  } catch (error) {
    seterror(error)
  }
}
  useEffect(()=>{
 handleResult()
  })
  return (
    <>
    <div className=' min-h-screen'>
    <h1 className='text-5xl font-bold text-center'>Result </h1>
    <div className=' grid grid-cols-2'>
      
      
        <h1>user id: </h1>
        <h4>Result id:</h4>
        <h4>Exam title:</h4>
        <h4>Exam description:</h4>

      <div>
       <h4>Exam Score:</h4>
        <h4>Question Attempted:</h4>
        </div>
      <div>  <h4>Correct answer</h4>
      </div>
      

       
      
    </div>
    </div>
    </>
  )
}

export default ResultView