import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import State from './State'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State />
  </StrictMode>,
)
