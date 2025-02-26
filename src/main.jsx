import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Ola from './pages/ola.jsx'
import rota from './rotas.jsx'
import { RouterProvider } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rota} />
  </StrictMode>,
)
