import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
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
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar