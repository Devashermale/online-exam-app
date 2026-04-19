import React, { useState } from 'react'
import useRegister from '../hook/useRegister'
function Register() {
  const[ name , setname ] = useState('')
  const [email ,setemail] = useState('')
  const[role ,setrole] = useState('')
  const [password ,setpassword]= useState('')
  const {Register , loading ,error} = useRegister()
  const handlesubmit = async () => {
    await Register (name,email ,role ,password)
  }
  return (
    <>
    <form action="" onClick={handlesubmit} className=' h-screen'>
    <h1>
       Register here
    </h1>
    <select className=' grid grid-cols-2' onChange={(e)=>setrole(e.target.value)}  >
        <option value="">admin </option>
        <option value="">student</option>
    </select>
    <input type="text" placeholder=' full name' onChange={(e)=>setname(e.target.value)}  />
    <input type="email" placeholder=' enter email' onChange={(e)=>setemail(e.target.value)} />
    <input type="password" placeholder=' enter password' onChange={(e)=>setpassword(e.target.value)} />
    <button type=' submit' ></button>
     </form>
    </>
  )
}

export default Register