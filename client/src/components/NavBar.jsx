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




                    {/* <button className="nav-button" onClick={handleClick}>Profile</button> */}
                    {user ? (
                        <div>
                            <Link to="/">
                                <button className="nav-button">Home</button>
                            </Link>
                            <button className="nav-button" onClick={handleClick}>Profile</button>
                            <button className="nav-button" onClick={() => signOut()}>Sign Out</button>

                        </div>) : (
                        <div>
                            <Link to="/">
                                <button className="nav-button">Home</button>
                                <Link to="/login">
                                    <button className="nav-button">Login</button>
                                </Link>
                            </Link>
                        </div>
                    )

                    }
                </nav>
            </header>
        </div>
    )
}

export default NavBar