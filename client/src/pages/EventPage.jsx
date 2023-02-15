import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const EventPage = () => {

    const [event, setEvent] = useState({})

    const {eventId} = useParams()

    const getEvent = async () => {
        const result = await axios.get(`/api/events/${eventId}`)
        setEvent(result.data.event)
    }

    useEffect(() => {
      getEvent()
  }, [])

  return (
    <div>
      <h1>hello</h1>
      <h2>{event?.name}</h2>
      <h3>{event?.date}</h3>
    </div>
  )
}

export default EventPage