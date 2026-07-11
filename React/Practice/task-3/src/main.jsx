import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import State from './State'
import Profiles from './Profiles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profiles />
  </StrictMode>,
)
