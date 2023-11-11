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

  // function buttons() {
  //   const arr = [];
  //   for (let i = 0; i <= 10; i++){
  //     arr.push(
  //       <Link to={`/survey/${nextID}`}>
  //           <Button className="surveyButton" variant="secondary" size="lg">{i}</Button>&nbsp;&nbsp;
  //       </Link>
  //     );
  //   }
  //   return arr;
  // }

  return (
    <div className="SurveyList">
      {surveys[`${surveyID}`].qu}
      {/* <Button variant="dark" size="sm">
            Happbee 지수 {surveys[surveyID].id} / 10
      </Button>
      <p className="font-big bolder"> {surveys[surveyID].qu} </p>
      <p className="normal">순간적으로 떠오른 느낌에 따라 답해주세요.</p>
      {buttons()}
      {/* <Link to={`/survey/${nextID}`}>
          <Button variant="primary">Next Question</Button>{' '}
      </Link> */}
    </div>
  );
}