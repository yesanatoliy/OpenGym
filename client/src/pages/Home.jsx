import EventList from "../components/EventList"
import { useState } from "react"
import EventForm from "../components/EventForm"
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
        <h1>Welcome</h1>
        <button onClick={()=> handleClick()}>Add Event</button>
        <div> 
          {/* {clicked ? (
          <EventForm />
        )} */}
        </div>
        
        <EventList />
    </div>
  )
}

export default Home