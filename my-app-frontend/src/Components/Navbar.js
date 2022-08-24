import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { Button } from "semantic-ui-react"
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    function handleLogout() {
        auth.signout()
        .then(() => navigate("/login"))
    }

    return (
        <>
        <nav className="navbar">
            <div className="container">
                <h3 className="logo">World Flatlife Fund</h3>

                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li> 
                    </Link>
                    <Link to="/animals"> 
                        <li>Animals</li> 
                    </Link>
                    <Link to="/about">
                        <li>About</li> 
                    </Link>
                    <Button onClick={handleLogout}>
                        Logout
                    </Button>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar