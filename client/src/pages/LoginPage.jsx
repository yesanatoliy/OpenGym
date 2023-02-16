import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()

  const initialState = {
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('/api/user', formState)
    // localStorage.setItem(
    //   "email", `${formState.email}`
    //   )
    setFormState(initialState)
    navigate(`/home`)
  }

  const handleChange = (e) => {
    setFormState(
      {...formState, [e.target.id]: e.target.value}
    )
  }


  
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" onChange={handleChange} value={formState.email} />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" onChange={handleChange} value={formState.password} />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default LoginPage