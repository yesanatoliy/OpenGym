import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const ProfileUpdateForm = (props) => {

    const navigate = useNavigate()
  
    const initialState = {
        username: props.username,
        email: props.email,
        password: props.password
    }
    
    const [formState, setFormState] = useState(initialState)
    const [updateStatus, toggleUpdateStatus] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`/api/user/${props.id}`, formState)
        localStorage.setItem(
            "username", `${formState.username}`
            )
        setFormState(initialState)
        toggleUpdateStatus(true)
    }

    const handleChange = (e) => {
        setFormState(
            { ...formState, [e.target.id]: e.target.value }
        )
    }
    if (updateStatus === false){
        return (
            
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' onChange={handleChange} value={formState.username} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleChange} value={formState.email} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleChange} value={formState.password} />
                <button type="submit">Update User</button>
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

export default ProfileUpdateForm