import { useState, useEffect } from "react"
import axios from "axios"

const EventForm = () => {
  
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
    await axios.post(`/events/user/${user._id}`, formState)
    setFormState(initialState)
  }

  const handleChange = (e) => {
    setFormState(
      { ...formState, [e.target.id]: e.target.value }
    )
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="test">Test</label>
      <input id="test" type="text"></input>
    </form>
  )
}

export default EventForm