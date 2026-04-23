import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
function useRegister() {
      const [loading ,setloading] = useState(true)
      const [ error , seterror]= useState(null)
      const {dispatch} = useAuthContext()
    const Register= async (name ,email,role ,password ) => {
      setloading(true); 
        seterror(null);
     try {
        const res = await axios.post('http://localhost:3000/api/users',{
            email:email,
            name:name,
            role:role,
            password:password
        })         
        console.log('success',res.data);
 
        if (res.status ===200 || res.status ===201) {
localStorage.setItem('user', JSON.stringify(res.data));

        dispatch({type:'LOGIN',payload:res.data})
        
        }
        
        return res.data
     } catch (error) {
seterror(error.response?.data?.error || "Registration failed");
     }finally{
      setloading(false)
     }

    }
  return {Register, loading,error}
}

export default useRegister