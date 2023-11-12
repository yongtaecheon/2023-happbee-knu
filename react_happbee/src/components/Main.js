import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat_3 from '../assets/cat_3.jpeg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import mainLogo from '../assets/main_logo.png';


export default function Main()
{
    const [chatcount, setChatcount] = useState('');
    const [gauge, setGauge] = useState('');
    const [level, setLevel] = useState('');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/request-gauge-level'); // Update the URL based on your Flask server
            const jsonData = await response.json();
            setChatcount(parseInt(jsonData.chat_count));
            setGauge(parseInt(jsonData.gauge));
            setLevel(parseInt(jsonData.level));
            console.log(jsonData.chat_count, jsonData.gauge, jsonData.level);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
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
                <div className="d-flex">
                    <div className="col">햅비냥과 대화한 횟수: {chatcount}</div>
                    <div className="col">햅비냥과의 친밀도: {level}</div>
                </div>
                <ProgressBar className="gauge" variant="secondary" now={gauge} label={`${gauge}%`} />
                <br></br>
                <Link to="/item">
                        <Button className="itemButton" variant="dark" size="lg" >햅비냥 꾸미기</Button>{' '}
                </Link>
            </div>
            
        </div>
    );
}
