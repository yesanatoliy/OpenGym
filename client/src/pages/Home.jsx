import EventList from "../components/EventList"
import { useState } from "react"
import EventForm from "../components/EventForm"
import NavBar from "../components/NavBar"
const Home = () => {
  
  const [clicked, toggleClicked] = useState(false)

  const handleClick = () => {
    if(clicked === false){
      toggleClicked(true)
  } else {
    toggleClicked(false)
  }
    }
    

  return (
    <div>
      <NavBar />
        <h1>Welcome, {localStorage.getItem("username")}</h1>
        {clicked ? (<button onClick={()=> handleClick()}>Close</button>) : 
        (<button onClick={()=> handleClick()}>Add Event</button>)}
        
        <div> 
          {clicked ? (
          <EventForm />
        ) : (null) }
        </div>
        
        <EventList />
    </div>
  )
}

export default Home