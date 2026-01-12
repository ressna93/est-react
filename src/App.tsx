import React, { useState } from 'react';

import './App.css';
import { UserInfo } from './UserInfo';

function App() {
  const [name, setName] = useState<string>('홍길동');
  const [age, setAge] = useState<number>(20);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(event.target.value));
  };
  return (
    <>
      <input
        className="border p-1.5"
        type="text"
        placeholder="이름을 입력하세요."
        onChange={handleNameChange}
      />
      <input
        className="border p-1.5 ml-2"
        type="number"
        placeholder="나이를 입력하세요."
        onChange={handleAgeChange}
      />
      <UserInfo name={name} age={age} />
    </>
  );
}

export default App;
