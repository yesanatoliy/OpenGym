import axios from "axios"
import { useState } from "react"

const EventUpdateForm = (props) => {

    const initialState = {
        name: props.name,
        address: props.address,
        cost: props.cost,
        level: props.level,
        contact: props.contact,
        date: props.date,
        time: props.time,
        description: props.description,
        imageUrl: props.imageUrl
    }

    const [formState, setFormState] = useState(initialState)
    const [updateStatus, toggleUpdateStatus] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`/api/events/${props.id}`, formState)
        setFormState(initialState)
        toggleUpdateStatus(true)
        props.getEvent()
    }

    const handleChange = (e) => {
        setFormState(
            { ...formState, [e.target.id]: e.target.value }
        )
    }

    if (updateStatus === false) {
        return (

            <form className="update-form" onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' onChange={handleChange} value={formState.name} />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" onChange={handleChange} value={formState.address} />
                <label htmlFor="cost">Cost</label>
                <input type="text" id="cost" onChange={handleChange} value={formState.cost} />
                <label htmlFor='level'>Level</label>
                <input type="text" id='level' onChange={handleChange} value={formState.level} />
                <label htmlFor="contact">Contact</label>
                <input type="text" id="contact" onChange={handleChange} value={formState.contact} />
                <label htmlFor="date">Date</label>
                <input type="text" id="date" onChange={handleChange} value={formState.date} />
                <label htmlFor='time'>Time</label>
                <input type="text" id='time' onChange={handleChange} value={formState.time} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" onChange={handleChange} value={formState.description} />
                <label htmlFor="image-url">Image</label>
                <input type="text" id="image-url" onChange={handleChange} value={formState.imageUrl} />
                <button id="update-event" className="add-event" type="submit">Update Event</button>
                
            </form>
        )
    }
    else {
        return (
            <div>
                Updated!
            </div>)
    }
}

export default EventUpdateForm