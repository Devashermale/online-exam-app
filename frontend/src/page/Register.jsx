import React, { useState } from 'react'
import useRegister from '../hook/useRegister'
function Register() {
  const[ name , setname ] = useState('')
  const [email ,setemail] = useState('')
  const[role ,setrole] = useState('')
  const [password ,setpassword]= useState('')
  const {Register,loading ,error} = useRegister()

  const handlesubmit = async () => {
    await Register   (name,email ,role ,password)
  }
  return (
    <>
    <form  onSubmit={handlesubmit} className=' flex items-center justify-center h-screen'>
      <div className=' size-72'>
    <h1>
       Register here
    </h1>
    <select className=' grid grid-row-2' onChange={(e)=>setrole(e.target.value)}  >
        <option value="">admin </option>
        <option value="">student</option>
    </select>
    <label>name </label>
    <input type="text" placeholder=' full name' className=' w-full' onChange={(e)=>setname(e.target.value)}  />
    <label>email</label>
    <input type="email" placeholder=' enter email' className=' w-full' onChange={(e)=>setemail(e.target.value)} />
    <label>password</label>
    <input type="password" placeholder=' enter password' className=' w-full' onChange={(e)=>setpassword(e.target.value)} />
    <button type='submit' >submit</button>
    </div>
     </form>
    </>
  )
}

export default Register