import React, { useState } from 'react';

//useEffect : 웹을 처음 실행할 때만 데이터를 받아오는 작업을 실행
//fetch : 주소에 있는 데이터 GET
// response 객체의 json() 이용하여 json 데이터를 객체로 변화

export default function Chat() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [userTyping, setUserTyping] = useState(false);
  // const [userName, setUserName] = useState('');

  const simulateTyping = (text, setCallback) => {
    setUserTyping(true);
    let index = 0;

    const typingInterval = setInterval(() => {
      setAnswer((prevInput) => prevInput + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(typingInterval);
        setUserTyping(false);
        
      }
    }, 100); // 타이핑 속도 조절
  };

  const handleSubmit = async () => {
    try {
      await simulateTyping(userInput, async () => {
        setTimeout(async () => {
          const response = await fetch('/ask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_input: userInput })
          });

      const data = await response.json();
      setAnswer(data.answer);
      simulateTyping(data.answer, () => {});
      }, 2000); // 2초 딜레이
    });
        
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const shouldRenderChatContent = userInput.trim() !== '' && answer.trim() !== '';


  return (
    <div className="ChatContainer">
      <div className="ProfileContainer">
        <div className="ProfilePicture">
        </div>
        <div className="ProfileInfo">
          <h2>HAPPBEE</h2>
        </div>
      </div>

      {shouldRenderChatContent && (
      <div className="ChatContent">
        {/* User's message */}
        <div className="ChatMessage UserMessage">
          <div className="MessageBubble">{userInput}</div>
        </div>

        {/* Happbee's response */}
        <div className="ChatMessage HappbeeMessage">
          <div className="MessageBubble">{answer}</div>
        </div>
      </div>
      )}
      <div className="ChatInputContainer">
        <input
          type="text"
          placeholder="Ask a question..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Ask</button>
      </div>
    </div>
  );
}
