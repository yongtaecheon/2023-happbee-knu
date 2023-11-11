import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/main_logo.png'

export default function Survey() {
    return (
        <div className="Survey">
            <img className="mainLogo" src={mainLogo}></img>
            <br></br>
            <Link to="/survey/0">
                <Button className="surveyStart" variant="dark" size="lg" >Let's Start</Button>{' '}
            </Link>
        </div>
    );
}