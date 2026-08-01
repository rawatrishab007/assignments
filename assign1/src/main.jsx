import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './class4/Context.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Context.Provider value={"HELLO"}>
    <App/>
    </Context.Provider>
    </BrowserRouter>
  
)
