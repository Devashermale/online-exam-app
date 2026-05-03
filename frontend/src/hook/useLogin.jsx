import axios from 'axios'
import React, { useState } from 'react'
import {useAuthContext} from '../hook/useAuthContext';
function useLogin() {
   const [error ,seterror] =useState(null)
   const[loading ,setloading] = useState(false)
   const {dispatch}= useAuthContext()
   const Login = async (email,password,role) => {
    setloading(true)
    seterror(null)
    try {
      const res =await axios.post('http://localhost:3000/api/login',{
        email:email,
        password:password,
        role:role,
      }) 
      
     if (res.status ===200 || res.status ===201) {
         localStorage.setItem('user', JSON.stringify(res.data));

        dispatch({type:'LOGIN',payload:res.data})
     }
      return res.data
    } catch (error) {
       seterror(error) 
    }finally{
        setloading(true)
    }
   }
   return {Login ,loading, error}
} 

export default useLogin