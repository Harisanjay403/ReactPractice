import '../src/UserCard.css'

function User(){
    return(
        <>
        <div className="container">

            <span className='isOnline'>Online</span>

            <img className='img' src="https://www.shutterstock.com/image-photo/photo-document-passport-id-mature-260nw-1178817271.jpg" />

            <h2 className='name'>Name of the employee</h2>
            <h3 className='city'>District</h3>
            <h4 className='desig'>Designation </h4>
            
            <div className='btn'>
            <button>Message</button>
            <button>Following</button>

            </div>
            
            <h4 className='skills_heading'>Skills</h4>

            <div className="skills">
                
                <ul>
                    <li>HTML </li>
                    <li>CSS </li>
                    <li>Java Script</li>
                    <li>React </li>
                    <li>Redux</li>
                    <li>Redux</li>
                </ul>
            </div>

        </div>
            
        </>
    )
}

export const UserCard = () => {
  return (
    <div>
        < User />
    </div>
  )
}
