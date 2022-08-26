import React, {useContext} from "react";
import { Button, Icon, Label } from 'semantic-ui-react'
import { AuthContext } from "../Context/AuthContext";

function Likes({ animal, increaseAnimalLikes }) {

    const auth = useContext(AuthContext)
    const loginUserId = auth.user.id


    const addLike = (e) => {
        e.preventDefault()
        const postReqObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify({
                "user_id": loginUserId,
                "animal_id": animal.id
            })
        }
        fetch(`http://localhost:9292/animals/${animal.id}/likes`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                increaseAnimalLikes(animal);
            })
    }

    return (
        <div>
            <Button 
                as='div' 
                labelPosition='right'
                onClick={addLike}>
                <Button color='red'>
                <Icon name='heart' />
                    Love
                </Button>
                <Label as='a' basic color='red' pointing='left'>
                    {animal.likes}
                </Label>
            </Button>
        </div>
    )

}

export default Likes