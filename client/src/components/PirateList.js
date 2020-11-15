import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {

    const getEverything = () => {
        Axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    };

    const [pirates, setPirates] = useState([]);
    useEffect( () => {
        getEverything();
    }, []);

    const deleteObject = (_id) => {
        Axios.delete(`http://localhost:8000/api/pirate/${_id}`)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    
    return(
        <div className="container">
            <h1>Pirate Crew</h1>
            <table className="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>View Pirate Info</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pirates.map( pirate =>
                            <tr key={pirate._id}>
                                <td><Link to={`/pirate/${pirate._id}`}>{pirate.name}</Link></td>
                                <td><img src="https://i.pinimg.com/originals/5d/f5/0c/5df50c705763e944bb025258ce92812a.jpg" height={100} width={100}></img>{pirate.image}</td>
                                <td>
                                    <Link to={`/edit/${pirate._id}`} className="btn btn-primary" >Edit</Link>
                                    <Link to={"/${pirate._id}"} onClick={ e => {deleteObject(pirate._id)}} className="btn btn-danger">Walk the plank!</Link>
                                </td>
                                
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}