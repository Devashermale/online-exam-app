import { useContext } from "react"
import {ExamContext} from '../context/ExamContext'
export const ExamContext = ()=>{
    const context = useContext(ExamContext)
    if(!context) {
        throw new Error ('useAuthContext must be used inside a AuthContextProvider')
        console.log("Hook is trying to access:", Authcontext);
    }
    return context;
}