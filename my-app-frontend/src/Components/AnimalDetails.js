import React from "react";
import { Item } from 'semantic-ui-react'
import { useParams } from "react-router-dom"

function AnimalDetails ({ animals }) {

    const params = useParams();
    const animalId = parseInt(params.id)
    const animal = animals.find(animal => animal.id === animalId)

    return (
        <div className="animal-body">
                        <Item.Group>
                            <Item >
                                <Item.Image 
                                    size='large' 
                                    src={animal.image_url} />
                                <Item.Content>
                                    <h2><strong>{animal.name}</strong></h2>
                                    <div className="text-margin">
                                        <span><b>Species:</b> {animal.species}</span>
                                    </div>
                                    <div className="text-margin">
                                        <span><b>Description:</b> {animal.description}</span>
                                    </div>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </div>
    )
}

export default AnimalDetails