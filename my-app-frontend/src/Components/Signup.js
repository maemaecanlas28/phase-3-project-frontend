import React, {useState} from "react";
import { Button, Form, Message } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"

function Signup () {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();

    function handleSubmit (event) {
        event.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "username": username,
                "password": password,
                "location": location
            }),
        }

        return fetch("http://localhost:9292/signup", configObj)
            .then((data) => data.json())
            .then((data) => {
                    if (data.error) {
                        setError(data.error)
                    }
                    else {
                        navigate("/login");
                    }
                })
                .catch()
        }

    return (
    <div className="login-form">
        <Form onSubmit={handleSubmit} error={error.length == 0 ? "false" : "true"}>
        <Form.Field>
            <label>Name</label>
            <input
                type="text"
                name="Name"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)} />
        </Form.Field>
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
        <Form.Field>
            <label>Location</label>
            <input
                type="text"
                name="Location"
                placeholder='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)} />
        </Form.Field>
        {error.length !== 0 ? (
            <Message
                error
                header='Action Forbidden'
                content={error}/>
        ): null}
        <Button type='submit'>Submit</Button>
    </Form>
    </div>
    )
}

export default Signup