import React, { useState, useContext } from "react";
import { Button, Form } from 'semantic-ui-react'
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useContext(AuthContext);

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();
        auth.signin(username, password)
            .then(() => {
                navigate(from, { replace: true });
            })
            .catch()
    }

    return (
        <div className="login-form">
            <Form>
                <Form.Field onSubmit>
                    <label>Username</label>
                    <input
                        type="text"
                        name="Username"
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        type="text"
                        name="Password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default Login