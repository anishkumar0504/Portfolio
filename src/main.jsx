import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Hero } from "./component/Hero";
import {Navbar} from "./component/Navbar";
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
