import React, { useState, useEffect, useContext } from "react";
import { Input, Form, TextArea } from 'semantic-ui-react'
import { AuthContext } from "../Context/AuthContext";


function Comments({ animal }) {

    const auth = useContext(AuthContext)
    const [listOfMessages, setListOfMessages] = useState([])
    const [userComment, setUserComment] = useState("")
    const loginUserId = auth.user.id

    useEffect(() => {
        fetch(`http://localhost:9292/animals/${animal.id}/comments`)
            .then(data => data.json())
            .then(data => {
                setListOfMessages(data)
            })
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
                "animal_id": animal.id
            })
        }
        fetch(`http://localhost:9292/animals/${animal.id}/comments`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                setListOfMessages([...listOfMessages, data])
                setUserComment("")
            })
    }

    function removeComment(message) {
        const postReqObj = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            }
        }
        fetch(`http://localhost:9292/comments/${message.id}}`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                const newList = [...listOfMessages]
                let listingIndex = 0
                for (let i = 0; i < newList.length; i++) {
                    const currListing = newList[i]
                    if (currListing.id === message.id) {
                        listingIndex = i;
                        break;
                    }
                }
                newList.splice(listingIndex, 1)
                setListOfMessages(newList);
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
                                <span className="pointer" onClick={() => removeComment(message)}> {message.message} </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div>
                <label><b>Add Your Comment!</b></label>
                <Form onSubmit={userComment.length > 0 ? addComment : null}>
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