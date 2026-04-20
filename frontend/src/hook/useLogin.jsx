import axios from 'axios'
import React, { useState } from 'react'

function useLogin() {
   const [error ,seterror] =useState(null)
   const[loading ,setloading] = useState(true)
   const Login =async (email ,password) => {
    try {
      const res =await axios.post('',{
        email:email,
        password:password
      }) 
      return res.data
    } catch (error) {
       seterror(error) 
    }finally{
        Setloading(false)
    }
   }
   return {Login ,loading, error}
} 

export default useLogin