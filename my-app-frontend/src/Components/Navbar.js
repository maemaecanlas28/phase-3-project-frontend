import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button, Menu } from "semantic-ui-react"
import { AuthContext } from "../Context/AuthContext";


function Navbar () {

    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const [activeItem, setActiveItem] = useState("Home")

    function handleLogout() {
        auth.signout()
        .then(() => navigate("/login"))
    }

    return (
        <Menu>
        <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={() => setActiveItem("Home")}>
            <Link to="/"> Home </Link>
        </Menu.Item>
        <Menu.Item
            name="Animals"
            active={activeItem === "Animals"}
            onClick={() => setActiveItem("Animals")}>
            <Link to="/animals"> Animals </Link>
        </Menu.Item>
        <Menu.Item
            name="About Us"
            active={activeItem === "About Us"}
            onClick={() => setActiveItem("About Us")}>
            <Link to="/about"> About Us </Link>
      </Menu.Item>
      <Button onClick={handleLogout}>
        Logout
    </Button>
    </Menu>
    )
}

export default Navbar