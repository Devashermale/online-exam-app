import React, { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns';
import axios from 'axios'
function Examview() {
    const [data,setdata] = useState([])
    const [option ,setoption] = useState('')
    const [error ,seterror] = useState(null)
    const [ loading ,setloading] = useState(false)
    const handledata = async () => {
        try {
            const res = await axios.get('http://localhost:3000/api/exams')
            setdata(res.data)
            console.log(res.data);
            
        } catch (error) {
           seterror(error.msg) 
        }finally{
            setloading(true)
        }
    }
    const handleinput = async () => {
        try {
            const res = axios.put('',{
            option:option
        })  
        } catch (error) {
           console.error(error);
            
        }
      
    }
    
    
  
    useEffect(()=>{
        handledata()
    },[])

  return (
    <>
     {data.map((obj)=>(
    <div className='' key={obj._id}>
        <h1 className=' text-3xl text-center font-bold'>Exam name:{obj.title}</h1>
       <div className=' grid grid-cols-2  '>
        <div className=' border-2 p-4 m-2'>
        <h1 className=' font-medium text-xl m-2'>title:{obj.title}</h1>
        <p className=' font-medium text-xl m-2'>description:{obj.description}</p>
        <span className=' font-medium text-xl m-2'>exam id :{obj.exam_id}</span>
        </div>
        <div className=' border-2 p-4 m-2'>
        <h4 className=' font-medium text-xl m-2'>date:{new Date(obj.date).toLocaleDateString()}</h4>
        <h4 className=' font-medium text-xl m-2'>Time:{obj.duration} minutes</h4>
        </div>
        </div>
        <h4 className=' font-medium text-xl m-2'>Question: {obj.questions[0].question}</h4>
        <select  onChange={(e)=>setoption(e.target.value)} className=' font-medium text-xl m-2'>
            <option value={obj.questions[0].options[0]}>{obj.questions[0].options[0]}</option>
            <option value={obj.questions[0].options[1]}>{obj.questions[0].options[1]}</option>
            <option value={obj.questions[0].options[2]}>{obj.questions[0].options[2]}</option>
            <option value={obj.questions[0].options[3]}>{obj.questions[0].options[3]}</option>
        </select>
        <h5 className=' font-medium text-xl m-2'>correct answer :{obj.questions[0].answer}</h5>
    </div>
))}
    </>
  )
}

export default Examview