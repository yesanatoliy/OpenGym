import EventList from "../components/EventList"
import { useState } from "react"
import EventAddForm from "../components/EventAddForm"
import NavBar from "../components/NavBar"

const Home = (props) => {

  const [clicked, toggleClicked] = useState(false)
  



  const handleClick = () => {
    if (clicked === false) {
      toggleClicked(true)
    } else {
      toggleClicked(false)
    }
  }


  return (
    <div>
      <NavBar />
      {props.user && (<h1 className="welcome">Welcome to the dashboard, {props.user.name} </h1>)}
      <div className="home">
        {clicked ? (<button id="close" className="add-event" onClick={() => handleClick()}>Close</button>) :
          (<button id="add" className="add-event" onClick={() => handleClick()}>Add Event</button>)}

        <div>
          {clicked ? (
            <EventAddForm />
          ) : <EventList />}
        </div>
      </div>

    </div>
  )
}

export default Home