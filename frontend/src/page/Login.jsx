import React, { useState } from 'react'
import Login from '../hook/useLogin'
function Login() {
    const [email ,setemail] =useState('') 
    const [password ,setpassword] = useState('')
   
    const Login =async () => {
        await Login(email ,password)
    }
  return (
    <>
    <form onClick={handleSubmit} className=' '>
        <h1>login here </h1>
        <input type='email' placeholder=' enter your email'onChange={(e)=>setemail(e.target.value)}/>
        <input type="password" placeholder=' enter your password' onChange={(e)=>setpassword(e.target.value)} />
        <button type="submit">Login</button>

    </form>
    </>
  )
}

export default Login