import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { AuthContext } from "../Context/AuthContext";

function Adopt ({ animal, setAnimal }) {

    const animalAdopt = animal["adopted?"]

    console.log("Hello World!",animalAdopt)
    const auth = useContext(AuthContext);
    const params = useParams();
    const animalId = parseInt(params.id);
    const loginUserId = auth.user.id;


    function handleAdopt (event) {
        event.preventDefault();

        fetch(`http://localhost:9292/animals/${animalId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "adopted?": true,
                "user_id": loginUserId,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                setAnimal(data)
            })
    }
    return (
        <Button onClick={handleAdopt}>Adopt me! ❤️</Button>
     )
    }



 

export default Adopt