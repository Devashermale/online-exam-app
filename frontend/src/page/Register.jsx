import React, { useState } from 'react'
import useRegister from '../hook/useRegister'
function Register() {

  const[ name , setname ] = useState('')
  const [email ,setemail] = useState('')
  const[role ,setrole] = useState('admin')
  const [password ,setpassword]= useState('')
  const {Register,loading ,error} = useRegister()
 
  const handlesubmit = async (e) => {
    e.preventDefault()
    await Register(name,email,role,password)
  }
if(error){
  return <h1>{error}
  </h1>
}
  return (
    <>
    <form  onSubmit={handlesubmit} className=' flex items-center justify-center h-screen '>
      <div className=' size-84 rounded border-2 p-2'>
    <h1 className=' text-3xl text-center font-bold'>
       Register here
    </h1>
   <select 
  className='block w-full p-2 border rounded' 
  value={role} 
  onChange={(e) => setrole(e.target.value)}
>
  <option value="admin">Admin</option>
  <option value="student">Student</option>
</select>
    <label>name </label>
    <input type="text" placeholder=' full name' className=' w-full p-2' onChange={(e)=>setname(e.target.value)}  />
    <label>email</label>
    <input type="email" placeholder=' enter email' className=' w-full p-2' onChange={(e)=>setemail(e.target.value)} />
    <label>password</label>
    <input type="password" placeholder=' enter password' className=' w-full p-2' onChange={(e)=>setpassword(e.target.value)} />
    <button type='submit' className=' p-2 border-2 mt-2 w-full' >submit</button>
    </div>
     </form>
    </>
  )
}

export default Register