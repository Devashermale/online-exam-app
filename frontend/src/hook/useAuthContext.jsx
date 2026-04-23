import { useContext } from "react"
import { AuthContext } from "../context/Authcontext"
export const useAuthContext =()=>{
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error ('useAuthContext must be used inside a AuthContextProvider')
        console.log("Hook is trying to access:", Authcontext);
    }
    return context;
}
