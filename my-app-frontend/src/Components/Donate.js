import React, {useState, useContext} from "react"
import { Input, Button } from "semantic-ui-react"
import { AuthContext } from "../Context/AuthContext"


const Donate = ({ animal, setAnimal }) => {

    const [amount, setAmount] = useState(null)
    const auth = useContext(AuthContext)
    const loginUserId = auth.user.id


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
        fetch(`http://localhost:9292/animals/${animal.id}/donations`, postReqObj)
            .then((res) => res.json())
            .then((data) => {
                animal.donations = animal.donations + parseInt(amount)
                setAnimal({ ...animal })
                setAmount("")
            })
    }

    return (
        <>
            <Input 
                type="text"
                name="name"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Donate...' />
            <Button onClick={addDonation}>Donate</Button>
        </>
    )
}

export default Donate