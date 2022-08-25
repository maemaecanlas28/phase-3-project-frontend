import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { Input, Form, TextArea } from 'semantic-ui-react'
import { AuthContext } from "../Context/AuthContext";


function Comments ({ animal }) {

    const auth = useContext(AuthContext)
    const [listOfMessages, setListOfMessages] = useState([])
    const [userComment, setUserComment] = useState("")
    const params = useParams();
    const animalId = parseInt(params.id)
    const loginUserId = auth.user.id

    useEffect(() => {
        fetch(`http://localhost:9292/animals/${animalId}/comments`)
          .then(data => data.json())
          .then(data => {
            setListOfMessages(data)})
      }, [])

    const addComment = (e) => {
        e.preventDefault()
        const postReqObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify({
                "message": userComment,
                "user_id": loginUserId,
                "animal_id": animalId
            })
        }
        fetch(`http://localhost:9292/animals/${animalId}/comments`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                setListOfMessages([...listOfMessages, data])
                setUserComment("")
            })
    }

    return (
        <div>
        <b>Comments:</b>
        <ul>
            {listOfMessages.map((message, index) => {
                return (
                    <li key={index}>
                        <div>
                            <span> <b>{message.username}</b> </span>
                            <span> ({message.location}) says: </span>
                            <span> {message.message} </span>
                        </div>
                    </li>
                )
            })}
        </ul>
        <div>
            <label><b>Add Your Comment!</b></label>
                <Form onSubmit={addComment}>
                    <TextArea
                        type="text"
                        name="comments"
                        placeholder="Add Comment"
                        value={userComment}
                        onChange={(e) => setUserComment(e.target.value)} />
                    <Input type="submit" className="button-margin" />
                </Form>
        </div>
    </div>
    )
}

export default Comments