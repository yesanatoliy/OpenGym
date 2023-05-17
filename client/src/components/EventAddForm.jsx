import { useState, useEffect } from "react"
import axios from "axios"

const EventAddForm = () => {

  const initialState = {
    name: '',
    address: '',
    cost: '',
    level: '',
    contact: '',
    date: '',
    time: '',
    description: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [user, setUser] = useState({})

  const getUser = async () => {
    const result = await axios.get(`/api/user/${localStorage.getItem('username')}`)
    setUser(result.data.result)
  }

  useEffect(() => {
    getUser()
  }, [])




  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`/api/events/user/${user._id}`, formState)
    setFormState(initialState)
  }

  const handleChange = (e) => {
    setFormState(
      { ...formState, [e.target.id]: e.target.value }
    )
  }
  return (

    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor='name'>Event Name</label>
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
      <button id="submit-add" className="add-event" type="submit">Submit</button>
    </form>

  )
}

export default EventAddForm