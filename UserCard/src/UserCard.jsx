import '../src/UserCard.css'

const userdata=[
    {
            name:"Rajesh" ,
            city:"Karur" ,
            desig:"Front End Developer" ,
            isOnline:'false' ,
            skills:["HTML","CSS", "Java Script", "React", "Redux"],
            img:"https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1-change.jpg"
    },
    {
        name:"Chen Fang" ,
        city:"China" ,
        desig:"React Developer" ,
        isOnline:'True' ,
        skills:["HTML","CSS", "Java Script", "React", "Redux"],
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtEM2bXDOxO3HV0Oakt0e04xWBCpnurXWbg&s"
    },
    {
        name:"Kishore" ,
        city:"Erode" ,
        desig:"Full Stack Developer" ,
        isOnline:'True' ,
        skills:["HTML","CSS", "Java Script", "React", "Redux", "Java", "MySQL","RESTapi"],
        img:"https://lawschoolpolicyreview.com/wp-content/uploads/2018/06/passport-size-photo-2-e1558013566564.jpg?w=596"
    },
]

function User(props){
    return(
        <>
        <div className="container">

            <span className={props.isOnline? "isOnline on" : "isOnline off"}>{props.isOnline?"Online" : "Offline"}</span>

            <img className='img' src={props.img} />

            <h2 className='name'>{props.name}</h2>
            <h3 className='city'>{props.city}</h3>
            <h4 className='desig'>{props.desig}</h4>
            
            <div className='btn'>
            <button>Message</button>
            <button>Following</button>

            </div>
            
            <h4 className='skills_heading'>Skills</h4>

            <div className="skills">
                
                <ul>
                    {props.skills.map((skill,index)=>(<li key={index}>{skill}</li>))}                    
                </ul>
            </div>

        </div>
            
        </>
    )
}

export const UserCard = () => {
  return (
    <>
        {/* < User 
            name="Rajesh" 
            city="Karur" 
            desig="Front End Developer" 
            isOnline={false} 
            skills={["HTML","CSS", "Java Script", "React", "Redux"]}
            img="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1-change.jpg"
        /> */}

        {userdata.map((user,index)=>(
            <User key={index}
                name={user.name}
                city={user.city}
                desig={user.desig}
                isOnline={user.isOnline}
                skills={user.skills}
                img={user.img}

            />
        ))}
    </>
  )
}
