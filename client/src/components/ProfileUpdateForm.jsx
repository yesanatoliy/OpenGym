import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import NavBar from "./NavBar"


const ProfileUpdateForm = () => {

    const { userId } = useParams()

    const navigate = useNavigate()

    const [formState, setFormState] = useState({})
    const [profile, setProfile] = useState({})


    const getUser = async () => {
        let result = await axios.get(`/api/profile/${userId}`)
        setProfile(result.data.user)
        console.log(profile)
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

    console.log(profile)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`/api/user/${userId}`, formState)
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
            <NavBar />
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' onChange={handleChange} value={formState.username || ''} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleChange} value={formState.email || ''} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleChange} value={formState.password || ''} />
                <button type="submit">Update User</button>
            </form>
        </div>
    )
}

export default ProfileUpdateForm