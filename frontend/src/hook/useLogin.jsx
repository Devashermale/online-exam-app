import axios from 'axios'
import React from 'react'

function useLogin() {
   
   const Login =async (email ,password) => {
    try {
      const res =await axios.post('',{
        email:email,
        password:password
      }) 
    } catch (error) {
       seterror(error) 
    }finally{
        Setloading(false)
    }
   }
  
}

export default useLogin