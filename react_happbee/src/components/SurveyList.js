import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SurveyList() {
  const [surveys, setSurveys] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/request-survey'); // Update the URL based on your Flask server
      const jsonData = await response.json();
      setSurveys(jsonData);//id, qu, wei
      console.log(surveys)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const { surveyID } = useParams();
  const nextID = parseInt(surveyID) + 1;
  const [happ, setHapp] = useState(0);
  const handleWeight = (k) => {
    console.log('시발'+k);
    // setHapp((current) => current + i * parseInt(surveys[surveyID].wei))
  };

  function buttons() {
    const arr = [];
    for (let i = 1; i <= 10; i++){
      arr.push(
        <Link to={`/survey/${nextID}`}>
          <Button className="surveyButton m-2" variant="secondary" size="lg" onClick={handleWeight(i)}>{i}</Button>
        </Link>
      );
    }
    return arr;
  }

  return (
    <div className="SurveyList">
      <p>현재 행복지수 {happ}</p>
      <Button variant="dark" size="sm">
            Happbee 지수 {nextID} / 14
      </Button>
      {/* a&&b : a가 참일때 b를 렌더링함 */}
      <p className="font-big bolder"> {surveys && surveys[`${surveyID}`].qu} </p> 
      <p className="normal">순간적으로 떠오른 느낌에 따라 답해주세요.</p>
      {buttons()}
    </div>
  );
}