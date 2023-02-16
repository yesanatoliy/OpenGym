import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import ProfileUpdateForm from "../components/ProfileUpdateForm"

const ProfilePage = () => {

  const { user } = useParams()
  const [profile, setProfile] = useState({})
  const [clicked, toggleClicked] = useState(false)

  const handleClick = () => {
    if (clicked === false) {
      toggleClicked(true)
    } else {
      toggleClicked(false)
    }
  }
  
  const getUser = async () => {
    const result = await axios.get(`/api/user/${user}`)
    setProfile(result.data.result)
  }

  useEffect(() => {
    getUser()
  }, [clicked])

  return (
    <div>
      <NavBar />
      {clicked ? (<div>
        <button onClick={() => handleClick()}>Close</button>
        <ProfileUpdateForm 
        username={profile.username}
        email={profile.email}
        password={profile.password}
        id={profile._id}
        getUser={getUser}
        />
      </div>) :
        (<div>
          <button onClick={() => handleClick()}>Update User</button>
          <h3>{profile.username}</h3>
          <h3>{profile.email}</h3>
          <h3>{profile.password}</h3>
        </div>)}
      
    </div>
  )
}

export default ProfilePage