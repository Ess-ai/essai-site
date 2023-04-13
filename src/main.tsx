import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Preloader } from './components'

ReactDOM.createRoot(document.getElementById('main_root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
