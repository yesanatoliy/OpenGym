import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { RegisterUser } from '../services/Auth'

const SignUp = () => {
    const navigate = useNavigate()

    const initialState = {
        username: '',
        email: '',
        password: ''
    }
    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser(formState)
        setFormState(initialState)
        navigate(`/login`)
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
                <p>
                    OpenGym is an app for volleyball players of all skill levels to find information about open gym locations in their
                    local area.
                </p>
            </div>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <label className='login-element' htmlFor='username'>Username</label>
                <input className='login-element' type="text" id='username' onChange={handleChange} value={formState.username}></input>
                <label className='login-element' htmlFor="email">Email</label>
                <input className='login-element' type="text" id="email" onChange={handleChange} value={formState.email} />
                <label className='login-element' htmlFor="password">Password</label>
                <input type="password" id="password" className='login-element' onChange={handleChange} value={formState.password} />
                <button className='login-element' type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp