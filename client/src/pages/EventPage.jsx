import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { useEffect, useState } from 'react'
import EventUpdateForm from '../components/EventUpdateForm'


const EventPage = (props) => {
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
    const result = await Client.get(`/events/${eventId}`)
    setEvent(result.data.event)
  }

  const getComments = async () => {
    const result = await Client.get(`/events/${eventId}/comments`)
    setComments(result.data.comments)
  }

  const deleteEvent = async () => {
    await Client.delete(`/events/${eventId}`)
    navigate('/')
  }


  useEffect(() => {
    getEvent()
    getComments()
  }, [])

  if (props.user) {

    return (
      <div>
      
      {clicked ? (<div>
        <button id="close-two" className='add-event' onClick={() => handleClick()}>Close</button>
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
          imageUrl={event.imageUrl}
          getEvent={getEvent}
          />
      </div>) :
        (<div className='event-details'>
          <button className='add-event' id="update-event" onClick={() => handleClick()}>Update</button>
          <button className='add-event' id='delete-event' onClick={() => deleteEvent()}>Delete Event</button>
          <h1>{event?.name}</h1>
          <img src={event?.imageUrl} alt="Gym image" />
          <h3>Date: {event?.date}</h3>
          <h3>Time: {event?.time}</h3>
          <h3>Address: {event?.address}</h3>
          <h3>Skill Level: {event?.level}</h3>
          <h3>Entry cost: {event?.cost}</h3>
          <h3>Contact: {event?.contact}</h3>
          <h4>{event?.description}</h4>
        </div>)}

      <h3 className='comment-label'>Comment Section</h3>
      {comments.map((comment) => (
        <h5 className='comment'>{comment.contents}</h5>
        ))}
      
    </div>
  )
}
else {
  return(
    <div>
      
      

        <div className='event-details'>
          <h1>{event?.name}</h1>
          <img src={event?.imageUrl} alt="Gym image" />
          <h3>Date: {event?.date}</h3>
          <h3>Time: {event?.time}</h3>
          <h3>Address: {event?.address}</h3>
          <h3>Skill Level: {event?.level}</h3>
          <h3>Entry cost: {event?.cost}</h3>
          <h3>Contact: {event?.contact}</h3>
          <h4>{event?.description}</h4>
        </div>

      <h3 className='comment-label'>Comment Section (demo)</h3>
      {comments.map((comment) => (
        <h5 className='comment'>{comment.contents}</h5>
        ))}
      
    </div>
  )
}
}

export default EventPage