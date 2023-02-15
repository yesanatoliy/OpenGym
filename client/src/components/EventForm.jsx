import { useState } from "react"

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
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        // await axios.post('/events/user/:userId', formState)
        setFormState(initialState)
      }
    
      const handleChange = (e) => {
        setFormState(
          {...formState, [e.target.id]: e.target.value}
        )
      }
  return (
    <form>
        <label htmlFor="test">Test</label>
        <input id="test" type="text"></input>
    </form>
  )
}

export default EventForm