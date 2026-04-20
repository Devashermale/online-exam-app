import React, { useState } from 'react'
import useLogin from '../hook/useLogin'
function Login() {
    const [email ,setemail] =useState('') 
    const [password ,setpassword] = useState('')
   const {Login , loading ,error} = useLogin()
    const handleSubmit =async () => {
        await Login(email ,password)
    }
  return (
    <>
    <form onSubmit={handleSubmit} className=' flex items-center justify-center h-screen flex-col'>
       <div className=' size-60 border-2 p-2'>
        <h1 className=' text-3xl text-center font-bold'>login here </h1>
        <label>email</label>
        <input type='email' className=' w-full p-2' placeholder=' enter your email'onChange={(e)=>setemail(e.target.value)}/>
        <label>password</label>
        <input type="password" className=' w-full p-2' placeholder=' enter your password' onChange={(e)=>setpassword(e.target.value)} />
        <button type="submit" className=' border-2 p-2 mt-2 rounded-sm w-full'>Login</button>
        </div>
    </form>
    </>
  )
}

export default Login