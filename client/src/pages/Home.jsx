import EventList from "../components/EventList"
import { useState } from "react"
import EventForm from "../components/EventForm"
const Home = () => {
  const [clicked, toggleClicked] = useState(false)

  const testLocalStorage = () => {
    console.log(localStorage.getItem("email"))
  }

  testLocalStorage()

  const handleClick = () => {
    if(clicked === false){
      toggleClicked(true)
  } else {
    toggleClicked(false)
  }
    }
    

  return (
    <div>
        <h1>Welcome, User</h1>
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