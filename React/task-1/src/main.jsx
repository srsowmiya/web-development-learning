import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sample from './components/Sample'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sample/>
  </StrictMode>,
)
