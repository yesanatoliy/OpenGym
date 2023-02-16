import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import EventUpdateForm from '../components/EventUpdateForm'
import NavBar from '../components/NavBar'

const EventPage = () => {
  const navigate = useNavigate()

  const [event, setEvent] = useState({})
  const [comments, setComments] = useState([])
  const [clicked, toggleClicked] = useState(false)

  const handleClick = () => {
    if (clicked === false) {
      toggleClicked(true)
    } else {
      toggleClicked(false)
    }
  }

  const { eventId } = useParams()

  const getEvent = async () => {
    const result = await axios.get(`/api/events/${eventId}`)
    setEvent(result.data.event)
  }

  const getComments = async () => {
    const result = await axios.get(`/api/events/${eventId}/comments`)
    setComments(result.data.comments)
  }

  const deleteEvent = async () => {
    await axios.delete(`/api/events/${eventId}`)
    navigate('/home')
  }


  useEffect(() => {
    getEvent()
    getComments()
  }, [])

  return (
    <div>
      <NavBar />
      {clicked ? (<div>
        <button onClick={() => handleClick()}>Close</button>
        <EventUpdateForm 
        name={event.name}
        date={event.date}
        time={event.time}
        address={event.address}
        level={event.level}
        cost={event.cost}
        contact={event.contact}
        description={event.description}
        id={event._id}
        getEvent={getEvent}
        />
      </div>) :
        (<div>
          <button onClick={() => handleClick()}>Update Event</button>
          <h1>{event?.name}</h1>
          <h3>{event?.date}</h3>
          <h3>{event?.time}</h3>
          <h3>{event?.address}</h3>
          <h3>{event?.level}</h3>
          <h3>{event?.cost}</h3>
          <h3>{event?.contact}</h3>
          <h4>{event?.description}</h4>
        </div>)}


      {comments.map((comment) => (
        <h6>{comment.contents}</h6>
      ))}
      <button onClick={() => deleteEvent()}>Delete Event</button>
    </div>
  )
}

export default EventPage