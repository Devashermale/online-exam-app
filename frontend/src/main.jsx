import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/Authcontext.jsx'
import { ExamContextProvider } from './context/ExamContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<AuthContextProvider>
  <ExamContextProvider>
    <App />
    </ExamContextProvider>
   </AuthContextProvider>
  </BrowserRouter> 
)
