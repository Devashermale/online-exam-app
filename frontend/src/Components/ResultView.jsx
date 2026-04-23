import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ResultView() {
  const [data ,setData] = useState([])
  const [search ,setsearch] = useState('')
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
const filterexam = data.filter(obj => obj.title.toLowerCase().includes(search.toLowerCase()));
  useEffect(() => {
    handleResult();
  },[]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
    <div>
      <div className=' grid grid-cols-2  h-24 '>
        <div>  <h1 className=' text-2xl text-center font-bold'>Result of student </h1></div>
        <div className=' p-2'>
          <input type="search" placeholder=' search here' className=' p-2' onChange={(e)=>setsearch(e.target.value)} />
          </div>
      
      
      </div>
      
      {filterexam.map((obj)=>(
        <div key={obj._id} className=' border-2 m-2 p-2'>
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

export default ResultView