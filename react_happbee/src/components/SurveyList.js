import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SurveyList() {
  const [surveys, setSurveys] = useState('');
  const [statscore, setStatscore] = useState([0, 0, 0, 0, 0])
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
    setHapp((current) => current + (k) * parseFloat(surveys[surveyID].wei))
    if ((surveyID == 0) || (surveyID == 1)){
      setStatscore((prevStatscore) => [prevStatscore[0] + (k) * parseFloat(surveys[surveyID].wei), prevStatscore[1], prevStatscore[2], prevStatscore[3], prevStatscore[4]]);
    }
    else if((surveyID == 2) || (surveyID == 3)){
      setStatscore((prevStatscore) => [prevStatscore[0], prevStatscore[1] + (k) * parseFloat(surveys[surveyID].wei), prevStatscore[2], prevStatscore[3], prevStatscore[4]]);
    }
    else if ((surveyID == 4) || (surveyID == 5)){
      setStatscore((prevStatscore) => [prevStatscore[0], prevStatscore[1], prevStatscore[2] + (k) * parseFloat(surveys[surveyID].wei), prevStatscore[3], prevStatscore[4]]);
    }
    else if ((surveyID == 6) || (surveyID == 7)||(surveyID ==8) ||(surveyID==9)){
      setStatscore((prevStatscore) => [prevStatscore[0], prevStatscore[1], prevStatscore[2], prevStatscore[3] + (k) * parseFloat(surveys[surveyID].wei), prevStatscore[4]]);
    }
    else{
      setStatscore((prevStatscore) => [prevStatscore[0], prevStatscore[1], prevStatscore[2], prevStatscore[3], prevStatscore[4] + (k) * parseFloat(surveys[surveyID].wei)]);
    }
    
  };

  function buttons() {
    const arr = [];
    for (let i = 1; i <= 10; i++){
      const targetPage = nextID === 14 ? '/result' : `/survey/${nextID}`;

      arr.push(
        <Link to={{pathname:targetPage, state: { happ }}}>
          <Button className="surveyButton m-2" variant="secondary" size="lg" onClick={() =>handleWeight(i)}>{i}</Button>
        </Link>
      );
    }
    return arr;
  }

  return (
    <div className="SurveyList">
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