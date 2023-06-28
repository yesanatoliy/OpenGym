import Event from "./Event"
import Client from '../services/api'
import { useState, useEffect } from 'react'

const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await Client.get(`/events`)
        setEvents(response.data.events)
    }

    useEffect(() => {
        getEvents()
    }, [])


    return (
        <div className="event">
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