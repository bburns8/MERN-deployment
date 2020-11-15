import React, {useEffect, useState } from 'react';
import axios from 'axios';
import PirateForm from '../components/PirateForm';
import PirateList from '../components/PirateList';
import PirateInfo from '../components/PirateInfo'; 
import EditPirateForm from '../components/EditPirateForm';
import { Router, Link } from '@reach/router';

export default () => {
    return (
        <>
            <div className="container">
                <Link to="/">Crew Board</Link> | 
                <Link to="/new"> Add a Pirate</Link>
            </div>
            
            <Router>
                <PirateList path="/" />
                <PirateForm path="/new" />
                <PirateInfo path="/pirate/:_id" />
                <EditPirateForm path="/edit/:_id" />
            </Router>

        </>
    )
}