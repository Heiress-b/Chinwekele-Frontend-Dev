import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Myportfolio from './heiress'
import './heiress.css'
import Myrouter from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myrouter />
  </StrictMode>,
)
