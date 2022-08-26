import React, { useEffect, useState } from "react";
import OneAnimal from "./OneAnimal"
import { Card } from "semantic-ui-react";


function Animals () {

    const [animals, setAnimals] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/animals")
        .then(data => data.json())
        .then(data => setAnimals(data))
    }, [])

    function increaseAnimalLikes (animal) {
       const newAnimalList = [...animals]
        const oneAnimal = newAnimalList.find(item => item.id === animal.id)
        oneAnimal.likes = oneAnimal.likes + 1
        setAnimals(newAnimalList)
    }

      const animalCards = animals
        .map(animal => {
            return (
                <OneAnimal key={animal.id} animal={animal} increaseAnimalLikes={increaseAnimalLikes}/>
            )
        })

    return (
        <div className="animals-display">
        <Card.Group itemsPerRow={4}>
            {animalCards}
        </Card.Group>
    </div>
    )
}
    

export default Animals