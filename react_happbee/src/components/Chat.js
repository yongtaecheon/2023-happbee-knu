import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';


//useEffect : 웹을 처음 실행할 때만 데이터를 받아오는 작업을 실행
//fetch : 주소에 있는 데이터 GET
// response 객체의 json() 이용하여 json 데이터를 객체로 변화
export default function Chat() {
  const [userInput, setUserInput] = useState(''); //초기값 noll
  const [answer, setAnswer] = useState(''); //바뀌는 값, 설정할 변수와 설정을 바꿔주는 함수
  // const [userName, setUserName] = useState('');
  const handleSubmit = async () => {
    try {
      const response = await fetch('/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput })
      });

      const data = await response.json(); 
      setAnswer(data.answer); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Chat">
      <h1>HAPPBEE와 대화하기</h1>
      {/* <input
              type="text"
              placeholder="내 이름"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            /> */}
      {/* <button onClick={handleSubmit}>설정하기</button> */}
      <input
        type="text"
        placeholder="Ask a question..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)} />
      <button onClick={handleSubmit}>Ask</button>
      <div>
        <strong>Question:</strong> {userInput}
        <strong>Answer:</strong> {answer}
      </div>
    </div>
  );
}
