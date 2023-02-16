import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/profile/${localStorage.getItem('username')}`)
    }
  
    return (
    <div className="nav">
        <nav>
            <Link to="/home">
                <button>Home</button>
            </Link>

            
            <button onClick={handleClick}>Profile</button> 
            
            
            <Link to="/search">
                <button>Search</button>
            </Link>
        </nav>
    </div>
  )
}

export default NavBar