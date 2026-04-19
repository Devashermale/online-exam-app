import { useContext } from "react"
import { Authcontext } from "../context/Authcontext"

export const useAuthcontext =()=>{
    const context = useContext(Authcontext)
    if(!context) {
        throw Error ('useAuthContext must be used inside a AuthContextProvider')
    }
    return context
}
export default useAuthcontext 