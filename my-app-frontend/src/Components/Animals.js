import OneAnimal from "./OneAnimal"
import { Card } from "semantic-ui-react";


function Animals ({ animals, setAnimals }) {

      const animalCards = animals
        .map(animal => {
            return (
                <OneAnimal key={animal.id} animal={animal} />
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