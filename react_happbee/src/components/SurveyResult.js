import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SurveyResult() {
    const location = useLocation();
    const happ = location.state.happ;
    const statscore = location.state.statscore;
    return (
        <div className="SurveyResult">
            <p>최종점수: {happ}</p>
            <p>점수 분석 결과:</p>
        </div>
    );

}