import React, {useState} from "react";
import { AuthContext } from "../Context/AuthContext";


function AuthProvider ({ children }) {
    let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
    let signin = async (username, password) => {

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
        }
        // do fetch to call /login in api
        return fetch("http://localhost:9292/login", configObj)
            .then((r) => r.json())
            .then((data) => {
                if (!data.error) {
                    setUser(data);
                    localStorage.setItem("user", JSON.stringify(data))
                }
                return data
            })
            .catch((error) => {console.log(error)})
    };
  
    let signout = async () => {
        setUser(null);
        localStorage.removeItem("user");
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

export default AuthProvider