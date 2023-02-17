import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"



const ProfilePage = () => {

  const navigate = useNavigate()

  const { user } = useParams()
  const [profile, setProfile] = useState({})

  const handleClick = () => {
    navigate(`/profile/update/${profile._id}`)
  }

  const getUser = async () => {
    const result = await axios.get(`/api/user/${user}`)
    setProfile(result.data.result)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <NavBar />
      <div className="profile-info">
        <h3>Profile name: {profile.username}</h3>
        <h3>Email: {profile.email}</h3>
        <h3>Password: {profile.password}</h3>
        <button className="add-event" id="update-user" onClick={() => handleClick()}>Update User</button>
      </div>
    </div>
  )
}

export default ProfilePage