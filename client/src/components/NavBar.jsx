import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="nav">
        <nav>
            <Link to="/">
                Home
            </Link>

            <Link to="/profile">
                Profile
            </Link>
            
            <Link to="/search">
                Search
            </Link>
        </nav>
    </div>
  )
}

export default NavBar