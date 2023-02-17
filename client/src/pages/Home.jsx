import EventList from "../components/EventList"
import { useState } from "react"
import EventAddForm from "../components/EventAddForm"
import NavBar from "../components/NavBar"
const Home = () => {

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
      <h1 className="welcome">Welcome, {localStorage.getItem("username")}</h1>
      <div className="home">
      {clicked ? (<button onClick={() => handleClick()}>Close</button>) :
        (<button onClick={() => handleClick()}>Add Event</button>)}

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