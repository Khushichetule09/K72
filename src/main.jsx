import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'
import { BrowserRouter } from 'react-router-dom'   // <-- yeh line add karo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairs>
        <NavContext>
          <App />
        </NavContext>
      </Stairs>
    </BrowserRouter>
  </React.StrictMode>,
)
