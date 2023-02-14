import Event from "./Event"
import axios from 'axios'
import { useState, useEffect } from 'react'



const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await axios.get(`http://localhost:3001/api/events`)
        setEvents(response.data.events)
    }
    
    useEffect(() => {
        getEvents()
    }, [])
    

  return (
    <div>
        {
            events.map((event) => (
                <Event />
            ))
        }
        
    </div>
  )
}

export default EventList