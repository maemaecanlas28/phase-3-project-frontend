import React from "react"


const Donate = ({ animal, setAnimal }) => {

    const addDonation = (e) => {
        e.preventDefault()
        const postReqObj = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json",
            },
            body: JSON.stringify({
                "amount": amount,
                "user_id": loginUserId,
                "animal_id": animal.id
            })
        }
        fetch(`http://localhost:9292/animals/${animal.id}/comments`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                animal.donations = animal.donations + amount
                setAnimal({...animal})
            })
    }

    return (
        <>
        <section className="hero">
            <h1>Donate</h1>
        </section>
        </>
    )
}

export default Donate