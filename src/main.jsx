import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from '@/app.jsx'
import { ColorDefinitionsProvider } from '@/context/colors.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorDefinitionsProvider>
      <App />
    </ColorDefinitionsProvider>
  </StrictMode>,
)
