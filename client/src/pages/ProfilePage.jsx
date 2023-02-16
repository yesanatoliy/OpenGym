import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const ProfilePage = () => {
  const { user } = useParams()
  
  const getUser = async () => {
    const result = await axios.get(`/api/user/${user}`)
    console.log(result)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage