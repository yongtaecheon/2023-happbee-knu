import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
      <div className="Nav d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="bolder fs-4">햅비 HAPPBEE</span>
        </a>
        <hr/>
      <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active link" aria-current="page">
              <i class="bi bi-house-door"></i>
              &nbsp;홈
            </a>
          </li>
          <li>
            <a href="/chat" className="nav-link link-dark">
              <i class="bi bi-chat-dots"></i>
              &nbsp;채팅
            </a>
          </li>
          <li>
            <a href="/survey/0" className="nav-link link-dark">
              <i class="bi bi-clipboard2-heart"></i>
              &nbsp;햅비지수
            </a>
          </li>
          <li>
            <a href="/hosp" className="nav-link link-dark">
              <i class="bi bi-heart-pulse"></i>
              &nbsp;전문가와 상담하기
            </a>
          </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>mdo</strong>
          </a>
        </div>
      </div>
    );

}