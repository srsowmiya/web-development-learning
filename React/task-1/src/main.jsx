import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Notes from './Notes.jsx'
import Header from './components/Header.jsx'
import Signin from './Signin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Notes/>
  </StrictMode>,
)
