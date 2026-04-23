import axios from 'axios'
import React, { useState } from 'react'

function ResultView() {
  const [exam ,setexam] = useState([])


  const resultdata = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/exams')
      setexam(res.data)
    } catch (error) {
      
    }
    
  }
  return (
    <div>
 {exam.map((obj)=>{
 <div>
  {obj.title}
 </div>
 })}
    </div>
  )
}

export default ResultView