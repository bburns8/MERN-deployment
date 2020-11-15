import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


export default props => {
    const [pirate, setPirate] = useState({})
    const [likes, setLikes] = useState(0)


    const getPirate = () => {
        axios.get("http://localhost:8000/api/pirate/" + props._id)
        .then(response => {
            setPirate(response.data)
            console.log(response)
        })
        .catch(err => console.log("Error:", err))
    }


    useEffect( () => {
        getPirate();
        
    }, [props._id])

    const deleteObject = (_id) => {
        axios.delete(`http://localhost:8000/api/pirate/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <h3>Details about {pirate.name}</h3>
            <p>Image URL: {pirate.image}</p><td><img src="https://i.pinimg.com/originals/5d/f5/0c/5df50c705763e944bb025258ce92812a.jpg" height={100} width={100}></img>{pirate.image}</td>
            <p># of Treasure Chests: {pirate.treasure}</p>
            <p>Catch Phrase: 
                <ul>
                    {pirate.phrase ? <li>{pirate.phrase}</li> : "" }
                </ul>
            </p>
            <p>Crew Position:
                    {pirate.position ? <li>{pirate.position}</li> : "" }
            </p>
            <p>Pirate Feature: {pirate.feature}
            {pirate.feature ? <li>{pirate.feature}</li> : "Peg Leg, Eye Patch, Hook Hand" }</p>
        </div>

    )
}