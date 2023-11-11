import React from 'react';
import SurveyList from './components/SurveyList'
import Survey from './components/Survey';
import Main from './components/Main';
import Nav from './components/Nav';
import Chat from './components/Chat';
import Hosp from './components/Hosp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {

  return (
    <div className="d-flex App bold">
      <Nav/>
      <div className="Content bolder">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Survey />}/>
            <Route path="survey/:surveyID" element={<SurveyList />} />
            <Route path="/main" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/hosp" element={<Hosp />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
  
}
