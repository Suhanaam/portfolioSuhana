import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PortfolioMe from './component/PortfolioMe.jsx'
import 'E:/ENTRY/try/react/PortfolioMe/node_modules/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <PortfolioMe />
  </StrictMode>,
)
