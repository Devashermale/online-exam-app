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
function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/exam-create' element ={<Examcreate/>}/>
        <Route path='/exam-view' element={<Examview/>}/>
        <Route path='/result-all' element={<Resultall/>}/>
        <Route path='/result-view' element={<ResultView/>}/>
        <Route path='/admin-dash' element={<AdminDash/>}/>
        <Route path='/Student-dash' element={<StudentDash/>}/>

      </Routes>
 
    </>
  )
}

export default App
