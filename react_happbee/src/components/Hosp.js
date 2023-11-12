import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineEnvironment, AiOutlinePhone } from "react-icons/ai";

export default function Hosp() {
  const [hosps, setHosps] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/request-hosp'); // Update the URL based on your Flask server
      const jsonData = await response.json();
      setHosps(jsonData);//id, qu, wei
      console.log(hosps)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  function hosplist() {
    const arr = [];
    for (let i = 1; i < hosps.length; i++) {
      arr.push(
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card mb-3">
            <h5 className="card-header">{hosps && hosps[i][0]}</h5>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{hosps && hosps[i][1]} </p>
                <footer className="blockquote-footer">{hosps && hosps[i][2]}  <AiOutlinePhone /></footer>
              </blockquote>
            </div>
          </div>
        </div>
      );
    }
    return arr;
  }
    return (
        <div className="Hosp">
          <p className='handwriting'>당신이 힘들 때, 우리는 여기 있어요<br></br>어떤 어려움이든 함께 극복해 나가요</p>
          <p className="font"><AiOutlineEnvironment />현재 위치 : {hosps && hosps[0]}</p>
        <div className="row">
            {hosplist()}
          </div>
        </div>
    );
}