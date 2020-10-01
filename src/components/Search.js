import React, { useState } from 'react';
import styled from 'styled-components';

export default function SearchScreen() {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    setInput(e.target.value);
    e.preventDefault();
    // setInput('');
  };
  return (
    <>
      <App>
        <Input
          type="text"
          placeholder="Javascript"
          name="search"
          onChange={handleInput}
          value={input}
        />
      </App>
    </>
  );
}
const App = styled.div`
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  height: 100%;
`;
const Input = styled.input`
  // width: 50vmin;
  // height: 3vmin;
`;
