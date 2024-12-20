import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Taskprovider } from './context/Taskcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Taskprovider><App /></Taskprovider>  
  </StrictMode>,
)
