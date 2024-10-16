import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App.jsx'
// import './index.css'
import {UserCard} from './UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <UserCard />
  </StrictMode>,
)
