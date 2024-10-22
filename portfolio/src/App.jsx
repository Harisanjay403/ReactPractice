import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {Header} from './Header.jsx'
import { Home } from './Home.jsx'
import { Project } from './Project.jsx'
import { Resume } from './Resume.jsx'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header />
      < Routes>
        <Route path={'/'} element={< Home />}/>
        <Route path={'/project'} element={ < Project />} />
        <Route path={'/resume'} element={ < Resume />} />
          
        
      </Routes>
    </BrowserRouter>
      
     
      
    </>
  )
}

export default App
