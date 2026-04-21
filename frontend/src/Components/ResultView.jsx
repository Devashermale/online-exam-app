import axios from "axios";
import React, { useEffect, useState } from "react";

function ResultView() {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null); 
  console.log(data);
  
  const handleResult = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/results");
      setdata(res.data);
      

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
      <div className=" min-h-screen">
        {data.map((obj)=>(
          <div>
        <h1 className="text-5xl font-bold text-center">Result </h1>
        
        <div className=" grid grid-cols-2">
          <h1>user id: {obj.exam_id} </h1>
          <h4>Result id:{obj.result_id}</h4>
          <h4>Exam title:</h4>
          <h4>Exam description:</h4>
          <h4>Exam Score:</h4>
        </div>
        <div>
          <h4>Question Attempted:</h4>
        </div>
        <div>
          <h4>Correct answer</h4>
        </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default ResultView;
