import React, { useEffect, useState } from 'react'
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
    <div className=''>
        <h1>title:</h1>
        <p>description:</p>
        <h4>date:</h4>
        <h4>Time:</h4>
        <h4>Question</h4>
        <select onChange={(e)=>setoption(e.target.value)}>
            <option value={data.option}></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <h5>correct answer</h5>
    </div>
    </>
  )
}

export default Examview