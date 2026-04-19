import React, { createContext, useEffect, useReducer } from 'react'

export const Authcontext = createContext()
export const AuthReducer =(state ,action) =>{
    switch (action.type) {
        case 'LOGIN':
         return {user:action.payload}
            break;
          case'LOGOUT':
          return {user:null}
          default:
          return state
        
    }
}
export const AuthcontextProvider =({children}) => {
const [state ,dispatch] = useReducer(AuthReducer,{
    user:null
})
useEffect(()=>{
   const user =JSON.parse(localStorage.getItem('user'))
   if(user){
    dispatch({type:'LOGIN',payload:user})
   }
},[])
console.log('Authcontext state',state);
return <Authcontext.Provider value={{...state, dispatch}}>
    {children}
</Authcontext.Provider>

}