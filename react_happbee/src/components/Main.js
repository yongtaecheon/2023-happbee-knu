import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat_3 from '../assets/cat_3.jpeg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import mainLogo from '../assets/main_logo.png';

export default function Main()
{
    return (
        <div className="Main d-flex">
            <div className="main1">
                <img className="mainLogo" width="40%" src={mainLogo}></img>
                <br></br>
                <div className="titled">
                    <hr width="100%" color="gray" noshade/>
                    <h1 classNmae="title_h1">안녕 사용자야</h1>
                    <br></br>
                    <h3 classNmae="title_h3">햅비냥과 대화해서 기분전환을 해봐~</h3>
                    <hr width="100%" color="gray" noshade/>
                </div>
                <br></br>
                <Link to="/chat">
                        <Button className="chattingStart" variant="dark" size="lg" >햅비냥과 채팅</Button>{' '}
                </Link>
            </div>
           <div className="main2"> 
                <img className="cat_3" width="80%" src={cat_3}></img>
                <ProgressBar className="gauge"variant="info" now={60} label={`${60}%`}  />
                <br></br>
                <Link to="/item">
                        <Button className="itemButton" variant="dark" size="lg" >햅비냥 꾸미기</Button>{' '}
                </Link>
            </div>
            
        </div>
    );
}