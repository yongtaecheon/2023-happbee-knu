import React, { useState, useRef } from 'react';

// import { Button } from 'react-bootstrap';
//useEffect : 웹을 처음 실행할 때만 데이터를 받아오는 작업을 실행
//fetch : 주소에 있는 데이터 GET
// response 객체의 json() 이용하여 json 데이터를 객체로 변화
function CreateUser({ question, onChange, onCreate }) {
  return (
    <div>
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
          Question: {user.question}, Answer: {user.answer}
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
      });

      const data = await response.json();
      const user = {
        id: nextId.current,
        question: userInput,
        answer: data.answer,
      };
      setUsers([...users, user]);//(users.concat(user));
      setUserInput("");
      nextId.current += 1;
      console.log(users)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="Chat">
      <h1>HAPPBEE와 대화하기</h1>
      <CreateUser
        question = {userInput}
        onChange = {handleChange}
        onCreate = {handleSubmit}
      />
      <UserList users = {users} />
    </div>
  );
}