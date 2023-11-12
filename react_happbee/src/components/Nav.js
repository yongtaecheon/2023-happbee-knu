import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
      <div className="Nav d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="bolder fs-4">햅비 HAPPBEE</span>
        </a>
        <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mt-5 mb-5">
          <a href="/main" className={`nav-link ${pathname === '/main' ? "active link" : "link-dark"}`} aria-current="page">
              <i class="bi bi-house-door"></i>
              <br></br>홈
            </a>
          </li>
          <li className="nav-item mb-5">
            <a href="/chat" className={`nav-link ${pathname === '/chat' ? "active link" : "link-dark"}`}>
              <i class="bi bi-chat-dots"></i>
              <br></br>채팅
            </a>
          </li>
          <li className="nav-item mb-5">
            <a href="/survey/0" className={`nav-link ${pathname === '/survey/0' ? "active link" : "link-dark"}`}>
              <i class="bi bi-clipboard2-heart"></i>
              <br></br>햅비지수
            </a>
          </li>
          <li className="nav-item mb-5">
            <a href="/hosp" className={`nav-link ${pathname === '/hosp' ? "active link" : "link-dark"}`}>
              <i class="bi bi-heart-pulse"></i>
              <br></br>병원과 <br></br>상담하기
            </a>
          </li>
        </ul>
        <hr/>
      </div>
    );

}