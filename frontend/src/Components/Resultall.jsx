import axios from 'axios'
import React, { useState } from 'react'

function Resultall() {
  const [data ,setData] = useState([])
  
  const handledata = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get('http://localhost:3000/api/results')
      console.log(res.data);
      setData(res.data) 
       console.log(res.data);

    } catch (error) {
      
    }
  }
  return (
    <>
    <div>
      
        <div>
        <p>title:</p>
        <p></p>
        </div>
    </div>
    </>
  )
}

export default Resultall