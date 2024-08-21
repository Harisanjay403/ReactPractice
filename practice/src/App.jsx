
import './Student.css'
import { Student } from './Student'

function App() {
  

  return (
    <>
      < Student name="Raj" age={23} isMarried={false} />
      < Student name="Bambam" age={21} isMarried={false} />
      < Student name="PerumalSamy" age={21} isMarried={true} />
      < Student />
     
    </>
  )
}

export default App
