import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasure, setTreasure] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [feature, setFeature] = useState("");
    const [errors, setErrors] = useState({});


    useEffect( () => {
        axios.get(`http://localhost:8000/api/pirate/${props._id}`)
            .then(res => {
                setName(res.data.name);
                setImage(res.data.image);
                setTreasure(res.data.treasure);
                setPhrase(res.data.phrase);
                setPosition(res.data.position);
                setFeature(res.data.feature);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [props._id])


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pirate/${props._id}`, {
            name,
            image,
            treasure,
            phrase,
            position,
            feature
        })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
                console.log(res)
                
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="container">
            <h1>Pirate Crew</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Pirate Name:</label>
                    <input type="text" onChange = {e => setName(e.target.value)} className="form-control" value={name} />
                    <span className="text-danger">{errors.name ? errors.name.message: "" }</span>
                </div>

                <div className="form-group">
                    <label>Image Url:</label>
                    <input type="text" onChange = {e => setImage(e.target.value)} className="form-control" value={image} />
                    <span className="text-danger">{errors.image ? errors.image.message: "" }</span>
                </div>

                <div className="form-group">
                    <label># of Treasure Chests:</label>
                    <input type="number" onChange = {e => setTreasure(e.target.value)} className="form-control" value={treasure} />
                    <span className="text-danger">{errors.treasure ? errors.treasure.message: "" }</span>
                </div>

                <div className="form-group">
                    <label>Pirate Catch Phrase:</label>
                    <input type="text" onChange = {e => setPhrase(e.target.value)} className="form-control" value={phrase} />
                    <span className="text-danger">{errors.phrase ? errors.phrase.message: "" }</span>
                </div>

                <div className="form-group">
                    <label>Crew Position:</label>
                    <input list="crew-position" onChange = {e => setPosition(e.target.value)} className="form-control" value={position} />
                    <span className="text-danger">{errors.position ? errors.position.message: "" }</span>
                    <datalist id="crew-position">
                        <option value="Captain"></option>
                        <option value="First Mate"></option>
                        <option value="Quarter Master"></option>
                        <option value="Boat Swain"></option>
                        <option value="Powder Monkey"></option>
                    </datalist>
                </div>

                <div className="form-group">
                    <label>Pirate Feature:</label>
                    <input type="checkbox" value="Peg Leg" checked="checked" onChange = {e => setFeature(e.target.value)} />
                    <label htmlFor="Peg Leg">Peg Leg</label>
                    <input type="checkbox" value="Eye Patch" checked="checked"/>
                    <label htmlFor="Eye Patch">Eye Patch</label>
                    <input type="checkbox" value="Hook Hand" checked="checked"/>
                    <label htmlFor="Hook Hand">Hook Hand</label>
                </div>

                <input type="submit" value="Edit Pirate" className="btn btn-success"/>
                
            </form>
        </div>
    )

}