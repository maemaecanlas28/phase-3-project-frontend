import React from "react";
import { Card } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"
import Likes from "./Likes";



function OneAnimal({ animal, increaseAnimalLikes }) {

    const navigate = useNavigate();

    function handleClickAnimalCard(animalId) {
        navigate(`/animals/${animalId}`);
    }

    const animalAdopt = animal["adopted?"]

    return (
        <Card>
            <div className="card-img-container">
                <img
                    className="card-img"
                    src={animal.image_url}
                    onClick={() => handleClickAnimalCard(animal.id)}
                    size="medium"
                    alt="animal" />
            </div>
            <Card.Content>
                <Card.Header>{animal.name}</Card.Header>
                <Card.Meta>
                    <div>
                        <span className="species-font-color">
                            Species: <b>{animal.species}</b>
                        </span>
                    </div>
                    <div>
                        <span className="species-font-color">
                            Adopted? <b>{animalAdopt === true ? "Adopted 🐾" : "Not adopted"}</b>
                        </span>
                    </div>
                    <div>
                        <Likes animal={animal} increaseAnimalLikes={increaseAnimalLikes}/>
                    </div>
                </Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default OneAnimal