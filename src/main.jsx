import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProfileProvider from './Context/ProfileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </BrowserRouter>
  </React.StrictMode>
)
