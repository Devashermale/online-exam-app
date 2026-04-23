import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Resultall() {
  const [data ,setData] = useState([])
  const [error ,seterror] = useState(null)
  console.log(data);
  
   const handleResult = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/exams");
      setData(res.data);
      

    } catch (error) {
      seterror(error.message);
    }
  };
  useEffect(() => {
    handleResult();
  },[]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <div>
      <div>
        <h1>Result of student </h1>
      <input type="search" />
      </div>
      
      {data.map((obj)=>(
        <div key={obj._id} className=' border-2 m-2'>
        <h4>Result id: {obj.result_id}</h4>
        <h4>Exam title:{obj.title}</h4>
        <h4>Exam description:{obj.description}</h4>
        <h4>Exam Score:{obj.score}</h4>
        </div>
      ))}
    </div>
    </>
  )
}

export default Resultall