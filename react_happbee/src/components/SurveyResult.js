import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SurveyResult() {
    const location = useLocation();
    const happ = location.state.happ;
    const statscore = location.state.statscore;

    const chartData = {
      labels: ['협업', '성장', '동기부여', '개인생활', '건강'],
      datasets: [
        {
          label: '팀 점수',
          data: data,
          backgroundColor: 'rgba(255, 108, 61, 0.2)',
        },
      ],
    };

    

    return (
        <div className="SurveyResult">
            <p className="font-big bolder">나의 햅삐지수는 {happ}점 입니다.</p>
            <p>전체 평균 점수보다 {happ}점 차이나요</p>
            <p>점수 분석 결과:</p>
        </div>
    );

    
  

}