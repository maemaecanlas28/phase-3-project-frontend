import React, { useState, useContext } from "react";
import { Button, Form, Message } from 'semantic-ui-react'
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useContext(AuthContext);
    const [error, setError] = useState("")

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();
        auth.signin(username, password)
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    navigate(from, { replace: true });
                }
            })
            .catch()
    }

    function handleSignup () {
        navigate("/signup")
    }

    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit} error={error.length == 0 ? "false" : "true"}>
                <Form.Field>
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
                        type="password"
                        name="Password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Field>
                {error.length !== 0 ? (
                    <Message
                        error
                        header='Action Forbidden'
                        content={error}/>
                ): null}
                <Button type='submit'>Submit</Button>
                <Button onClick={handleSignup}>Sign-up</Button>
            </Form>
        </div>
    )
}

export default Login