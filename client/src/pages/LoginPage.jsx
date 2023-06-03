import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { SignInUser } from '../services/Auth'

const LoginPage = (props) => {
  const navigate = useNavigate()

  const initialState = {
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formState)
    props.setUser(payload)
    setFormState(initialState)
    navigate(`/`)
  }

  const guestSignIn = async (e) => {
    // e.preventDefault()
    const payload = await SignInUser({
      email: 'guest@guest.com',
      password: 'guest'
    })
    props.setUser(payload)
    setFormState(initialState)
    navigate(`/`)
  }

  const handleChange = (e) => {
    setFormState(
      { ...formState, [e.target.id]: e.target.value }
    )
  }




  return (
    <div className='login'>
      <header className='login-header'><h1>Welcome to OpenGym</h1></header>
      <div className='app-description'>
        <p className='app-description'>
          OpenGym is an app for volleyball players of all skill levels to find information about open gym locations in their
          local area.
        </p>
      </div>
      <div className='login-form'>

      <form className='' onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label className='login-element' htmlFor="email">Email</label>
        <input className='login-element' type="text" id="email" onChange={handleChange} value={formState.email} />
        <label className='login-element' htmlFor="password">Password</label>
        <input type="password" id="password" className='login-element' onChange={handleChange} value={formState.password} />
        <button className='login-element' type="submit">Login</button>
      </form>
        <button className='login-element' type="" onClick={() => guestSignIn()}>Guest login</button>
      </div>
    </div>
  )
}

export default LoginPage