import { Children, createContext, useReducer } from "react";

export const ExamContext = createContext();

export const examReducer = (state ,action) =>{
    switch (action.type) {
        case 'create_exam':
         return {
            exam:action.payload
         }
        case'delete_exam':
        return{
            exam:state.exam.filter((e)=>e._id !== action.payload._id)
        
        } 
           default:
            return state
    }
}
export const ExamContextProvider =({children}) =>{
    const [state ,dispatch ] = useReducer(examReducer,{
        exam:null
    })
    return (
        <ExamContext.Provider  value={{...state ,dispatch}}>
         {children}
        </ExamContext.Provider>
    )
}
export default examReducer