import React from "react";
import { Card } from 'semantic-ui-react'
import { useNavigate } from "react-router-dom"



function OneAnimal ({ animal }) {

    const navigate = useNavigate();

    function handleClickAnimalCard(animalId) {
       navigate(`/animals/${animalId}`);
    }

    return (
            <Card>
                <div className="card-img-container">
                    <img 
                        className="card-img"
                        src={animal.image_url}
                        onClick={() => handleClickAnimalCard(animal.id)}   
                        size="medium"
                        alt="animal"/>
                </div>
                <Card.Content>
                    <Card.Header>{animal.name}</Card.Header>
                    <Card.Meta>
                        <span className="species-font-color">
                            Species: <b>{animal.species}</b>
                        </span>
                    </Card.Meta>   
                </Card.Content>
            </Card>
    )
}

export default OneAnimal