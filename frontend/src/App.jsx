import { Route, Routes } from 'react-router-dom'
import './App.css'
 import Home from './page/Home'
 import Login from './page/Login.jsx'
 import Register from './page/Register'
import Examcreate from './Components/Examcreate'
import Examview from './Components/Examview'
import ResultView from './Components/ResultView.jsx'
import Resultall from './Components/Resultall'
import StudentDash from './page/StudentDash'
import AdminDash from './page/AdminDash'
import ProtectRoute from './context/ProtectRoute.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>

        
       <Route path='/student-dash' element={
        <ProtectRoute allowedrole={['student']}>
           <StudentDash/> 
        </ProtectRoute>
      }/>

           <Route path='/exam' element={
            <Examview/>
              }/>

           <Route path='/result' element={ <ProtectRoute allowedrole={['student']}>
            <ResultView/>
            </ProtectRoute>}/>



        <Route path='/admin-dash' element={
          <ProtectRoute allowedrole={['admin']}>
            <AdminDash/>
            </ProtectRoute>
          }/>
          
        <Route path='/exam-create' element ={<ProtectRoute allowedrole={['admin']}>
           <Examcreate/>
        </ProtectRoute>
         }/>

        <Route path='/result-all' element={
          <ProtectRoute allowedrole={['admin']}>
         <Resultall/>
          </ProtectRoute>
         }/>
      

      </Routes>
 
    </>
  )
}

export default App
