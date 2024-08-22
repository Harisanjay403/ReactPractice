
import './Student.css'
import { Student } from './Student'
import { ChildrenComponent } from './ChildrenComponent'
import { ArraySample } from './ArraySample'

function App() {
  const items=[
    {id:1, names:"item1"},
    {id:2, names:"item2"},
    {id:3, names:"item3"},
  ]

  const handleClick=()=>{
    alert("button is Clicked")
  }
  

  return (
    <>
      < Student name="Raj" age={23} isMarried={false} />
      < Student name="Bambam" age={21} isMarried={false} />
      < Student name="PerumalSamy" age={21} isMarried={true} />
      < Student />

      < ChildrenComponent>
        <p> This is a simple parameter 1</p>
        <p> This is a simple parameter 2</p>
        <p> This is a simple parameter 3</p>
      </ChildrenComponent>

      <ArraySample items={items} handleClick={ handleClick }/>
     
    </>
  )
}

export default App
