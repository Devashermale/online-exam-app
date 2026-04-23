import React from 'react'
import {useAuthcontext} from './useAuthContext';
export const useLogout =() => {
 const {dispatch} = useAuthcontext
 const logout =()=>{
    localStorage.removeItem('user')
   dispatch({type:"LOGOUT"})
 }

  return {logout}
}
