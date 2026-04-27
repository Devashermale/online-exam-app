import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthcontextProvider } from './context/AuthContext.jsx'
import { ExamContextProvider } from './context/ExamContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<AuthcontextProvider>
  <ExamContextProvider>
    <App />
    </ExamContextProvider>
   </AuthcontextProvider>
  </BrowserRouter> 
)
