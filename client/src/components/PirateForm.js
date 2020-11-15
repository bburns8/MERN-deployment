import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [treasure, setTreasure] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [feature, setFeature] = useState("");
    const [errors, setErrors] = useState({});


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirate', {
            name,
            image,
            treasure,
            phrase,
            position,
            feature,
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
            <h1>Add a Pirate</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Pirate Name:</label>
                    <input type="text" onChange = {e => setName(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.name ? errors.name.message: "" }</span>
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" onChange = {e => setImage(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.image ? errors.image.message: "" }</span>
                </div>

                <div className="form-group">
                    <label># of Treasure Chests:</label>
                    <input type="number" onChange = {e => setTreasure(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.treasure ? errors.treasure.message: "" }</span>
                </div>

                <div className="form-group">
                    <label>Pirate Catch Phrase:</label>
                    <input type="text" onChange = {e => setPhrase(e.target.value)} className="form-control" />
                    <span className="text-danger">{errors.phrase ? errors.phrase.message: "" }</span>
                </div>

                <div className="form-group">
                    <label>Crew Position:</label>
                    <input list="crew-position" onChange = {e => setPosition(e.target.value)} className="form-control" />
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

                <input type="submit" value="Add Pirate" className="btn btn-primary" />
                <button onClick={e => {navigate("/")}} className="btn btn-danger">Cancel</button>
                
            </form>
        </div>
    )

}