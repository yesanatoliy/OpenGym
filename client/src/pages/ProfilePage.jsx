import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"

const ProfilePage = () => {

  const { user } = useParams()
  const [profile, setProfile] = useState({})
  
  const getUser = async () => {
    const result = await axios.get(`/api/user/${user}`)
    setProfile(result.data.result)
  }

  // const handleClick = () => {

  // }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <NavBar />
      <button>Update</button>
      <h3>{profile.username}</h3>
      <h3>{profile.email}</h3>
      <h3>{profile.password}</h3>
    </div>
  )
}

export default ProfilePage