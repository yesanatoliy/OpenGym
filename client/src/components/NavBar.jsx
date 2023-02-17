import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/profile/${localStorage.getItem('username')}`)
    }

    return (
        <div>
            <header className="nav">
                <nav>
                    <Link to="/home">
                        <button className="nav-button">Home</button>
                    </Link>


                    <button className="nav-button" onClick={handleClick}>Profile</button>
                </nav>
            </header>
        </div>
    )
}

export default NavBar