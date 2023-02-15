import Event from "./Event"
import axios from 'axios'
import { useState, useEffect } from 'react'



const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await axios.get(`/api/events`)
        setEvents(response.data.events)
    }
    
    useEffect(() => {
        getEvents()
    }, [])
    

  return (
    <div>
        {
            events.map((event) => (
                <Event 
                name={event.name}
                address={event.address}
                cost={event.cost}
                level={event.level}
                contact={event.contact}
                date={event.date}
                time={event.time}
                description={event.description}
                id={event._id}
                />
            ))
        }
        
    </div>
  )
}

export default EventList