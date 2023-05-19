import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const NavBar = ({ setUser, user }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/profile/${localStorage.getItem('username')}`)
    }
    const signOut = () => {
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    return (
        <div>
            <header className="nav">
                <nav>
                    <Link to="/">
                        <button className="nav-button">Home</button>
                    </Link>
                    <Link to="/login">
                        <button className="nav-button">Sign Up</button>
                    </Link>


                    <button className="nav-button" onClick={handleClick}>Profile</button>
                    {user && (<button className="nav-button" onClick={() => signOut()}>Sign Out</button>)}
                </nav>
            </header>
        </div>
    )
}

export default NavBar