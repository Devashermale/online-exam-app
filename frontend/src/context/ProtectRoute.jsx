import { Navigate } from "react-router-dom"
import {useAuthContext} from "../hook/useAuthContext"

const ProtectRoute = ({children , allowedrole})=>{
 const {user} = useAuthContext()

 if(!user){
    return <Navigate to='/' replace />;
 }
 if (allowedrole &&!allowedrole.includes(user.role)) {
    if(user.role === 'admin') return <Navigate to='/admin-dash' />
    if(user.role ==='student') return <Navigate to='/student-dash'/>
     return <Navigate to='/'/>
 }

 return children ;
}

export default ProtectRoute