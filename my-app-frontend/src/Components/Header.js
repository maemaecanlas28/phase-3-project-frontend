import React from "react";
import WFFBanner from "../Image/WFFBanner.gif"

function Header () {
    return (
    <div>
        <img 
            src={WFFBanner}
            alt="WFF Banner" 
            id="main-header" />
        {/* <button onClick={() => toggleIsDarkMode(!isDarkMode)}></button> */}
    </div>
    )
}

export default Header