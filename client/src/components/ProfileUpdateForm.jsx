import { useState, useEffect } from "react"
import Client from "../services/api"
import { useNavigate, useParams } from "react-router-dom"



const ProfileUpdateForm = () => {

    const { userId } = useParams()

    const navigate = useNavigate()

    const [formState, setFormState] = useState({})
    const [profile, setProfile] = useState({})


    const getUser = async () => {
        let result = await Client.get(`/profile/${userId}`)
        setProfile(result.data.user)
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        const initialState = {
            password: profile.password,
            username: profile.username,
            email: profile.email
        }
        setFormState(initialState)
    }, [profile])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await Client.put(`/user/${userId}`, formState)
        localStorage.setItem(
            "username", `${formState.username}`
        )
        navigate(`/profile/${localStorage.getItem('username')}`)
    }

    const handleChange = (e) => {
        setFormState(
            { ...formState, [e.target.id]: e.target.value }
        )
    }
    
    return (
        <div>
            
            <form className="profile-update" onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input type="text" id='username' onChange={handleChange} value={formState.username || ''} />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={handleChange} value={formState.email || ''} />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={handleChange} value={formState.password || ''} />
                <button id="update-user" className="add-event" type="submit">Update User</button>
            </form>
        </div>
    )
}

export default ProfileUpdateForm