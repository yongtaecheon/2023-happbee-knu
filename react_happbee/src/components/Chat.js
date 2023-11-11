import React, { useState, useRef } from 'react';

//useEffect : 웹을 처음 실행할 때만 데이터를 받아오는 작업을 실행
//fetch : 주소에 있는 데이터 GET
// response 객체의 json() 이용하여 json 데이터를 객체로 변화
function CreateUser({ question, onChange, onCreate }) {
  return (
    <div className="ChatInputContainer">
      <input
        type="text"
        placeholders="Question"
        name="question"
        value={question}
        onChange={onChange}
      />
      <button onClick={onCreate}>Ask</button>
    </div>
  );
}

function UserList({users}) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div className="ChatContent">
          {/* User's message */}
            <div className="ChatMessage UserMessage">

              <div className="SenderMessageBubble">{user.question}</div>

            </div>

          {/* Happbee's response */}
          <div className="ChatMessage HappbeeMessage">

            <div className="GiverMessageBubble">{user.answer}</div>

          </div>
        </div>

      </li>
      ))}
    </ul>

  );
}

export default function Chat() {

  const [userInput, setUserInput] = useState('');
  const [users, setUsers] = useState([]);
  const nextId = useRef(1);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserInput(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput })
      }); // Response Closure


      const data = await response.json();
      const user = {
        id: nextId.current,
        question: userInput,
        answer: data.answer,
      };
      setUsers([...users, user]);//(users.concat(user));
      setUserInput("");
      nextId.current += 1;

    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="ChatContainer">
      <div className="ProfileContainer">
        <div className="ProfilePicture"></div>
        <div className="ProfileInfo">
          <h2>HAPPBEE</h2>
        </div>
      </div>

      <div className="ChatContent">
        <UserList users={users}/>
      </div>
      <div className="ChatInputContainer">
        <CreateUser
        question = {userInput}
        onChange = {handleChange}
        onCreate = {handleSubmit}
        />
      </div>
    </div>
  );
}