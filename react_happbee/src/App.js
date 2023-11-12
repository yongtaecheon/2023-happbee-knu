import React from 'react';
import SurveyList from './components/SurveyList'
import Survey from './components/Survey';
import Main from './components/Main';
import Nav from './components/Nav';
import Chat from './components/Chat';
import Item from './components/Item'
import Hosp from './components/Hosp';
import SurveyResult from './components/SurveyResult';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {

  return (
    <div className="d-flex App bold">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="survey/:surveyID" element={<Nav />} />
            <Route path="/main" element={<Nav />} />
            <Route path="/chat" element={<Nav />} />
            <Route path="/item" element={<Nav />} />
            <Route path="/hosp" element={<Nav />} />
            <Route path="/result" element={<Nav />} />
        </Routes>
      </BrowserRouter>
      <div className="Content bolder">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Survey />}/>
            <Route path="survey/:surveyID" element={<SurveyList />} />
            <Route path="/main" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/item" element={<Item />} />
            <Route path="/hosp" element={<Hosp />} />
            <Route path="/result" element={<SurveyResult />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
  
}
