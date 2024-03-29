import EventList from "../components/EventList"
import { useState } from "react"
import EventAddForm from "../components/EventAddForm"


const Home = (props) => {

  const [clicked, toggleClicked] = useState(false)




  const handleClick = () => {
    if (clicked === false) {
      toggleClicked(true)
    } else {
      toggleClicked(false)
    }
  }

  if (props.user) {

    return (
      <div>
        {props.user && (<h1 className="welcome">Welcome to the dashboard, {props.user.name} </h1>)}
        <h1 className="home-title">Events</h1>
        <div>
          {clicked ? (
            <div className="add-div">
              <button id="close" className="add-event" onClick={() => handleClick()}>Close</button>
            </div>
          ) :
            (
              <div className="add-div">
                <button id="add" className="add-event" onClick={() => handleClick()}>Add Event</button>
              </div>
            )}

          <div>
            {clicked ? (
              <EventAddForm />
            ) : <EventList />}
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1 className="home-title">Events</h1>
        <div className="home">
          <EventList />
        </div>
      </div>
    )
  }

}

export default Home