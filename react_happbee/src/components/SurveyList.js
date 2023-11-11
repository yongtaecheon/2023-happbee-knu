import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// const surveys = [
//     { id: '1', qu: '1. 나는 자신에 별로 만족하지 않는다.', wei: 3 },
//     { id: '2', qu: '2. 나는 다른 사람들에 대해 크게 흥미가 있다.', wei: 2 },
//     { id: '3', qu: '3. 나는 삶이 아주 보람 있다고 느낀다.', wei: 5 },
// ];

export default function SurveyList() {
    const [surveys, setSurveys] = useState('');
    const fetchData = async () => {
      try {
        const response = await fetch('/survey/0');
        const jsonData = await response.json();
        setSurveys(jsonData);
        console.log('Data received:', jsonData);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
      fetchData();
      },
    []);

    const { surveyID } = useParams();
    const nextID = parseInt(surveyID) + 1;

    function buttons() {
        const arr = [];
        for (let i = 0; i <= 10; i++){
            arr.push(
                <Link to={`/survey/${nextID}`}>
                    <Button className="surveyButton" variant="secondary" size="lg">{i}</Button>&nbsp;&nbsp;
                </Link>
            );
        }
        return arr;
    }

    return (
        <div className="SurveyList">
            <Button variant="dark" size="sm">
                 Happbee 지수 {surveys[surveyID].id} / 10
            </Button>
            <p className="font-big bolder"> {surveys[surveyID].detail} </p>
            <p className="normal">순간적으로 떠오른 느낌에 따라 답해주세요.</p>
            {buttons()}
            {/* <Link to={`/survey/${nextID}`}>
                <Button variant="primary">Next Question</Button>{' '}
            </Link> */}
        </div>
    );
}