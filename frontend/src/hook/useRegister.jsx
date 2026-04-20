import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function useRegister() {
      const [loading ,setloading] = useState(false)
      const [ error , seterror]= useState(null)
    const Register= async (name ,email,role ,password ) => {
     try {
        const res = await axios.post('',{
            email:email,
            name:name,
            role:role,
            password:password
        }) 
        return res.data
     } catch (error) {
        seterror(error)
     }finally{
      setloading(true)
     }

    }
  return {Register , loading ,error}
}

export default useRegister