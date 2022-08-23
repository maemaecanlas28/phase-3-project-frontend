import React from "react"
import { Card } from "react-bootstrap"

const AnimalPage = () => {
    const cardInfo = [
        {image: "greger",title: "terwddwdqwdqwdqwdqwdqwter", text: "treter" },
        {image: "fewfwe",title: "fwefwefwf", text: "fewfwefwef" },
        {image: "fewfwefw",title: "fwefwefwe", text: "fewfwefwe" },
        
    ]

    const Animals = (card, index) => {

        return (
            <>
                <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </>
        )
    }
    return <div className="grid">{cardInfo.map(Animals)}</div>;
}

export default AnimalPage