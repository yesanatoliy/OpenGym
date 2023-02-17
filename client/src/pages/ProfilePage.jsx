import axios from "axios"
import { useParams, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"



const ProfilePage = () => {

  const navigate = useNavigate()

  const { user } = useParams()
  const [profile, setProfile] = useState({})
  const [clicked, toggleClicked] = useState(false)

  const handleClick = () => {
    if (clicked === false) {
       navigate(`/profile/update/${profile._id}`)
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
  }, [])

  return (
    <div>
      <NavBar />
      {clicked ? (<div>
        <button onClick={() => handleClick()}>Close</button>
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