import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Chart from 'chart.js/auto';


export default function SurveyResult() {
  const location = useLocation();
  const happ = location.state.happ;
  const statscore = location.state.statscore;

  const [meanstat, setMeanstat] = useState([]);
  const [mean, setMean] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/request-score');
        const data = await response.json();
        setMeanstat(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Effect for creating the chart
  useEffect(() => {
    // 차트 생성
    const ctx = document.getElementById('myChart');

    const existingChart = Chart.getChart(ctx);

    // If an existing Chart instance is found, destroy it
    if (existingChart) {
      existingChart.destroy();
    }

    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['경제', '삶의 만족도', '관계', '자유', '감정'],
        datasets: [{
          label: '내 지수',
          data:[
            statscore[0] / 2,
            statscore[1] / 2,
            statscore[2] / 2,
            statscore[3] / 4,
            statscore[4] / 4


          ],
          backgroundColor: 'rgba(203,206,145,.5)',
          borderColor: 'rgba(203,206,145,1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }, [statscore]);

  useEffect(() => {
    // 차트 생성
    const ctx = document.getElementById('Chart1');

    const existingChart = Chart.getChart(ctx);

    // If an existing Chart instance is found, destroy it
    if (existingChart) {
      existingChart.destroy();
    }
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['삶의 만족도', '관계', '자유', '감정'],
        datasets: [{
          label: '평균',
          data: meanstat.length > 0 ? Object.values(meanstat[0]).slice(1) : [],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
        {
          label: '내 지수',
          data:[
            statscore[1],
            statscore[2],
            statscore[3],
            statscore[4]
          ],
          backgroundColor: 'rgba(203,206,145,.5)',
          borderColor: 'rgba(203,206,145,1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
      }
    });
  }, [meanstat]);

  return (
    <div className="SurveyResult">
      <p className='font-big bolder'>나의 햅삐지수는 {Math.round(happ)}점 입니다</p>
      {/* {console.log(meanstat[0].total)} */}
      {/* <p>내 점수는 평균과 {Math.round(Math.abs(meanstat[0].total - happ))}점 차이나요.</p> */}
      {console.log(statscore)
      
      /* <p>점수 분석 결과: {statscore[0]} {statscore[1]} {statscore[2]} {statscore[3]} {statscore[4]}</p> */}
      <div className='chart-container'>
      <div className='chart'>
        <canvas id="myChart"></canvas>
      </div>
      </div>
      <div className='chart-container'>
      <div className='chart'>
        <canvas id="Chart1"></canvas>
      </div>
    </div>
      {}
    </div>
  );
}