import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { background } from 'storybook/internal/theming'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App style={{ background: "#ff0000" }} />
  </StrictMode>,
)
