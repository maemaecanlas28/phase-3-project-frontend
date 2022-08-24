import React, {useState} from "react";
import { AuthContext } from "../Context/AuthContext";

function AuthProvider ({ children }) {
    let [user, setUser] = useState(null);
  
    let signin = async (username, password) => {
        // do fetch to call /login in api
        return fetch("change this", {})
            .then(() => {
                setUser(true);
            })
    };
  
    let signout = async () => {
        setUser(null);
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

export default AuthProvider