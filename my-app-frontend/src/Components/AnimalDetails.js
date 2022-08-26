import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import { useParams } from "react-router-dom"
import { Item } from 'semantic-ui-react'
import Adopt from "./Adopt"

function AnimalDetails () {

    const params = useParams();
    const animalId = parseInt(params.id)
    const [animal, setAnimal] = useState(null)
    
    useEffect(() => {
        fetch(`http://localhost:9292/animals/${animalId}`)
          .then(data => data.json())
          .then(data => setAnimal(data))
      }, [])

      const animalAdopt = animal && animal["adopted?"]
      
    return (
    <>
    {animal != null ? (
        <div className="animal-body">
                        <Item.Group>
                            <Item >
                                <div className="animal-border">
                                <Item.Image 
                                    size='large' 
                                    src={animal.image_url} />
                                </div>
                                <Item.Content>
                                    <h2><strong>{animal.name}</strong></h2>
                                    <div className="text-margin">
                                        <span>Species: <b>{animal.species}</b></span>
                                    </div>
                                    <div className="text-margin">
                                        <span>Description: {animal.description}</span>
                                    </div>
                                    <div className="text-margin">
                                        <span>Adopted? <b>{animalAdopt === true ? "Adopted 🐾" : "Not Adopted"}</b></span>
                                    </div>
                                    <div className="text-margin">
                                        <span>Owner: <b>{animalAdopt === true ? animal.owner : "** Waiting for an owner 🥰 **"}</b></span>
                                    </div>
                                    <div className="text-margin">
                                        {animalAdopt === false ? <Adopt animal={ animal } setAnimal={setAnimal} /> : null}
                                    </div>
                                    <div className="text-margin">
                                        <Comments animal={animal} />
                                    </div>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </div> ): null}
                    </>
    )
}

export default AnimalDetails